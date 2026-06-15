// ============================================================
// CertTrack Pro — Score Engine (Pure JS Functions)
// ============================================================

/**
 * Calculate total score and category breakdown for a student
 * @param {object} student - student object
 * @param {object} config - scoringConfig from departmentConfig
 * @returns {{ total, academics, internships, placements, hackathons, projects, certifications, sports }}
 */
export function calculateScore(student, config) {
  const academics = calcAcademics(student.academics, config.academics);
  const internships = calcInternships(student.internships, config.internships);
  const placements = calcPlacements(student.placements, config.placements);
  const hackathons = calcHackathons(student.hackathons, config.hackathons);
  const projects = calcProjects(student.projects, config.projects);
  const certifications = calcCertifications(student.certifications, config.certifications);
  const sports = calcSports(student.sports, config.sports);

  const total = Math.min(100, Math.max(0,
    academics + internships + placements + hackathons + projects + certifications + sports
  ));

  return { total: Math.round(total), academics: Math.round(academics * 10) / 10, internships: Math.round(internships * 10) / 10, placements: Math.round(placements * 10) / 10, hackathons: Math.round(hackathons * 10) / 10, projects: Math.round(projects * 10) / 10, certifications: Math.round(certifications * 10) / 10, sports: Math.round(sports * 10) / 10 };
}

function calcAcademics(ac, maxPts) {
  if (!ac) return 0;
  const total = (ac.CIA1?.obtained || 0) + (ac.CIA2?.obtained || 0) + (ac.capstone?.obtained || 0) + (ac.practicals?.obtained || 0);
  const maxMarks = (ac.CIA1?.maxMarks || 35) + (ac.CIA2?.maxMarks || 35) + (ac.capstone?.maxMarks || 20) + (ac.practicals?.maxMarks || 10);
  return (total / maxMarks) * maxPts;
}

function calcInternships(internships, maxPts) {
  if (!internships || internships.length === 0) return 0;
  const approved = internships.filter(i => i.status === 'approved');
  if (approved.length === 0) return 0;
  // Best internship
  let best = 0;
  for (const intern of approved) {
    const dur = intern.duration_months || 0;
    const tier = intern.type;
    let pts = 0;
    if (dur >= 6 && (tier === 'MNC')) pts = maxPts;
    else if (dur >= 3 && (tier === 'MNC' || tier === 'govt')) pts = maxPts * 0.7;
    else if (dur >= 2) pts = maxPts * 0.4;
    else pts = maxPts * 0.2;
    best = Math.max(best, pts);
  }
  return Math.min(maxPts, best);
}

function calcPlacements(placements, maxPts) {
  if (!placements || placements.length === 0) return 0;
  const approved = placements.filter(p => p.status === 'approved');
  if (approved.length === 0) return 0;
  const best = approved.reduce((mx, p) => Math.max(mx, p.ctc || 0), 0);
  if (best >= 1000000) return maxPts;       // 10L+
  if (best >= 600000) return maxPts * 0.8;   // 6-10L
  if (best >= 300000) return maxPts * 0.53;  // 3-6L
  return maxPts * 0.2;                        // 0-3L
}

function calcHackathons(hackathons, maxPts) {
  if (!hackathons || hackathons.length === 0) return 0;
  const approved = hackathons.filter(h => h.status === 'approved');
  let pts = 0;
  for (const h of approved) {
    if (h.result === 'winner') pts += 10;
    else if (h.result === 'runner-up') pts += 5;
    else pts += 2;
  }
  return Math.min(maxPts, pts);
}

function calcProjects(projects, maxPts) {
  if (!projects || projects.length === 0) return 0;
  const approved = projects.filter(p => p.status !== 'rejected');
  if (approved.length === 0) return 0;
  // GitHub score based on commit_count + languages + activity
  let score = 0;
  for (const p of approved) {
    const commits = p.commitCount || 0;
    const langs = p.techStack ? p.techStack.length : 0;
    const stars = p.stars || 0;
    score += Math.min(3, commits / 50) + Math.min(1, langs / 3) + Math.min(1, stars / 10);
  }
  return Math.min(maxPts, score * (maxPts / 5));
}

