// ============================================================
// CertTrack Pro — Pre-populated Data
// ============================================================

let _nextId = 1000;
export const genId = () => 'id_' + (++_nextId);

// ---------- Department Config ----------
export const departmentConfig = {
  name: 'Computer Engineering',
  college: 'XYZ College of Engineering',
  academicYear: '2024-25',
  currentSemester: 6,
  technicalPlatforms: ['AWS', 'Google', 'Microsoft', 'Coursera', 'NPTEL', 'Udemy', 'edX', 'Infosys Springboard', 'Other'],
  nonTechCategories: ['Sports', 'Cultural', 'Leadership', 'NSS/NCC', 'Community Service', 'Other'],
  scoringConfig: { academics: 35, internships: 20, placements: 15, hackathons: 10, projects: 10, certifications: 5, sports: 5 }
};

// ---------- Helper to build student objects ----------
function mkStudent(id, prn, name, email, year, division, rollNo, admissionType, dob, assignedFacultyId, academics, internships, placements, hackathons, projects, certifications, sports) {
  return {
    id, prn, name, email,
    phone: '98' + String(Math.floor(10000000 + Math.random() * 90000000)),
    year, branch: 'Computer Engineering', division, rollNo,
    admissionType, dob,
    address: `${Math.floor(10 + Math.random() * 90)}, MG Road, Pune 411001`,
    parentName: name.split(' ')[1] + ' ' + name.split(' ').slice(-1)[0],
    parentPhone: '97' + String(Math.floor(10000000 + Math.random() * 90000000)),
    status: 'active',
    assignedFacultyId,
    academics, internships, placements, hackathons, projects, certifications, sports,
    scoreHistory: [],
    notifications: [],
    score: 0,
    categoryScores: { academics: 0, internships: 0, placements: 0, hackathons: 0, projects: 0, certifications: 0, sports: 0 }
  };
}

// ========== 12 STUDENTS ==========

