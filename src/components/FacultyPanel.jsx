// ============================================================
// CertTrack Pro — Faculty Panel (All 6 Pages + Profile Modal)
// ============================================================
import React, { useState, useEffect } from 'react';
import {
  Avatar, ScoreRing, CategoryBars, StatusBadge, Tabs, Pagination,
  EmptyState, SearchInput, StatCard, BarChart, LineChart, Modal, formatDate, timeAgo
} from './SharedComponents';
import {
  calculateScore, getRankInYear, getDepartmentRank, getScoreColor, getInitials
} from '../scoreEngine';

export default function FacultyPanel({
  currentFaculty, students, faculty, config, addToast, activePage, setActivePage
}) {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [unreadNotifications, setUnreadNotifications] = useState(
    (currentFaculty.notifications || []).filter(n => !n.read)
  );

  // Filter students assigned to this faculty member
  const assignedStudents = students.filter(s => s.assignedFacultyId === currentFaculty.id);

  // Mark a notification as read
  const handleMarkRead = (id) => {
    // In-memory update for the view
    setUnreadNotifications(prev => prev.filter(n => n.id !== id));
    if (currentFaculty.notifications) {
      const target = currentFaculty.notifications.find(n => n.id === id);
      if (target) target.read = true;
    }
    addToast('Notification marked as read', 'success');
  };

  const handleMarkAllRead = () => {
    setUnreadNotifications([]);
    if (currentFaculty.notifications) {
      currentFaculty.notifications.forEach(n => n.read = true);
    }
    addToast('All notifications marked as read', 'success');
  };

  // Render sub-page
  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <FacultyDashboard
            assignedStudents={assignedStudents}
            students={students}
            onViewStudent={setSelectedStudent}
          />
        );
      case 'student-list':
        return (
          <StudentList
            assignedStudents={assignedStudents}
            students={students}
            onViewStudent={setSelectedStudent}
          />
        );
      case 'reports':
        return (
          <FacultyReports
            assignedStudents={assignedStudents}
            students={students}
            config={config}
          />
        );
      case 'intervention':
        return (
          <InterventionList
            assignedStudents={assignedStudents}
            addToast={addToast}
          />
        );
      case 'my-profile':
        return (
          <FacultyProfile
            currentFaculty={currentFaculty}
            assignedStudents={assignedStudents}
          />
        );
      case 'notifications':
        return (
          <FacultyNotifications
            notifications={currentFaculty.notifications || []}
            handleMarkRead={handleMarkRead}
            handleMarkAllRead={handleMarkAllRead}
          />
        );
      default:
        return <FacultyDashboard assignedStudents={assignedStudents} students={students} onViewStudent={setSelectedStudent} />;
    }
  };

  return (
    <div>
      {renderContent()}

      {/* Student Profile Modal */}
      {selectedStudent && (
        <StudentProfileModal
          student={selectedStudent}
          students={students}
          config={config}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 1 — Dashboard
// ──────────────────────────────────────────────────────────────
function FacultyDashboard({ assignedStudents, students, onViewStudent }) {
  const avgScore = assignedStudents.length > 0
    ? Math.round(assignedStudents.reduce((sum, s) => sum + s.score, 0) / assignedStudents.length)
    : 0;

  const pendingCertsCount = assignedStudents.reduce((count, s) => {
    return count + (s.certifications || []).filter(c => c.status === 'pending').length;
  }, 0);

  const atRiskStudents = assignedStudents.filter(s => s.score < 60);

  // Chart data: Score distribution by Year
  // Years: 2nd, 3rd, 4th, DSY
  const years = ['2nd', '3rd', '4th', 'DSY'];
  const barChartData = years.map(y => {
    const yearStudents = assignedStudents.filter(s => s.year === y);
    const avgYearScore = yearStudents.length > 0
      ? Math.round(yearStudents.reduce((sum, s) => sum + s.score, 0) / yearStudents.length)
      : 0;
    return {
      label: `${y} Year`,
      value: avgYearScore,
      color: y === '2nd' ? 'var(--primary)' : y === '3rd' ? 'var(--success)' : y === '4th' ? 'var(--purple)' : 'var(--warning)'
    };
  });

  // Recent Approvals feed: get last 5 approved certificates from assigned students
  const recentApprovals = assignedStudents.flatMap(s => 
    (s.certifications || [])
      .filter(c => c.status === 'approved')
      .map(c => ({
        studentName: s.name,
        certName: c.name,
        date: c.reviewedAt || c.completionDate || new Date().toISOString(),
        id: c.id
      }))
  ).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

  return (
    <div>
      <h2 className="page-title">Faculty Dashboard</h2>
      
      <div className="stat-grid">
        <StatCard icon="ti-users" iconBg="var(--primary-light)" iconColor="var(--primary)"
          value={assignedStudents.length} label="Assigned Students" />
        <StatCard icon="ti-chart-bar" iconBg="var(--success-light)" iconColor="var(--success)"
          value={avgScore} label="Average Score" />
        <StatCard icon="ti-clock" iconBg="var(--warning-light)" iconColor="var(--warning)"
          value={pendingCertsCount} label="Pending Approvals" />
        <StatCard icon="ti-alert-triangle" iconBg="var(--danger-light)" iconColor="var(--danger)"
          value={atRiskStudents.length} label="At-Risk Students (<60)" />
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header"><span className="card-title">Average Score by Year</span></div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem 0' }}>
            {assignedStudents.length > 0 ? (
              <BarChart data={barChartData} width={380} height={180} />
            ) : (
              <EmptyState icon="ti-chart-bar" heading="No data available" />
            )}
          </div>
        </div>

        <div className="card">
          <div className="card-header"><span className="card-title">At-Risk Students ({atRiskStudents.length})</span></div>
          {atRiskStudents.length === 0 ? (
            <EmptyState icon="ti-thumb-up" heading="No students at risk" text="All assigned students are performing well." />
          ) : (
            <div className="table-wrapper" style={{ maxHeight: 180, overflowY: 'auto' }}>
              <table>
                <thead>
                  <tr><th>STUDENT</th><th>SCORE</th><th>MISSING CATEGORIES</th></tr>
                </thead>
                <tbody>
                  {atRiskStudents.map(s => {
                    const missing = Object.entries(s.categoryScores)
                      .filter(([_, val]) => val === 0)
                      .map(([cat]) => cat.charAt(0).toUpperCase() + cat.slice(1))
                      .join(', ');
                    return (
                      <tr key={s.id} onClick={() => onViewStudent(s)} style={{ cursor: 'pointer' }}>
                        <td className="font-medium">{s.name}</td>
                        <td><strong style={{ color: getScoreColor(s.score) }}>{s.score}</strong></td>
                        <td className="cell-muted text-xs">{missing || 'None'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header"><span className="card-title">Recent Approvals Feed (Assigned Students)</span></div>
        {recentApprovals.length === 0 ? (
          <EmptyState icon="ti-activity" heading="No recent approvals" />
        ) : (
          <div className="timeline">
            {recentApprovals.map((app, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" style={{ background: 'var(--success-light)', color: 'var(--success)' }}>
                  <i className="ti ti-check" />
                </div>
                <div className="timeline-body">
                  <div className="timeline-title">
                    <strong>{app.studentName}</strong>'s certificate <em>{app.certName}</em> was approved.
                  </div>
                  <div className="timeline-meta">{timeAgo(app.date)}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 2 — Student List
// ──────────────────────────────────────────────────────────────
function StudentList({ assignedStudents, students, onViewStudent }) {
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('All');
  const [divFilter, setDivFilter] = useState('All');
  const [minScore, setMinScore] = useState('');
  const [maxScore, setMaxScore] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 10;

  // Filter students based on faculty assigned + custom filters
  let filtered = assignedStudents.filter(s => {
    // Search by name or PRN
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.prn.includes(search);
    // Year
    const matchYear = yearFilter === 'All' || s.year === yearFilter;
    // Division
    const matchDiv = divFilter === 'All' || s.division === divFilter;
    // Score range
    const matchMin = minScore === '' || s.score >= Number(minScore);
    const matchMax = maxScore === '' || s.score <= Number(maxScore);

    return matchSearch && matchYear && matchDiv && matchMin && matchMax;
  });

  // Pagination
  const total = filtered.length;
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="page-title" style={{ marginBottom: 0 }}>My Students</h2>
        <div className="flex gap-2">
          <button className={`btn btn-${viewMode === 'table' ? 'primary' : 'secondary'} btn-sm`} onClick={() => setViewMode('table')}>
            <i className="ti ti-list" /> Table
          </button>
          <button className={`btn btn-${viewMode === 'grid' ? 'primary' : 'secondary'} btn-sm`} onClick={() => setViewMode('grid')}>
            <i className="ti ti-layout-grid" /> Grid
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="filter-bar" style={{ gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <div style={{ flex: '1 1 200px' }}>
          <SearchInput value={search} onChange={setSearch} placeholder="Search name or PRN..." />
        </div>
        <select value={yearFilter} onChange={e => { setYearFilter(e.target.value); setCurrentPage(1); }} style={{ width: 'auto' }}>
          <option value="All">All Years</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
          <option value="DSY">DSY</option>
        </select>
        <select value={divFilter} onChange={e => { setDivFilter(e.target.value); setCurrentPage(1); }} style={{ width: 'auto' }}>
          <option value="All">All Divisions</option>
          <option value="A">Div A</option>
          <option value="B">Div B</option>
        </select>
        <div className="flex items-center gap-1">
          <span className="text-xs text-secondary">Score:</span>
          <input type="number" placeholder="Min" value={minScore} onChange={e => { setMinScore(e.target.value); setCurrentPage(1); }} style={{ width: 70, padding: '4px 8px', fontSize: 13 }} />
          <span className="text-xs text-secondary">-</span>
          <input type="number" placeholder="Max" value={maxScore} onChange={e => { setMaxScore(e.target.value); setCurrentPage(1); }} style={{ width: 70, padding: '4px 8px', fontSize: 13 }} />
        </div>
      </div>

      {/* Student List Content */}
      <div className="card">
        {paginated.length === 0 ? (
          <EmptyState icon="ti-search" heading="No students found" text="Try resetting the filters." />
        ) : viewMode === 'table' ? (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>AVATAR</th><th>NAME</th><th>PRN</th><th>YEAR</th><th>DIV</th><th>SCORE</th><th>CERTIFICATES</th><th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map(s => {
                  const certs = s.certifications || [];
                  const approvedCerts = certs.filter(c => c.status === 'approved').length;
                  return (
                    <tr key={s.id}>
                      <td><Avatar name={s.name} size="sm" /></td>
                      <td className="font-medium">{s.name}</td>
                      <td className="cell-muted">{s.prn}</td>
                      <td>{s.year}</td>
                      <td>{s.division}</td>
                      <td><strong style={{ color: getScoreColor(s.score) }}>{s.score}</strong></td>
                      <td className="cell-muted">{approvedCerts} / {certs.length}</td>
                      <td>
                        <button className="btn btn-secondary btn-xs" onClick={() => onViewStudent(s)}>
                          <i className="ti ti-eye" /> View
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
            {paginated.map(s => {
              const certs = s.certifications || [];
              const approvedCerts = certs.filter(c => c.status === 'approved').length;
              return (
                <div key={s.id} className="role-card flex flex-col justify-between" style={{ padding: '1.25rem', border: '1px solid var(--color-border)', borderRadius: 8 }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar name={s.name} size="md" />
                    <div>
                      <div className="font-medium" style={{ fontSize: 14 }}>{s.name}</div>
                      <div className="text-xs text-secondary">PRN: {s.prn}</div>
                      <div className="text-xs text-secondary">{s.year} Year · Div {s.division}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <ScoreRing score={s.score} size={60} strokeWidth={5} showLabel={true} />
                    <div className="text-right">
                      <div className="text-xs text-secondary">Approved Certs</div>
                      <div className="font-bold">{approvedCerts} / {certs.length}</div>
                    </div>
                  </div>
                  <button className="btn btn-secondary btn-sm" style={{ width: '100%' }} onClick={() => onViewStudent(s)}>
                    <i className="ti ti-eye" style={{ marginRight: 4 }} /> View Profile
                  </button>
                </div>
              );
            })}
          </div>
        )}
        <Pagination total={total} page={currentPage} perPage={perPage} onChange={setCurrentPage} />
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 3 — Student Profile Modal (Read-Only)
// ──────────────────────────────────────────────────────────────
function StudentProfileModal({ student, students, config, onClose }) {
  const [tab, setTab] = useState('overview');
  
  const scoreBreakdown = calculateScore(student, config.scoringConfig);
  const yearRank = getRankInYear(student, students);
  const deptRank = getDepartmentRank(student, students);

  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'certs', label: `Certificates (${(student.certifications || []).length})` },
    { key: 'achievements', label: 'Achievements' },
    { key: 'marks', label: 'Academic Marks' }
  ];

  // Internships, Projects, Hackathons, Placements, Sports counts
  const achList = [
    ...(student.internships || []).map(i => ({ type: 'Internship', title: `${i.role} at ${i.company}`, meta: `${i.duration_months} mos · ${i.type}`, status: i.status })),
    ...(student.projects || []).map(p => ({ type: 'Project', title: p.title, meta: `${p.language} · ${p.commitCount} commits`, status: p.status })),
    ...(student.hackathons || []).map(h => ({ type: 'Hackathon', title: h.name, meta: `${h.organizer} · ${h.result}`, status: h.status })),
    ...(student.placements || []).map(p => ({ type: 'Placement', title: `${p.role} at ${p.company}`, meta: `CTC: ₹${(p.ctc/100000).toFixed(1)}L`, status: p.status })),
    ...(student.sports || []).map(s => ({ type: 'Sports', title: s.sportName, meta: `${s.level} · ${s.achievement}`, status: s.status }))
  ];

  const ac = student.academics || {};
  const totalMarks = (ac.CIA1?.obtained || 0) + (ac.CIA2?.obtained || 0) + (ac.capstone?.obtained || 0) + (ac.practicals?.obtained || 0);
  const maxMarks = (ac.CIA1?.maxMarks || 35) + (ac.CIA2?.maxMarks || 35) + (ac.capstone?.maxMarks || 20) + (ac.practicals?.maxMarks || 10);
  const pct = maxMarks > 0 ? Math.round((totalMarks / maxMarks) * 100) : 0;

  return (
    <Modal title={`Student Details — ${student.name}`} onClose={onClose} size="lg">
      <div className="flex items-center gap-4 mb-4" style={{ flexWrap: 'wrap' }}>
        <Avatar name={student.name} size="xl" />
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 18, fontWeight: 500, margin: 0 }}>{student.name}</h3>
          <div className="text-sm text-secondary">PRN: {student.prn} | Division: {student.division}</div>
          <div className="flex gap-1 mt-1">
            <span className="badge badge-primary">{student.year} Year</span>
            <span className="badge badge-purple">Rank #{yearRank} in Year</span>
            <span className="badge badge-gray">Dept Rank #{deptRank}</span>
          </div>
        </div>
        <ScoreRing score={student.score} size={80} strokeWidth={6} />
      </div>

      <Tabs tabs={tabs} active={tab} onChange={setTab} />

      <div style={{ marginTop: '1rem', minHeight: 300 }}>
        {tab === 'overview' && (
          <div className="grid-2">
            <div className="card">
              <div className="card-header"><span className="card-title">Score breakdown</span></div>
              <CategoryBars categoryScores={student.categoryScores} config={config.scoringConfig} />
            </div>

            <div className="card">
              <div className="card-header"><span className="card-title">Personal & Contact Info</span></div>
              <div className="info-grid">
                <div className="info-item"><div className="info-label">Email</div><div className="info-value">{student.email}</div></div>
                <div className="info-item"><div className="info-label">Phone</div><div className="info-value">{student.phone}</div></div>
                <div className="info-item"><div className="info-label">Admission Type</div><div className="info-value">{student.admissionType}</div></div>
                <div className="info-item"><div className="info-label">Roll Number</div><div className="info-value">{student.rollNo}</div></div>
                <div className="info-item"><div className="info-label">Parent Name</div><div className="info-value">{student.parentName || '—'}</div></div>
                <div className="info-item"><div className="info-label">Parent Phone</div><div className="info-value">{student.parentPhone || '—'}</div></div>
              </div>
            </div>
          </div>
        )}

        {tab === 'certs' && (
          <div className="card">
            {(!student.certifications || student.certifications.length === 0) ? (
              <EmptyState icon="ti-certificate" heading="No certificates uploaded" />
            ) : (
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr><th>NAME</th><th>TYPE</th><th>ORGANISATION</th><th>DATE</th><th>STATUS</th></tr>
                  </thead>
                  <tbody>
                    {student.certifications.map(c => (
                      <tr key={c.id}>
                        <td className="font-medium">{c.name}</td>
                        <td><span className={`badge ${c.type === 'technical' ? 'badge-primary' : 'badge-purple'}`}>{c.type === 'technical' ? 'Tech' : 'Non-Tech'}</span></td>
                        <td>{c.issuingOrg}</td>
                        <td>{formatDate(c.completionDate)}</td>
                        <td><StatusBadge status={c.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {tab === 'achievements' && (
          <div className="card">
            {achList.length === 0 ? (
              <EmptyState icon="ti-award" heading="No achievements reported" />
            ) : (
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr><th>CATEGORY</th><th>DETAIL</th><th>METADATA</th><th>STATUS</th></tr>
                  </thead>
                  <tbody>
                    {achList.map((ach, idx) => (
                      <tr key={idx}>
                        <td><span className="badge badge-gray">{ach.type}</span></td>
                        <td className="font-medium">{ach.title}</td>
                        <td className="cell-muted">{ach.meta}</td>
                        <td><StatusBadge status={ach.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {tab === 'marks' && (
          <div className="card">
            <div className="table-wrapper mb-4">
              <table>
                <thead>
                  <tr><th>COMPONENT</th><th>OBTAINED</th><th>MAX</th><th>PERCENTAGE</th></tr>
                </thead>
                <tbody>
                  {[
                    { label: 'CIA 1', obt: ac.CIA1?.obtained, max: ac.CIA1?.maxMarks },
                    { label: 'CIA 2', obt: ac.CIA2?.obtained, max: ac.CIA2?.maxMarks },
                    { label: 'Capstone', obt: ac.capstone?.obtained, max: ac.capstone?.maxMarks },
                    { label: 'Practicals', obt: ac.practicals?.obtained, max: ac.practicals?.maxMarks },
                  ].map((r, i) => (
                    <tr key={i}>
                      <td>{r.label}</td><td>{r.obt ?? '—'}</td><td>{r.max ?? '—'}</td>
                      <td>{r.max ? Math.round(((r.obt || 0) / r.max) * 100) + '%' : '—'}</td>
                    </tr>
                  ))}
                  <tr style={{ fontWeight: 500 }}>
                    <td>Total</td><td>{totalMarks}</td><td>{maxMarks}</td><td>{pct}%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-grid">
              <div className="info-item"><div className="info-label">CGPA</div><div className="info-value" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{ac.CGPA || '—'}</div></div>
              <div className="info-item"><div className="info-label">Semester</div><div className="info-value">{ac.semester || '—'}</div></div>
              <div className="info-item"><div className="info-label">Backlogs</div><div className="info-value" style={{ color: (ac.backlogs || 0) > 0 ? 'var(--danger)' : 'var(--success)' }}>{ac.backlogs || 0}</div></div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 4 — Reports
// ──────────────────────────────────────────────────────────────
function FacultyReports({ assignedStudents, students, config }) {
  const [yearFilter, setYearFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Filter students based on year filter
  const targetStudents = yearFilter === 'All' ? assignedStudents : assignedStudents.filter(s => s.year === yearFilter);

  // 1. Certificate summary (approved, pending, rejected counts)
  let totalCerts = 0, approved = 0, pending = 0, rejected = 0;
  targetStudents.forEach(s => {
    (s.certifications || []).forEach(c => {
      totalCerts++;
      if (c.status === 'approved') approved++;
      else if (c.status === 'pending') pending++;
      else if (c.status === 'rejected') rejected++;
    });
  });

  const certData = [
    { label: 'Approved', value: approved, color: 'var(--success)' },
    { label: 'Pending', value: pending, color: 'var(--warning)' },
    { label: 'Rejected', value: rejected, color: 'var(--danger)' }
  ];

  // 2. Score distribution histogram (0-40, 41-60, 61-80, 81-100)
  let bucket1 = 0, bucket2 = 0, bucket3 = 0, bucket4 = 0;
  targetStudents.forEach(s => {
    if (s.score >= 81) bucket4++;
    else if (s.score >= 61) bucket3++;
    else if (s.score >= 41) bucket2++;
    else bucket1++;
  });

  const scoreDistData = [
    { label: '0-40', value: bucket1, color: '#A32D2D' },
    { label: '41-60', value: bucket2, color: '#BA7517' },
    { label: '61-80', value: bucket3, color: '#185FA5' },
    { label: '81-100', value: bucket4, color: '#3B6D11' }
  ];

  // Categories list
  const categoryKeys = ['academics', 'internships', 'placements', 'hackathons', 'projects', 'certifications', 'sports'];

  // 3. Category performance averages for radar chart / bar display
  const categoryAverages = categoryKeys.map(key => {
    const sum = targetStudents.reduce((s, stu) => s + (stu.categoryScores?.[key] || 0), 0);
    const avg = targetStudents.length > 0 ? (sum / targetStudents.length) : 0;
    const max = config.scoringConfig[key] || 10;
    return {
      label: key.charAt(0).toUpperCase() + key.slice(1),
      value: Math.round(avg * 10) / 10,
      max
    };
  });

  return (
    <div>
      <h2 className="page-title">Assigned Students Reports</h2>

      {/* Filter Options */}
      <div className="filter-bar mb-4" style={{ gap: '1rem', justifyContent: 'flex-start' }}>
        <div className="flex items-center gap-2">
          <span className="text-sm text-secondary">Year:</span>
          <select value={yearFilter} onChange={e => setYearFilter(e.target.value)} style={{ width: 'auto' }}>
            <option value="All">All Years</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
            <option value="DSY">DSY</option>
          </select>
        </div>
      </div>

      <div className="grid-2">
        {/* Certificate Breakdown */}
        <div className="card">
          <div className="card-header"><span className="card-title">Certificate Approval Status ({totalCerts} total)</span></div>
          {totalCerts > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 0' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BarChart data={certData} width={360} height={160} />
              </div>
              <div className="divider" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', textAlign: 'center' }}>
                <div>
                  <div className="text-secondary text-xs">Approved</div>
                  <div className="font-bold text-success">{approved} ({totalCerts ? Math.round((approved/totalCerts)*100) : 0}%)</div>
                </div>
                <div>
                  <div className="text-secondary text-xs">Pending</div>
                  <div className="font-bold text-warning">{pending} ({totalCerts ? Math.round((pending/totalCerts)*100) : 0}%)</div>
                </div>
                <div>
                  <div className="text-secondary text-xs">Rejected</div>
                  <div className="font-bold text-danger">{rejected} ({totalCerts ? Math.round((rejected/totalCerts)*100) : 0}%)</div>
                </div>
              </div>
            </div>
          ) : (
            <EmptyState icon="ti-certificate" heading="No certificates uploaded" />
          )}
        </div>

        {/* Score Distribution */}
        <div className="card">
          <div className="card-header"><span className="card-title">Score Ranges Distribution</span></div>
          {targetStudents.length > 0 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem 0' }}>
              <BarChart data={scoreDistData} width={360} height={160} />
            </div>
          ) : (
            <EmptyState icon="ti-users" heading="No student records found" />
          )}
        </div>
      </div>

      <div className="grid-2 mt-4">
        {/* Category Averages */}
        <div className="card">
          <div className="card-header"><span className="card-title">Category Averages</span></div>
          {targetStudents.length > 0 ? (
            <div style={{ padding: '0.5rem 0' }}>
              {categoryAverages.map(cat => {
                const pct = Math.min(100, (cat.value / cat.max) * 100);
                return (
                  <div key={cat.label} className="cat-bar-row mb-3">
                    <span className="cat-bar-label" style={{ width: 110 }}>{cat.label}</span>
                    <div className="cat-bar-wrap" style={{ flex: 1 }}>
                      <div className="cat-bar-bg"><div className="cat-bar-fill" style={{ width: `${pct}%`, background: 'var(--primary)' }} /></div>
                    </div>
                    <span className="cat-bar-pts" style={{ width: 60, textAlign: 'right' }}>{cat.value} / {cat.max}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <EmptyState icon="ti-chart-bar" heading="No student records found" />
          )}
        </div>

        {/* Heatmap Grid */}
        <div className="card">
          <div className="card-header"><span className="card-title">Student Category Performance Heatmap</span></div>
          {targetStudents.length === 0 ? (
            <EmptyState icon="ti-alert-circle" heading="No student records found" />
          ) : (
            <div className="table-wrapper" style={{ maxHeight: 280, overflowY: 'auto' }}>
              <table style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ position: 'sticky', left: 0, background: 'var(--color-background-card)', zIndex: 10 }}>STUDENT</th>
                    {categoryKeys.map(k => <th key={k} style={{ fontSize: 9 }}>{k.slice(0, 4).toUpperCase()}</th>)}
                    <th>TOT</th>
                  </tr>
                </thead>
                <tbody>
                  {targetStudents.map(s => (
                    <tr key={s.id}>
                      <td className="font-medium text-xs" style={{ position: 'sticky', left: 0, background: 'var(--color-background-card)', zIndex: 10 }}>{s.name}</td>
                      {categoryKeys.map(k => {
                        const score = s.categoryScores?.[k] || 0;
                        const max = config.scoringConfig[k] || 10;
                        const ratio = max ? score / max : 0;
                        // Color intensity based on performance ratio
                        let cellBg = 'rgba(0, 0, 0, 0.05)';
                        if (ratio >= 0.8) cellBg = 'rgba(16, 185, 129, 0.25)'; // High Green
                        else if (ratio >= 0.5) cellBg = 'rgba(59, 130, 246, 0.2)'; // Mid Blue
                        else if (ratio > 0) cellBg = 'rgba(245, 158, 11, 0.15)'; // Low Orange
                        else cellBg = 'rgba(239, 68, 68, 0.1)'; // Zero Red

                        return (
                          <td key={k} style={{ background: cellBg, textAlign: 'center', fontSize: 11, fontWeight: 'bold' }}>
                            {score}
                          </td>
                        );
                      })}
                      <td><strong>{s.score}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 5 — Intervention List
// ──────────────────────────────────────────────────────────────
function InterventionList({ assignedStudents, addToast }) {
  const atRisk = assignedStudents
    .filter(s => s.score < 60)
    .sort((a, b) => a.score - b.score);

  // Send a mock reminder email/notification
  const handleSendReminder = (student) => {
    // Modify student.notifications (in-memory mock)
    if (!student.notifications) student.notifications = [];
    student.notifications.push({
      id: 'notif_int_' + Date.now(),
      message: `Faculty Reminder: Please review your CertTrack Pro profile. Your overall tracker score is currently ${student.score}. Submit pending certificates or updates soon.`,
      timestamp: new Date().toISOString(),
      read: false
    });
    addToast(`Intervention reminder sent to ${student.name}`, 'success');
  };

  const handleSendBulkReminders = () => {
    if (atRisk.length === 0) return;
    atRisk.forEach(s => handleSendReminder(s));
    addToast(`Bulk reminder sent to all ${atRisk.length} at-risk students`, 'success');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="page-title" style={{ marginBottom: 0 }}>Intervention Roster</h2>
        {atRisk.length > 0 && (
          <button className="btn btn-danger btn-sm" onClick={handleSendBulkReminders}>
            <i className="ti ti-mail-forward" /> Send Bulk Reminders
          </button>
        )}
      </div>

      <div className="card mb-4" style={{ background: 'var(--danger-light)', border: '1px solid rgba(239,68,68,0.2)' }}>
        <div className="flex items-center gap-3">
          <i className="ti ti-info-square" style={{ fontSize: 24, color: 'var(--danger)' }} />
          <p className="text-sm" style={{ margin: 0, color: 'var(--danger)' }}>
            The following students have an overall score below 60. They have been flagged as at-risk and require academic/certificate portfolio interventions.
          </p>
        </div>
      </div>

      <div className="card">
        {atRisk.length === 0 ? (
          <EmptyState icon="ti-checkbox" heading="No interventions needed" text="All assigned students are performing above the 60 point threshold." />
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>NAME</th><th>PRN</th><th>YEAR</th><th>SCORE</th><th>WEAK CATEGORIES (Score = 0)</th><th>SUGGESTED ACTION</th><th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {atRisk.map(s => {
                  const weakCats = Object.entries(s.categoryScores)
                    .filter(([_, val]) => val === 0)
                    .map(([cat]) => cat.charAt(0).toUpperCase() + cat.slice(1));

                  let suggestedAction = 'Upload certifications or sports credentials';
                  if (weakCats.includes('Academics')) {
                    suggestedAction = 'Improve academic performance / resolve backlogs';
                  } else if (weakCats.includes('Internships') || weakCats.includes('Placements')) {
                    suggestedAction = 'Focus on internship search or placement readiness';
                  } else if (weakCats.includes('Projects') || weakCats.includes('Hackathons')) {
                    suggestedAction = 'Contribute to open projects or join upcoming hackathons';
                  }

                  return (
                    <tr key={s.id}>
                      <td className="font-medium">{s.name}</td>
                      <td>{s.prn}</td>
                      <td>{s.year} Year</td>
                      <td><strong style={{ color: getScoreColor(s.score) }}>{s.score}</strong></td>
                      <td>
                        <div className="flex flex-wrap gap-1">
                          {weakCats.map(cat => (
                            <span key={cat} className="badge badge-danger text-xs">{cat}</span>
                          ))}
                          {weakCats.length === 0 && <span className="cell-muted">—</span>}
                        </div>
                      </td>
                      <td className="text-xs">{suggestedAction}</td>
                      <td>
                        <button className="btn btn-primary btn-xs" onClick={() => handleSendReminder(s)}>
                          <i className="ti ti-bell" /> Remind
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 6 — My Profile (Read-Only)
// ──────────────────────────────────────────────────────────────
function FacultyProfile({ currentFaculty, assignedStudents }) {
  return (
    <div>
      <h2 className="page-title">My Faculty Profile</h2>

      <div className="card mb-4">
        <div className="flex items-center gap-4" style={{ flexWrap: 'wrap' }}>
          <Avatar name={currentFaculty.name} role="faculty" size="xl" />
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 500, margin: 0 }}>{currentFaculty.name}</h3>
            <div className="text-sm text-secondary">Employee ID: {currentFaculty.empId}</div>
            <div className="flex gap-1 mt-1">
              <span className="badge badge-primary">{currentFaculty.designation || 'Assistant Professor'}</span>
              <span className="badge badge-purple">Computer Engineering</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header"><span className="card-title">Professional Information</span></div>
          <div className="info-grid">
            <div className="info-item"><div className="info-label">Email Address</div><div className="info-value">{currentFaculty.email}</div></div>
            <div className="info-item"><div className="info-label">Phone Number</div><div className="info-value">{currentFaculty.phone || '9876543210'}</div></div>
            <div className="info-item"><div className="info-label">Department</div><div className="info-value">Computer Engineering</div></div>
            <div className="info-item"><div className="info-label">Designation</div><div className="info-value">{currentFaculty.designation || 'Assistant Professor'}</div></div>
          </div>
          <div className="section-title mt-4 mb-2" style={{ fontSize: 13, fontWeight: 500 }}>Subjects Handled</div>
          <div className="flex flex-wrap gap-1">
            {(currentFaculty.subjects || ['Cloud Computing', 'Database Management Systems', 'Software Engineering']).map(s => (
              <span key={s} className="badge badge-gray">{s}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header"><span className="card-title">Assigned Students List ({assignedStudents.length})</span></div>
          <div className="table-wrapper" style={{ maxHeight: 280, overflowY: 'auto' }}>
            <table>
              <thead>
                <tr><th>PRN</th><th>NAME</th><th>YEAR</th><th>SCORE</th></tr>
              </thead>
              <tbody>
                {assignedStudents.map(s => (
                  <tr key={s.id}>
                    <td className="text-xs cell-muted">{s.prn}</td>
                    <td className="font-medium">{s.name}</td>
                    <td>{s.year}</td>
                    <td><strong style={{ color: getScoreColor(s.score) }}>{s.score}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 7 — Notifications
// ──────────────────────────────────────────────────────────────
function FacultyNotifications({ notifications, handleMarkRead, handleMarkAllRead }) {
  const unread = notifications.filter(n => !n.read);

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="page-title" style={{ marginBottom: 0 }}>Faculty Notifications</h2>
        {unread.length > 0 && (
          <button className="btn btn-secondary btn-sm" onClick={handleMarkAllRead}>
            <i className="ti ti-checks" /> Mark all read
          </button>
        )}
      </div>

      <div className="card">
        {notifications.length === 0 ? (
          <EmptyState icon="ti-bell-off" heading="No notifications" text="All caught up!" />
        ) : (
          <div className="timeline">
            {notifications.map((notif, idx) => (
              <div key={notif.id || idx} className={`timeline-item ${notif.read ? '' : 'unread-notif'}`}
                style={{
                  padding: '1rem',
                  borderRadius: 6,
                  background: notif.read ? 'transparent' : 'rgba(37,99,235,0.03)',
                  borderLeft: notif.read ? 'none' : '3px solid var(--primary)',
                  cursor: notif.read ? 'default' : 'pointer'
                }}
                onClick={() => !notif.read && handleMarkRead(notif.id)}>
                <div className="timeline-dot" style={{
                  background: notif.read ? 'var(--color-background-secondary)' : 'var(--primary-light)',
                  color: notif.read ? 'var(--color-text-secondary)' : 'var(--primary)'
                }}>
                  <i className="ti ti-bell" />
                </div>
                <div className="timeline-body" style={{ flex: 1 }}>
                  <div className="flex justify-between items-start">
                    <div className="timeline-title" style={{ fontWeight: notif.read ? 400 : 500 }}>
                      {notif.message}
                    </div>
                    {!notif.read && (
                      <span className="badge badge-primary text-xs" style={{ flexShrink: 0 }}>New</span>
                    )}
                  </div>
                  <div className="timeline-meta">{timeAgo(notif.timestamp)}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