function calcCertifications(certifications, maxPts) {
  if (!certifications || certifications.length === 0) return 0;
  const approved = certifications.filter(c => c.status === 'approved');
  return Math.min(maxPts, approved.length * 1);
}

function calcSports(sports, maxPts) {
  if (!sports || sports.length === 0) return 0;
  const approved = sports.filter(s => s.status === 'approved');
  let pts = 0;
  for (const s of approved) {
    switch (s.level) {
      case 'national': pts += 5; break;
      case 'state': pts += 3; break;
      case 'district': pts += 2; break;
      case 'college': default: pts += 1; break;
    }
  }
  return Math.min(maxPts, pts);
}

/**
 * Recalculate score after an approval and create history entry
 */
export function recalculateOnApproval(student, certId, config) {
  const scores = calculateScore(student, config);
  const oldScore = student.score;
  student.score = scores.total;
  student.categoryScores = {
    academics: scores.academics,
    internships: scores.internships,
    placements: scores.placements,
    hackathons: scores.hackathons,
    projects: scores.projects,
    certifications: scores.certifications,
    sports: scores.sports
  };
  student.scoreHistory.push({
    date: new Date().toISOString(),
    totalScore: scores.total,
    breakdown: { ...scores },
    trigger: `Certificate ${certId} approved (${oldScore} → ${scores.total})`
  });
  return scores;
}

/**
 * Recalculate on marks upload
 */
export function recalculateOnMarksUpload(student, marksObj, config) {
  const oldScore = student.score;
  Object.assign(student.academics, marksObj);
  const scores = calculateScore(student, config);
  student.score = scores.total;
  student.categoryScores = {
    academics: scores.academics,
    internships: scores.internships,
    placements: scores.placements,
    hackathons: scores.hackathons,
    projects: scores.projects,
    certifications: scores.certifications,
    sports: scores.sports
  };
  student.scoreHistory.push({
    date: new Date().toISOString(),
    totalScore: scores.total,
    breakdown: { ...scores },
    trigger: `Marks updated (${oldScore} → ${scores.total})`
  });
  return scores;
}

/**
 * Get score history for a student
 */
export function getScoreHistory(student) {
  return student.scoreHistory || [];
}

/**
 * Get rank among same-year students
 */
export function getRankInYear(student, allStudents) {
  const sameYear = allStudents.filter(s => s.year === student.year && s.status === 'active');
  sameYear.sort((a, b) => b.score - a.score);
  return sameYear.findIndex(s => s.id === student.id) + 1;
}

/**
 * Get rank across all students
 */
export function getDepartmentRank(student, allStudents) {
  const active = allStudents.filter(s => s.status === 'active');
  active.sort((a, b) => b.score - a.score);
  return active.findIndex(s => s.id === student.id) + 1;
}

/**
 * Initialize all student scores on app boot
 */
export function initializeAllScores(students, config) {
  for (const s of students) {
    const scores = calculateScore(s, config);
    s.score = scores.total;
    s.categoryScores = {
      academics: scores.academics,
      internships: scores.internships,
      placements: scores.placements,
      hackathons: scores.hackathons,
      projects: scores.projects,
      certifications: scores.certifications,
      sports: scores.sports
    };
    if (s.scoreHistory.length === 0) {
      // Seed some history
      const months = ['2024-04', '2024-05', '2024-06', '2024-07', '2024-08', '2024-09'];
      months.forEach((m, i) => {
        const variance = Math.round((Math.random() - 0.5) * 8);
        const past = Math.max(0, Math.min(100, scores.total - (6 - i) * 2 + variance));
        s.scoreHistory.push({
          date: `${m}-15T10:00:00`,
          totalScore: past,
          breakdown: { ...scores },
          trigger: i === months.length - 1 ? 'Current score' : 'Score recalculated'
        });
      });
      // Ensure last entry matches current score
      s.scoreHistory[s.scoreHistory.length - 1].totalScore = scores.total;
    }
  }
}

/**
 * Get score color
 */
export function getScoreColor(score) {
  if (score >= 80) return '#3B6D11';
  if (score >= 60) return '#185FA5';
  if (score >= 40) return '#BA7517';
  return '#A32D2D';
}

/**
 * Get initials from name
 */
export function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name[0].toUpperCase();
}