export const initialStudents = [
  // --- 2nd Year (3) ---
  mkStudent('STU001', '2024001', 'Rohan Mehta', 'rohan.mehta@xyz.edu', '2nd', 'A', 'CE201',
    'Regular', '2005-03-15', 'FAC001',
    { CIA1: { obtained: 24, maxMarks: 35 }, CIA2: { obtained: 22, maxMarks: 35 }, capstone: { obtained: 14, maxMarks: 20 }, practicals: { obtained: 7, maxMarks: 10 }, CGPA: 7.2, semester: 3, backlogs: 0 },
    [{ id: 'INT001', company: 'TechStart Pvt Ltd', role: 'Web Dev Intern', duration_months: 2, type: 'startup', stipend: 8000, startDate: '2024-05-01', endDate: '2024-06-30', offerLetterFile: 'offer_techstart.pdf', status: 'approved', adminRemarks: '' }],
    [],
    [{ id: 'HACK001', name: 'Code Sprint 2024', organizer: 'XYZ College', result: 'participated', teamSize: 4, date: '2024-02-15', certificateFile: 'codesprint.pdf', status: 'approved' }],
    [{ id: 'PROJ001', title: 'Portfolio Website', description: 'Personal portfolio using React', githubUrl: 'https://github.com/rohan/portfolio', techStack: ['React', 'CSS'], commitCount: 45, lastCommit: '2024-09-10', stars: 2, language: 'JavaScript', status: 'completed' }],
    [
      { id: 'CERT001', type: 'technical', name: 'AWS Cloud Practitioner', issuingOrg: 'Amazon', platform: 'AWS', completionDate: '2024-03-15', credentialId: 'AWS-CP-001', credentialUrl: 'https://aws.amazon.com/verify/001', fileLabel: 'aws_cert.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-03-16', reviewedAt: '2024-03-18', reviewedBy: 'Admin' },
      { id: 'CERT002', type: 'non-technical', name: 'Inter-College Cricket', issuingOrg: 'XYZ College', platform: '', completionDate: '2024-01-20', credentialId: '', credentialUrl: '', fileLabel: 'cricket.pdf', status: 'pending', adminRemarks: '', submittedAt: '2024-09-10', reviewedAt: '', reviewedBy: '', category: 'sports', level: 'college' }
    ],
    [{ id: 'SPT001', sportName: 'Cricket', level: 'college', achievement: 'Team Captain', date: '2024-01-20', certificateFile: 'cricket.pdf', status: 'approved' }]
  ),

  mkStudent('STU002', '2024002', 'Vikram Kulkarni', 'vikram.k@xyz.edu', '2nd', 'A', 'CE202',
    'Regular', '2005-07-22', 'FAC001',
    { CIA1: { obtained: 18, maxMarks: 35 }, CIA2: { obtained: 20, maxMarks: 35 }, capstone: { obtained: 10, maxMarks: 20 }, practicals: { obtained: 6, maxMarks: 10 }, CGPA: 6.5, semester: 3, backlogs: 1 },
    [],
    [],
    [],
    [{ id: 'PROJ002', title: 'Todo App', description: 'Basic CRUD todo app', githubUrl: 'https://github.com/vikram/todo', techStack: ['HTML', 'JavaScript'], commitCount: 18, lastCommit: '2024-08-01', stars: 0, language: 'JavaScript', status: 'completed' }],
    [{ id: 'CERT003', type: 'technical', name: 'Python for Everybody', issuingOrg: 'University of Michigan', platform: 'Coursera', completionDate: '2024-06-10', credentialId: 'CR-PY-002', credentialUrl: '', fileLabel: 'python_cert.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-06-11', reviewedAt: '2024-06-13', reviewedBy: 'Admin' }],
    []
  ),

  mkStudent('STU003', '2024003', 'Divya Pillai', 'divya.p@xyz.edu', '2nd', 'B', 'CE203',
    'Regular', '2005-11-08', 'FAC002',
    { CIA1: { obtained: 28, maxMarks: 35 }, CIA2: { obtained: 26, maxMarks: 35 }, capstone: { obtained: 16, maxMarks: 20 }, practicals: { obtained: 8, maxMarks: 10 }, CGPA: 8.1, semester: 3, backlogs: 0 },
    [{ id: 'INT002', company: 'Google India', role: 'STEP Intern', duration_months: 3, type: 'MNC', stipend: 60000, startDate: '2024-05-01', endDate: '2024-07-31', offerLetterFile: 'google_offer.pdf', status: 'approved', adminRemarks: '' }],
    [],
    [{ id: 'HACK002', name: 'HackMIT 2024', organizer: 'MIT', result: 'runner-up', teamSize: 3, date: '2024-04-20', certificateFile: 'hackmit.pdf', status: 'approved' }],
    [{ id: 'PROJ003', title: 'AI Chatbot', description: 'NLP-based chatbot for college queries', githubUrl: 'https://github.com/divya/chatbot', techStack: ['Python', 'Flask', 'NLP'], commitCount: 120, lastCommit: '2024-09-20', stars: 15, language: 'Python', status: 'completed' }],
    [
      { id: 'CERT004', type: 'technical', name: 'Google Cloud Associate', issuingOrg: 'Google', platform: 'Google', completionDate: '2024-02-10', credentialId: 'GCP-ACE-003', credentialUrl: 'https://google.com/verify/003', fileLabel: 'gcp_cert.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-02-11', reviewedAt: '2024-02-13', reviewedBy: 'Admin' },
      { id: 'CERT005', type: 'technical', name: 'React Developer Certificate', issuingOrg: 'Meta', platform: 'Coursera', completionDate: '2024-05-20', credentialId: 'META-RD-003', credentialUrl: '', fileLabel: 'react_cert.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-05-21', reviewedAt: '2024-05-23', reviewedBy: 'Admin' }
    ],
    []
  ),

  // --- 3rd Year (4) ---
  mkStudent('STU004', '2023001', 'Aarav Rane', 'aarav.r@xyz.edu', '3rd', 'A', 'CE301',
    'Regular', '2004-01-12', 'FAC002',
    { CIA1: { obtained: 26, maxMarks: 35 }, CIA2: { obtained: 25, maxMarks: 35 }, capstone: { obtained: 15, maxMarks: 20 }, practicals: { obtained: 8, maxMarks: 10 }, CGPA: 7.8, semester: 5, backlogs: 0 },
    [{ id: 'INT003', company: 'Infosys', role: 'Software Intern', duration_months: 3, type: 'MNC', stipend: 25000, startDate: '2024-05-01', endDate: '2024-07-31', offerLetterFile: 'infosys_offer.pdf', status: 'approved', adminRemarks: '' }],
    [],
    [{ id: 'HACK003', name: 'Smart India Hackathon', organizer: 'Govt of India', result: 'winner', teamSize: 6, date: '2024-03-10', certificateFile: 'sih.pdf', status: 'approved' }],
    [{ id: 'PROJ004', title: 'Smart Attendance System', description: 'Face recognition based attendance', githubUrl: 'https://github.com/aarav/attendance', techStack: ['Python', 'OpenCV', 'Flask'], commitCount: 85, lastCommit: '2024-09-15', stars: 8, language: 'Python', status: 'completed' }],
    [
      { id: 'CERT006', type: 'technical', name: 'NPTEL Cloud Computing', issuingOrg: 'IIT Kharagpur', platform: 'NPTEL', completionDate: '2024-04-01', credentialId: 'NPTEL-CC-004', credentialUrl: '', fileLabel: 'nptel_cloud.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-04-02', reviewedAt: '2024-04-04', reviewedBy: 'Admin' },
      { id: 'CERT007', type: 'technical', name: 'Azure Fundamentals', issuingOrg: 'Microsoft', platform: 'Microsoft', completionDate: '2024-07-15', credentialId: 'AZ-900-004', credentialUrl: '', fileLabel: 'azure.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-07-16', reviewedAt: '2024-07-18', reviewedBy: 'Admin' }
    ],
    [{ id: 'SPT002', sportName: 'Basketball', level: 'district', achievement: 'Runner-up', date: '2024-02-10', certificateFile: 'basketball.pdf', status: 'approved' }]
  ),

  mkStudent('STU005', '2023002', 'Priya Sharma', 'priya.s@xyz.edu', '3rd', 'A', 'CE302',
    'Regular', '2004-05-25', 'FAC003',
    { CIA1: { obtained: 32, maxMarks: 35 }, CIA2: { obtained: 30, maxMarks: 35 }, capstone: { obtained: 18, maxMarks: 20 }, practicals: { obtained: 9, maxMarks: 10 }, CGPA: 9.2, semester: 5, backlogs: 0 },
    [{ id: 'INT004', company: 'Microsoft India', role: 'SDE Intern', duration_months: 6, type: 'MNC', stipend: 80000, startDate: '2024-01-01', endDate: '2024-06-30', offerLetterFile: 'ms_offer.pdf', status: 'approved', adminRemarks: '' }],
    [{ id: 'PLC001', company: 'Google', role: 'SDE-1', ctc: 1200000, offerLetterFile: 'google_placement.pdf', status: 'approved', adminRemarks: '', offerDate: '2024-08-15' }],
    [
      { id: 'HACK004', name: 'Google Code Jam', organizer: 'Google', result: 'runner-up', teamSize: 1, date: '2024-05-20', certificateFile: 'codejam.pdf', status: 'approved' },
      { id: 'HACK005', name: 'Hackathon X', organizer: 'IIT Bombay', result: 'winner', teamSize: 4, date: '2024-07-10', certificateFile: 'hackx.pdf', status: 'approved' }
    ],
    [
      { id: 'PROJ005', title: 'ML Stock Predictor', description: 'LSTM-based stock price prediction', githubUrl: 'https://github.com/priya/stock-ml', techStack: ['Python', 'TensorFlow', 'Flask'], commitCount: 200, lastCommit: '2024-09-25', stars: 45, language: 'Python', status: 'completed' },
      { id: 'PROJ006', title: 'CertTrack MVP', description: 'Certificate tracking portal prototype', githubUrl: 'https://github.com/priya/certtrack', techStack: ['React', 'Node.js', 'MongoDB'], commitCount: 150, lastCommit: '2024-09-28', stars: 12, language: 'JavaScript', status: 'completed' }
    ],
    [
      { id: 'CERT008', type: 'technical', name: 'TensorFlow Developer', issuingOrg: 'Google', platform: 'Google', completionDate: '2024-03-20', credentialId: 'TF-DEV-005', credentialUrl: 'https://google.com/verify/tf005', fileLabel: 'tf_cert.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-03-21', reviewedAt: '2024-03-23', reviewedBy: 'Admin' },
      { id: 'CERT009', type: 'technical', name: 'AWS Solutions Architect', issuingOrg: 'Amazon', platform: 'AWS', completionDate: '2024-06-10', credentialId: 'AWS-SA-005', credentialUrl: '', fileLabel: 'aws_sa.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-06-11', reviewedAt: '2024-06-13', reviewedBy: 'Admin' },
      { id: 'CERT010', type: 'technical', name: 'NPTEL Data Science', issuingOrg: 'IIT Madras', platform: 'NPTEL', completionDate: '2024-08-01', credentialId: 'NPTEL-DS-005', credentialUrl: '', fileLabel: 'nptel_ds.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-08-02', reviewedAt: '2024-08-04', reviewedBy: 'Admin' }
    ],
    [{ id: 'SPT003', sportName: 'Table Tennis', level: 'state', achievement: 'Quarterfinalist', date: '2024-01-15', certificateFile: 'tt.pdf', status: 'approved' }]
  ),

  mkStudent('STU006', '2023003', 'Karan Joshi', 'karan.j@xyz.edu', '3rd', 'B', 'CE303',
    'Regular', '2004-09-18', 'FAC003',
    { CIA1: { obtained: 20, maxMarks: 35 }, CIA2: { obtained: 19, maxMarks: 35 }, capstone: { obtained: 12, maxMarks: 20 }, practicals: { obtained: 7, maxMarks: 10 }, CGPA: 6.8, semester: 5, backlogs: 1 },
    [{ id: 'INT005', company: 'LocalTech Solutions', role: 'Backend Intern', duration_months: 2, type: 'startup', stipend: 5000, startDate: '2024-06-01', endDate: '2024-07-31', offerLetterFile: 'localtech_offer.pdf', status: 'approved', adminRemarks: '' }],
    [],
    [{ id: 'HACK006', name: 'Pune Hackfest', organizer: 'PCG', result: 'participated', teamSize: 4, date: '2024-04-05', certificateFile: 'punehack.pdf', status: 'approved' }],
    [{ id: 'PROJ007', title: 'Blog Platform', description: 'Full-stack blog with auth', githubUrl: 'https://github.com/karan/blog', techStack: ['Node.js', 'Express', 'MongoDB'], commitCount: 60, lastCommit: '2024-08-20', stars: 3, language: 'JavaScript', status: 'completed' }],
    [{ id: 'CERT011', type: 'technical', name: 'Infosys Springboard Java', issuingOrg: 'Infosys', platform: 'Infosys Springboard', completionDate: '2024-05-15', credentialId: 'IS-JAVA-006', credentialUrl: '', fileLabel: 'infosys_java.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-05-16', reviewedAt: '2024-05-18', reviewedBy: 'Admin' }],
    []
  ),

  mkStudent('STU007', '2023004', 'Meera Nair', 'meera.n@xyz.edu', '3rd', 'B', 'CE304',
    'Regular', '2004-12-03', 'FAC001',
    { CIA1: { obtained: 30, maxMarks: 35 }, CIA2: { obtained: 28, maxMarks: 35 }, capstone: { obtained: 17, maxMarks: 20 }, practicals: { obtained: 9, maxMarks: 10 }, CGPA: 8.8, semester: 5, backlogs: 0 },
    [{ id: 'INT006', company: 'Amazon India', role: 'SDE Intern', duration_months: 4, type: 'MNC', stipend: 60000, startDate: '2024-05-01', endDate: '2024-08-31', offerLetterFile: 'amazon_offer.pdf', status: 'approved', adminRemarks: '' }],
    [],
    [{ id: 'HACK007', name: 'TechFest Hackathon', organizer: 'IIT Bombay', result: 'runner-up', teamSize: 3, date: '2024-06-15', certificateFile: 'techfest.pdf', status: 'approved' }],
    [{ id: 'PROJ008', title: 'E-Commerce Platform', description: 'Full-stack MERN e-commerce', githubUrl: 'https://github.com/meera/ecommerce', techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'], commitCount: 180, lastCommit: '2024-09-22', stars: 22, language: 'JavaScript', status: 'completed' }],
    [
      { id: 'CERT012', type: 'technical', name: 'Microsoft Azure AI', issuingOrg: 'Microsoft', platform: 'Microsoft', completionDate: '2024-04-20', credentialId: 'AZ-AI-007', credentialUrl: '', fileLabel: 'azure_ai.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-04-21', reviewedAt: '2024-04-23', reviewedBy: 'Admin' },
      { id: 'CERT013', type: 'technical', name: 'Coursera Full Stack', issuingOrg: 'Meta', platform: 'Coursera', completionDate: '2024-07-10', credentialId: 'META-FS-007', credentialUrl: '', fileLabel: 'fullstack.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-07-11', reviewedAt: '2024-07-13', reviewedBy: 'Admin' },
      { id: 'CERT014', type: 'non-technical', name: 'NSS Best Volunteer', issuingOrg: 'NSS Unit XYZ', platform: '', completionDate: '2024-02-28', credentialId: '', credentialUrl: '', fileLabel: 'nss.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-03-01', reviewedAt: '2024-03-03', reviewedBy: 'Admin', category: 'community', level: 'state' }
    ],
    [{ id: 'SPT004', sportName: 'Badminton', level: 'state', achievement: 'Semi-finalist', date: '2024-03-10', certificateFile: 'badminton.pdf', status: 'approved' }]
  ),

  // --- 4th Year (3) ---
  mkStudent('STU008', '2022001', 'Sneha Patil', 'sneha.p@xyz.edu', '4th', 'A', 'CE401',
    'Regular', '2003-06-14', 'FAC004',
    { CIA1: { obtained: 27, maxMarks: 35 }, CIA2: { obtained: 26, maxMarks: 35 }, capstone: { obtained: 16, maxMarks: 20 }, practicals: { obtained: 8, maxMarks: 10 }, CGPA: 8.0, semester: 7, backlogs: 0 },
    [{ id: 'INT007', company: 'Wipro', role: 'Cloud Intern', duration_months: 3, type: 'MNC', stipend: 20000, startDate: '2023-12-01', endDate: '2024-02-28', offerLetterFile: 'wipro_offer.pdf', status: 'approved', adminRemarks: '' }],
    [{ id: 'PLC002', company: 'Infosys', role: 'Systems Engineer', ctc: 550000, offerLetterFile: 'infosys_placement.pdf', status: 'approved', adminRemarks: '', offerDate: '2024-06-20' }],
    [{ id: 'HACK008', name: 'Code-a-thon', organizer: 'PICT', result: 'participated', teamSize: 4, date: '2024-01-20', certificateFile: 'codeathon.pdf', status: 'approved' }],
    [{ id: 'PROJ009', title: 'Cloud Monitoring Dashboard', description: 'Real-time cloud infra monitoring', githubUrl: 'https://github.com/sneha/cloudmon', techStack: ['React', 'AWS', 'Grafana'], commitCount: 95, lastCommit: '2024-09-10', stars: 7, language: 'JavaScript', status: 'completed' }],
    [
      { id: 'CERT015', type: 'technical', name: 'AWS DevOps Professional', issuingOrg: 'Amazon', platform: 'AWS', completionDate: '2024-01-10', credentialId: 'AWS-DOP-008', credentialUrl: '', fileLabel: 'aws_devops.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-01-11', reviewedAt: '2024-01-13', reviewedBy: 'Admin' },
      { id: 'CERT016', type: 'technical', name: 'Udemy Docker Mastery', issuingOrg: 'Udemy', platform: 'Udemy', completionDate: '2024-03-05', credentialId: 'UD-DK-008', credentialUrl: '', fileLabel: 'docker.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-03-06', reviewedAt: '2024-03-08', reviewedBy: 'Admin' },
      { id: 'CERT017', type: 'technical', name: 'edX Linux Foundation', issuingOrg: 'Linux Foundation', platform: 'edX', completionDate: '2024-05-20', credentialId: 'EDX-LF-008', credentialUrl: '', fileLabel: 'linux.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-05-21', reviewedAt: '2024-05-23', reviewedBy: 'Admin' }
    ],
    [{ id: 'SPT005', sportName: 'Volleyball', level: 'college', achievement: 'Winner', date: '2024-02-05', certificateFile: 'volleyball.pdf', status: 'approved' }]
  ),

  mkStudent('STU009', '2022002', 'Ananya Iyer', 'ananya.i@xyz.edu', '4th', 'A', 'CE402',
    'Regular', '2003-02-28', 'FAC004',
    { CIA1: { obtained: 33, maxMarks: 35 }, CIA2: { obtained: 32, maxMarks: 35 }, capstone: { obtained: 19, maxMarks: 20 }, practicals: { obtained: 10, maxMarks: 10 }, CGPA: 9.5, semester: 7, backlogs: 0 },
    [{ id: 'INT008', company: 'Google India', role: 'SWE Intern', duration_months: 6, type: 'MNC', stipend: 120000, startDate: '2024-01-01', endDate: '2024-06-30', offerLetterFile: 'google_intern.pdf', status: 'approved', adminRemarks: '' }],
    [{ id: 'PLC003', company: 'Microsoft', role: 'SDE-2', ctc: 2400000, offerLetterFile: 'ms_placement.pdf', status: 'approved', adminRemarks: '', offerDate: '2024-07-10' }],
    [
      { id: 'HACK009', name: 'ACM ICPC Regionals', organizer: 'ACM', result: 'winner', teamSize: 3, date: '2024-02-25', certificateFile: 'icpc.pdf', status: 'approved' },
      { id: 'HACK010', name: 'Google Hash Code', organizer: 'Google', result: 'runner-up', teamSize: 4, date: '2024-04-15', certificateFile: 'hashcode.pdf', status: 'approved' }
    ],
    [
      { id: 'PROJ010', title: 'Distributed File System', description: 'Distributed storage with consensus', githubUrl: 'https://github.com/ananya/dfs', techStack: ['Go', 'gRPC', 'Docker'], commitCount: 300, lastCommit: '2024-09-28', stars: 65, language: 'Go', status: 'completed' },
      { id: 'PROJ011', title: 'Compiler Design', description: 'Custom language compiler', githubUrl: 'https://github.com/ananya/compiler', techStack: ['C++', 'LLVM'], commitCount: 180, lastCommit: '2024-08-15', stars: 30, language: 'C++', status: 'completed' }
    ],
    [
      { id: 'CERT018', type: 'technical', name: 'Google Professional Cloud Architect', issuingOrg: 'Google', platform: 'Google', completionDate: '2024-02-15', credentialId: 'GCP-PCA-009', credentialUrl: '', fileLabel: 'gcp_pca.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-02-16', reviewedAt: '2024-02-18', reviewedBy: 'Admin' },
      { id: 'CERT019', type: 'technical', name: 'NPTEL Algorithm Design', issuingOrg: 'IIT Delhi', platform: 'NPTEL', completionDate: '2024-04-20', credentialId: 'NPTEL-AD-009', credentialUrl: '', fileLabel: 'nptel_algo.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-04-21', reviewedAt: '2024-04-23', reviewedBy: 'Admin' },
      { id: 'CERT020', type: 'technical', name: 'Kubernetes Admin', issuingOrg: 'CNCF', platform: 'Other', completionDate: '2024-06-10', credentialId: 'CKA-009', credentialUrl: '', fileLabel: 'cka.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-06-11', reviewedAt: '2024-06-13', reviewedBy: 'Admin' },
      { id: 'CERT021', type: 'technical', name: 'AWS ML Specialty', issuingOrg: 'Amazon', platform: 'AWS', completionDate: '2024-08-01', credentialId: 'AWS-ML-009', credentialUrl: '', fileLabel: 'aws_ml.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-08-02', reviewedAt: '2024-08-04', reviewedBy: 'Admin' }
    ],
    [{ id: 'SPT006', sportName: 'Chess', level: 'national', achievement: 'Rank 12', date: '2024-03-20', certificateFile: 'chess.pdf', status: 'approved' }]
  ),

  mkStudent('STU010', '2022003', 'Arjun Desai', 'arjun.d@xyz.edu', '4th', 'B', 'CE403',
    'Regular', '2003-10-05', 'FAC002',
    { CIA1: { obtained: 22, maxMarks: 35 }, CIA2: { obtained: 23, maxMarks: 35 }, capstone: { obtained: 14, maxMarks: 20 }, practicals: { obtained: 7, maxMarks: 10 }, CGPA: 7.0, semester: 7, backlogs: 0 },
    [{ id: 'INT009', company: 'Persistent Systems', role: 'Java Intern', duration_months: 3, type: 'MNC', stipend: 15000, startDate: '2024-05-01', endDate: '2024-07-31', offerLetterFile: 'persistent_offer.pdf', status: 'approved', adminRemarks: '' }],
    [{ id: 'PLC004', company: 'TCS', role: 'Systems Engineer', ctc: 380000, offerLetterFile: 'tcs_placement.pdf', status: 'approved', adminRemarks: '', offerDate: '2024-09-01' }],
    [{ id: 'HACK011', name: 'AngelHack 2024', organizer: 'AngelHack', result: 'participated', teamSize: 4, date: '2024-03-15', certificateFile: 'angelhack.pdf', status: 'approved' }],
    [{ id: 'PROJ012', title: 'Inventory Management', description: 'ERP inventory module', githubUrl: 'https://github.com/arjun/inventory', techStack: ['Java', 'Spring Boot', 'MySQL'], commitCount: 75, lastCommit: '2024-09-05', stars: 4, language: 'Java', status: 'completed' }],
    [
      { id: 'CERT022', type: 'technical', name: 'NPTEL DBMS', issuingOrg: 'IIT Kharagpur', platform: 'NPTEL', completionDate: '2024-04-10', credentialId: 'NPTEL-DB-010', credentialUrl: '', fileLabel: 'nptel_db.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-04-11', reviewedAt: '2024-04-13', reviewedBy: 'Admin' },
      { id: 'CERT023', type: 'non-technical', name: 'Leadership Workshop', issuingOrg: 'Rotaract Club', platform: '', completionDate: '2024-06-20', credentialId: '', credentialUrl: '', fileLabel: 'leadership.pdf', status: 'rejected', adminRemarks: 'Certificate scan is unclear. Please re-upload with higher resolution.', submittedAt: '2024-06-21', reviewedAt: '2024-06-23', reviewedBy: 'Admin', category: 'leadership', level: 'college' }
    ],
    [{ id: 'SPT007', sportName: 'Athletics', level: 'district', achievement: '100m Bronze', date: '2024-01-28', certificateFile: 'athletics.pdf', status: 'approved' }]
  ),

  // --- DSY (2) ---
  mkStudent('STU011', '2024DSY001', 'Sameer Khan', 'sameer.k@xyz.edu', 'DSY', 'A', 'CE-DSY01',
    'DSY', '2004-04-10', 'FAC003',
    { CIA1: { obtained: 25, maxMarks: 35 }, CIA2: { obtained: 24, maxMarks: 35 }, capstone: { obtained: 15, maxMarks: 20 }, practicals: { obtained: 8, maxMarks: 10 }, CGPA: 7.5, semester: 5, backlogs: 0 },
    [{ id: 'INT010', company: 'Zoho Corp', role: 'QA Intern', duration_months: 3, type: 'MNC', stipend: 18000, startDate: '2024-05-01', endDate: '2024-07-31', offerLetterFile: 'zoho_offer.pdf', status: 'approved', adminRemarks: '' }],
    [],
    [{ id: 'HACK012', name: 'DSY Hackathon', organizer: 'XYZ College', result: 'winner', teamSize: 3, date: '2024-06-01', certificateFile: 'dsyhack.pdf', status: 'approved' }],
    [{ id: 'PROJ013', title: 'Weather App', description: 'Real-time weather dashboard', githubUrl: 'https://github.com/sameer/weather', techStack: ['React', 'API'], commitCount: 40, lastCommit: '2024-09-01', stars: 3, language: 'JavaScript', status: 'completed' }],
    [
      { id: 'CERT024', type: 'technical', name: 'Coursera Python', issuingOrg: 'Google', platform: 'Coursera', completionDate: '2024-03-10', credentialId: 'CR-PY-011', credentialUrl: '', fileLabel: 'python_google.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-03-11', reviewedAt: '2024-03-13', reviewedBy: 'Admin' },
      { id: 'CERT025', type: 'technical', name: 'Udemy Web Development', issuingOrg: 'Udemy', platform: 'Udemy', completionDate: '2024-05-20', credentialId: 'UD-WD-011', credentialUrl: '', fileLabel: 'webdev.pdf', status: 'pending', adminRemarks: '', submittedAt: '2024-09-15', reviewedAt: '', reviewedBy: '' }
    ],
    [{ id: 'SPT008', sportName: 'Football', level: 'college', achievement: 'Team Member', date: '2024-02-15', certificateFile: 'football.pdf', status: 'approved' }]
  ),

  mkStudent('STU012', '2024DSY002', 'Pooja Thakur', 'pooja.t@xyz.edu', 'DSY', 'B', 'CE-DSY02',
    'DSY', '2004-08-20', 'FAC004',
    { CIA1: { obtained: 30, maxMarks: 35 }, CIA2: { obtained: 29, maxMarks: 35 }, capstone: { obtained: 17, maxMarks: 20 }, practicals: { obtained: 9, maxMarks: 10 }, CGPA: 8.9, semester: 5, backlogs: 0 },
    [{ id: 'INT011', company: 'Accenture', role: 'Cloud Intern', duration_months: 4, type: 'MNC', stipend: 30000, startDate: '2024-04-01', endDate: '2024-07-31', offerLetterFile: 'accenture_offer.pdf', status: 'approved', adminRemarks: '' }],
    [{ id: 'PLC005', company: 'Capgemini', role: 'Associate Consultant', ctc: 720000, offerLetterFile: 'capgemini_placement.pdf', status: 'approved', adminRemarks: '', offerDate: '2024-08-20' }],
    [{ id: 'HACK013', name: 'Women in Tech Hack', organizer: 'WiT India', result: 'winner', teamSize: 3, date: '2024-05-10', certificateFile: 'wit.pdf', status: 'approved' }],
    [{ id: 'PROJ014', title: 'Health Tracker', description: 'Personal health monitoring dashboard', githubUrl: 'https://github.com/pooja/health', techStack: ['React', 'Node.js', 'Chart.js'], commitCount: 110, lastCommit: '2024-09-20', stars: 10, language: 'JavaScript', status: 'completed' }],
    [
      { id: 'CERT026', type: 'technical', name: 'AWS Cloud Practitioner', issuingOrg: 'Amazon', platform: 'AWS', completionDate: '2024-02-01', credentialId: 'AWS-CP-012', credentialUrl: '', fileLabel: 'aws_cp2.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-02-02', reviewedAt: '2024-02-04', reviewedBy: 'Admin' },
      { id: 'CERT027', type: 'technical', name: 'Google Data Analytics', issuingOrg: 'Google', platform: 'Google', completionDate: '2024-04-15', credentialId: 'GDA-012', credentialUrl: '', fileLabel: 'gda.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-04-16', reviewedAt: '2024-04-18', reviewedBy: 'Admin' },
      { id: 'CERT028', type: 'technical', name: 'NPTEL Soft Computing', issuingOrg: 'IIT Kharagpur', platform: 'NPTEL', completionDate: '2024-06-20', credentialId: 'NPTEL-SC-012', credentialUrl: '', fileLabel: 'nptel_sc.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-06-21', reviewedAt: '2024-06-23', reviewedBy: 'Admin' },
      { id: 'CERT029', type: 'non-technical', name: 'NCC B Certificate', issuingOrg: 'NCC', platform: '', completionDate: '2024-01-10', credentialId: '', credentialUrl: '', fileLabel: 'ncc_b.pdf', status: 'approved', adminRemarks: '', submittedAt: '2024-01-11', reviewedAt: '2024-01-13', reviewedBy: 'Admin', category: 'NSS/NCC', level: 'national' }
    ],
    [{ id: 'SPT009', sportName: 'Kabaddi', level: 'state', achievement: 'Team Captain', date: '2024-03-05', certificateFile: 'kabaddi.pdf', status: 'approved' }]
  )
];

// ========== 4 FACULTY ==========

export const initialFaculty = [
  {
    id: 'FAC001', empId: 'FAC001', name: 'Dr. Kavita Joshi', email: 'kavita.j@xyz.edu',
    phone: '9876543210', designation: 'Professor', department: 'Computer Engineering',
    subjects: ['Data Structures', 'Algorithms'],
    assignedStudentIds: ['STU001', 'STU002', 'STU007'],
    qualifications: ['Ph.D. Computer Science', 'M.Tech IIT Bombay'],
    joinDate: '2010-07-01', status: 'active',
    notifications: [
      { id: 'FN001', message: 'Rohan Mehta submitted a new certificate', type: 'info', read: false, timestamp: '2024-09-10T10:30:00' },
      { id: 'FN002', message: 'Admin updated marks for Vikram Kulkarni', type: 'info', read: true, timestamp: '2024-09-08T14:00:00' }
    ]
  },
  {
    id: 'FAC002', empId: 'FAC002', name: 'Prof. Suresh Nair', email: 'suresh.n@xyz.edu',
    phone: '9876543211', designation: 'Associate Professor', department: 'Computer Engineering',
    subjects: ['Cloud Computing', 'DevOps'],
    assignedStudentIds: ['STU003', 'STU004', 'STU010'],
    qualifications: ['M.Tech Cloud Computing', 'B.E. Computer Science'],
    joinDate: '2014-08-01', status: 'active',
    notifications: [
      { id: 'FN003', message: 'Divya Pillai received approval for Google Cloud cert', type: 'success', read: false, timestamp: '2024-09-12T09:00:00' }
    ]
  },
  {
    id: 'FAC003', empId: 'FAC003', name: 'Dr. Anita More', email: 'anita.m@xyz.edu',
    phone: '9876543212', designation: 'Professor', department: 'Computer Engineering',
    subjects: ['Machine Learning', 'AI'],
    assignedStudentIds: ['STU005', 'STU006', 'STU011'],
    qualifications: ['Ph.D. Machine Learning', 'M.Tech IISc Bangalore'],
    joinDate: '2008-01-15', status: 'active',
    notifications: [
      { id: 'FN004', message: 'Priya Sharma scored 88 — highest in 3rd year', type: 'success', read: false, timestamp: '2024-09-14T11:00:00' }
    ]
  },
  {
    id: 'FAC004', empId: 'FAC004', name: 'Prof. Rahul Patil', email: 'rahul.p@xyz.edu',
    phone: '9876543213', designation: 'Assistant Professor', department: 'Computer Engineering',
    subjects: ['Web Technologies', 'DBMS'],
    assignedStudentIds: ['STU008', 'STU009', 'STU012'],
    qualifications: ['M.Tech VJTI Mumbai', 'B.E. Information Technology'],
    joinDate: '2018-06-01', status: 'active',
    notifications: [
      { id: 'FN005', message: 'Ananya Iyer placed at Microsoft with 24 LPA', type: 'success', read: true, timestamp: '2024-07-11T16:00:00' }
    ]
  }
];

// ========== ADMIN USER ==========
export const adminUser = {
  id: 'ADMIN001', username: 'admin@dept', name: 'Dr. R.S. Kulkarni',
  email: 'admin@xyz.edu', designation: 'HOD', department: 'Computer Engineering',
  notifications: [
    { id: 'AN001', message: 'New certificate submission from Sameer Khan', type: 'info', read: false, timestamp: '2024-09-15T08:00:00' },
    { id: 'AN002', message: '3 students below 60 — intervention required', type: 'warning', read: false, timestamp: '2024-09-14T09:00:00' },
    { id: 'AN003', message: 'Monthly report generated for September', type: 'info', read: true, timestamp: '2024-09-01T10:00:00' }
  ]
};

// ========== AUDIT LOG ==========
export const initialAuditLog = [
  { id: 'AL01', timestamp: '2024-09-15T10:30:00', action: 'Certificate Approved', admin: 'Dr. R.S. Kulkarni', target: 'Priya Sharma', details: 'Approved TensorFlow Developer cert #CERT008', ip: '192.168.1.10' },
  { id: 'AL02', timestamp: '2024-09-15T10:25:00', action: 'Certificate Approved', admin: 'Dr. R.S. Kulkarni', target: 'Priya Sharma', details: 'Approved AWS Solutions Architect cert #CERT009', ip: '192.168.1.10' },
  { id: 'AL03', timestamp: '2024-09-14T16:45:00', action: 'Certificate Rejected', admin: 'Dr. R.S. Kulkarni', target: 'Arjun Desai', details: 'Rejected Leadership Workshop #CERT023 — unclear scan', ip: '192.168.1.10' },
  { id: 'AL04', timestamp: '2024-09-14T14:20:00', action: 'Marks Updated', admin: 'Dr. R.S. Kulkarni', target: 'Aarav Rane', details: 'Updated CIA1 marks: 22 → 26', ip: '192.168.1.10' },
  { id: 'AL05', timestamp: '2024-09-13T11:00:00', action: 'Student Added', admin: 'Dr. R.S. Kulkarni', target: 'Divya Pillai', details: 'Added student with PRN 2024003', ip: '192.168.1.10' },
  { id: 'AL06', timestamp: '2024-09-12T09:30:00', action: 'Certificate Approved', admin: 'Dr. R.S. Kulkarni', target: 'Divya Pillai', details: 'Approved Google Cloud Associate cert #CERT004', ip: '192.168.1.10' },
  { id: 'AL07', timestamp: '2024-09-11T15:45:00', action: 'Faculty Assigned', admin: 'Dr. R.S. Kulkarni', target: 'Prof. Suresh Nair', details: 'Assigned 3 students to FAC002', ip: '192.168.1.10' },
  { id: 'AL08', timestamp: '2024-09-10T10:15:00', action: 'Certificate Approved', admin: 'Dr. R.S. Kulkarni', target: 'Sneha Patil', details: 'Approved AWS DevOps Professional cert #CERT015', ip: '192.168.1.10' },
  { id: 'AL09', timestamp: '2024-09-09T14:00:00', action: 'Marks Updated', admin: 'Dr. R.S. Kulkarni', target: 'Vikram Kulkarni', details: 'Updated CIA2 marks: 18 → 20', ip: '192.168.1.10' },
  { id: 'AL10', timestamp: '2024-09-08T09:00:00', action: 'Certificate Approved', admin: 'Dr. R.S. Kulkarni', target: 'Ananya Iyer', details: 'Approved Google Professional Cloud Architect #CERT018', ip: '192.168.1.10' },
  { id: 'AL11', timestamp: '2024-09-07T16:30:00', action: 'Student Deactivated', admin: 'Dr. R.S. Kulkarni', target: 'Test Student', details: 'Deactivated test account', ip: '192.168.1.10' },
  { id: 'AL12', timestamp: '2024-09-06T11:20:00', action: 'Certificate Approved', admin: 'Dr. R.S. Kulkarni', target: 'Meera Nair', details: 'Approved Microsoft Azure AI cert #CERT012', ip: '192.168.1.10' },
  { id: 'AL13', timestamp: '2024-09-05T13:45:00', action: 'Notification Sent', admin: 'Dr. R.S. Kulkarni', target: 'All 3rd Year', details: 'Reminder: Submit internship certificates by Sep 30', ip: '192.168.1.10' },
  { id: 'AL14', timestamp: '2024-09-04T10:00:00', action: 'Scoring Config Updated', admin: 'Dr. R.S. Kulkarni', target: 'Department', details: 'Adjusted hackathon weightage from 8 to 10', ip: '192.168.1.10' },
  { id: 'AL15', timestamp: '2024-09-03T15:30:00', action: 'Certificate Approved', admin: 'Dr. R.S. Kulkarni', target: 'Sameer Khan', details: 'Approved Coursera Python cert #CERT024', ip: '192.168.1.10' },
  { id: 'AL16', timestamp: '2024-09-02T09:15:00', action: 'Marks Updated', admin: 'Dr. R.S. Kulkarni', target: 'Karan Joshi', details: 'Uploaded semester 5 marks via CSV', ip: '192.168.1.10' },
  { id: 'AL17', timestamp: '2024-09-01T14:00:00', action: 'Certificate Approved', admin: 'Dr. R.S. Kulkarni', target: 'Pooja Thakur', details: 'Approved NCC B Certificate #CERT029', ip: '192.168.1.10' },
  { id: 'AL18', timestamp: '2024-08-30T11:00:00', action: 'Faculty Added', admin: 'Dr. R.S. Kulkarni', target: 'Prof. Rahul Patil', details: 'Added faculty with EmpID FAC004', ip: '192.168.1.10' },
  { id: 'AL19', timestamp: '2024-08-28T16:00:00', action: 'Certificate Approved', admin: 'Dr. R.S. Kulkarni', target: 'Rohan Mehta', details: 'Approved AWS Cloud Practitioner cert #CERT001', ip: '192.168.1.10' },
  { id: 'AL20', timestamp: '2024-08-25T10:30:00', action: 'Student Added', admin: 'Dr. R.S. Kulkarni', target: 'Sameer Khan', details: 'Added DSY student with PRN 2024DSY001', ip: '192.168.1.10' }
];
