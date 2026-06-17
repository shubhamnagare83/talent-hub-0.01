// ============================================================
// CertTrack Pro — Admin Panel (All 12 Pages)
// ============================================================
import React, { useState } from 'react';
import {
  Avatar, ScoreRing, CategoryBars, StatusBadge, Tabs, Pagination,
  EmptyState, SearchInput, StatCard, LineChart, BarChart, PieChart, RadarChart, Modal, ConfirmModal, ToggleSwitch,
  formatDate, formatDateTime, timeAgo
} from './SharedComponents';
import {
  calculateScore, recalculateOnApproval, recalculateOnMarksUpload,
  getRankInYear, getDepartmentRank, getScoreColor, getInitials
} from '../scoreEngine';
import { genId } from '../data';

export default function AdminPanel({
  admin, students, faculty, config, auditLog, addToast,
  updateStudents, updateFaculty, updateAuditLog, updateConfig,
  activePage, setActivePage
}) {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editingStudent, setEditingStudent] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [editingFaculty, setEditingFaculty] = useState(false);
  
  // Helper to log audit actions
  const logAdminAction = (action, target, details) => {
    const newLogEntry = {
      timestamp: new Date().toISOString(),
      action,
      admin: admin.name || 'Admin',
      target,
      details,
      ip: '192.168.1.' + Math.floor(Math.random() * 254 + 1)
    };
    updateAuditLog([newLogEntry, ...auditLog]);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <AdminDashboard
            students={students}
            faculty={faculty}
            auditLog={auditLog}
            setActivePage={setActivePage}
          />
        );
      case 'approvals':
        return (
          <ApprovalQueue
            students={students}
            config={config}
            updateStudents={updateStudents}
            logAdminAction={logAdminAction}
            addToast={addToast}
          />
        );
      case 'students':
        return (
          <StudentManagement
            students={students}
            faculty={faculty}
            config={config}
            updateStudents={updateStudents}
            logAdminAction={logAdminAction}
            addToast={addToast}
            onViewStudent={(s) => { setSelectedStudent(s); setEditingStudent(false); }}
            onEditStudent={(s) => { setSelectedStudent(s); setEditingStudent(true); }}
          />
        );
      case 'faculty-mgmt':
        return (
          <FacultyManagement
            students={students}
            faculty={faculty}
            updateFaculty={updateFaculty}
            logAdminAction={logAdminAction}
            addToast={addToast}
            onViewFaculty={(f) => { setSelectedFaculty(f); setEditingFaculty(false); }}
            onEditFaculty={(f) => { setSelectedFaculty(f); setEditingFaculty(true); }}
          />
        );
      case 'marks-upload':
        return (
          <MarksUpload
            students={students}
            config={config}
            updateStudents={updateStudents}
            logAdminAction={logAdminAction}
            addToast={addToast}
          />
        );
      case 'add-user':
        return (
          <AddUser
            students={students}
            faculty={faculty}
            config={config}
            updateStudents={updateStudents}
            updateFaculty={updateFaculty}
            logAdminAction={logAdminAction}
            addToast={addToast}
          />
        );
      case 'analytics':
        return (
          <Analytics
            students={students}
            config={config}
          />
        );
      case 'intervention':
        return (
          <InterventionRoster
            students={students}
            faculty={faculty}
            addToast={addToast}
          />
        );
      case 'audit-log':
        return (
          <AuditLogTab
            auditLog={auditLog}
          />
        );
      case 'notifications':
        return (
          <AdminNotifications
            admin={admin}
            students={students}
            faculty={faculty}
            addToast={addToast}
            logAdminAction={logAdminAction}
            updateStudents={updateStudents}
            updateFaculty={updateFaculty}
          />
        );
      case 'settings':
        return (
          <DepartmentSettings
            config={config}
            updateConfig={updateConfig}
            logAdminAction={logAdminAction}
            addToast={addToast}
          />
        );
      case 'my-profile':
        return (
          <AdminProfile
            admin={admin}
            addToast={addToast}
          />
        );
      default:
        return <AdminDashboard students={students} faculty={faculty} auditLog={auditLog} setActivePage={setActivePage} />;
    }
  };

  return (
    <div>
      {renderContent()}

      {/* Admin Student Modal (editable & marks upload) */}
      {selectedStudent && (
        <AdminStudentModal
          student={selectedStudent}
          students={students}
          faculty={faculty}
          config={config}
          editing={editingStudent}
          setEditing={setEditingStudent}
          onClose={() => setSelectedStudent(null)}
          updateStudents={updateStudents}
          logAdminAction={logAdminAction}
          addToast={addToast}
        />
      )}

      {/* Admin Faculty Modal */}
      {selectedFaculty && (
        <AdminFacultyModal
          facultyItem={selectedFaculty}
          students={students}
          faculty={faculty}
          editing={editingFaculty}
          setEditing={setEditingFaculty}
          onClose={() => setSelectedFaculty(null)}
          updateFaculty={updateFaculty}
          logAdminAction={logAdminAction}
          addToast={addToast}
        />
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 1 — Global Dashboard
// ──────────────────────────────────────────────────────────────
function AdminDashboard({ students, faculty, auditLog, setActivePage }) {
  const activeStudents = students.filter(s => s.status === 'active');
  const avgScore = activeStudents.length > 0
    ? Math.round(activeStudents.reduce((sum, s) => sum + s.score, 0) / activeStudents.length)
    : 0;

  const pendingApprovals = students.reduce((sum, s) => {
    return sum + (s.certifications || []).filter(c => c.status === 'pending').length;
  }, 0);

  // Certs approved this month
  const approvedThisMonth = students.reduce((sum, s) => {
    return sum + (s.certifications || []).filter(c => c.status === 'approved' && c.reviewedAt?.includes('2024-09')).length;
  }, 0);

  const atRisk = activeStudents.filter(s => s.score < 60).length;
  const activeFaculty = faculty.filter(f => f.status === 'active').length;

  // Top 3 performers
  const topThree = [...activeStudents].sort((a, b) => b.score - a.score).slice(0, 3);

  // Year-wise average score comparison
  const years = ['1st', '2nd', '3rd', '4th', 'DSY'];
  const yearAvgData = years.map(y => {
    const yrStus = activeStudents.filter(s => s.year === y);
    const avg = yrStus.length > 0 ? Math.round(yrStus.reduce((sum, s) => sum + s.score, 0) / yrStus.length) : 0;
    return { label: `${y} Year`, value: avg, color: 'var(--primary)' };
  });

  return (
    <div>
      <h2 className="page-title">Global Admin Dashboard</h2>

      <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
        <StatCard icon="ti-users" iconBg="var(--primary-light)" iconColor="var(--primary)" value={students.length} label="Total Students" />
        <StatCard icon="ti-chart-bar" iconBg="var(--success-light)" iconColor="var(--success)" value={avgScore} label="Avg score" />
        <StatCard icon="ti-checkbox" iconBg="var(--warning-light)" iconColor="var(--warning)" value={pendingApprovals} label="Pending approvals" />
        <StatCard icon="ti-calendar" iconBg="var(--purple-light)" iconColor="var(--purple)" value={approvedThisMonth} label="Approved this month" />
        <StatCard icon="ti-alert-triangle" iconBg="var(--danger-light)" iconColor="var(--danger)" value={atRisk} label="At-risk (<60)" />
        <StatCard icon="ti-chalkboard" iconBg="var(--primary-light)" iconColor="var(--primary)" value={activeFaculty} label="Active Faculty" />
      </div>

      <div className="grid-2 mt-4">
        {/* Top Performers Podium */}
        <div className="card" style={{ display: 'flex', flexDirection: 'col', justifyContent: 'space-between' }}>
          <div className="card-header"><span className="card-title">Top Performers Podium</span></div>
          <div className="flex justify-center items-end gap-4" style={{ height: 160, paddingBottom: 10 }}>
            {/* 2nd Place */}
            {topThree[1] && (
              <div className="flex flex-col items-center">
                <Avatar name={topThree[1].name} size="md" />
                <div className="text-xs font-semibold mt-1" style={{ maxWidth: 80, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{topThree[1].name}</div>
                <div style={{ background: 'var(--color-background-secondary)', width: 60, height: 70, borderTopLeftRadius: 4, borderTopRightRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 18 }}>🥈</span>
                  <strong className="text-sm">{topThree[1].score}</strong>
                </div>
              </div>
            )}
            {/* 1st Place */}
            {topThree[0] && (
              <div className="flex flex-col items-center">
                <Avatar name={topThree[0].name} size="lg" />
                <div className="text-xs font-semibold mt-1" style={{ maxWidth: 90, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{topThree[0].name}</div>
                <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', width: 70, height: 100, borderTopLeftRadius: 4, borderTopRightRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 22 }}>🥇</span>
                  <strong className="text-base">{topThree[0].score}</strong>
                </div>
              </div>
            )}
            {/* 3rd Place */}
            {topThree[2] && (
              <div className="flex flex-col items-center">
                <Avatar name={topThree[2].name} size="md" />
                <div className="text-xs font-semibold mt-1" style={{ maxWidth: 80, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{topThree[2].name}</div>
                <div style={{ background: 'var(--color-background-secondary)', width: 60, height: 50, borderTopLeftRadius: 4, borderTopRightRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 16 }}>🥉</span>
                  <strong className="text-sm">{topThree[2].score}</strong>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Year-wise Avg Score */}
        <div className="card">
          <div className="card-header"><span className="card-title">Year-wise Avg Scores</span></div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '0.5rem 0' }}>
            <BarChart data={yearAvgData} width={360} height={150} />
          </div>
        </div>
      </div>

      {/* Quick Actions & Audit Logs */}
      <div className="grid-2 mt-4">
        <div className="card">
          <div className="card-header"><span className="card-title">Quick Actions</span></div>
          <div className="grid-2" style={{ gap: '0.75rem' }}>
            <button className="btn btn-primary" onClick={() => setActivePage('approvals')}>
              <i className="ti ti-checkbox" style={{ marginRight: 6 }} /> Review Approvals
            </button>
            <button className="btn btn-secondary" onClick={() => setActivePage('marks-upload')}>
              <i className="ti ti-file-upload" style={{ marginRight: 6 }} /> Upload Marks
            </button>
            <button className="btn btn-secondary" onClick={() => setActivePage('add-user')}>
              <i className="ti ti-user-plus" style={{ marginRight: 6 }} /> Register Student/Faculty
            </button>
            <button className="btn btn-danger" onClick={() => setActivePage('intervention')}>
              <i className="ti ti-alert-triangle" style={{ marginRight: 6 }} /> Intervention Roster
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-header"><span className="card-title">Recent Activity Feed</span></div>
          <div className="table-wrapper" style={{ maxHeight: 180, overflowY: 'auto' }}>
            <table style={{ fontSize: 11 }}>
              <thead>
                <tr><th>TIME</th><th>ACTION</th><th>TARGET</th></tr>
              </thead>
              <tbody>
                {auditLog.slice(0, 5).map((log, i) => (
                  <tr key={i}>
                    <td className="cell-muted">{timeAgo(log.timestamp)}</td>
                    <td className="font-medium">{log.action}</td>
                    <td className="cell-muted">{log.target}</td>
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
// PAGE 2 — Approval Queue
// ──────────────────────────────────────────────────────────────
function ApprovalQueue({ students, config, updateStudents, logAdminAction, addToast }) {
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [remarks, setRemarks] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 5;

  // Flatten pending certifications
  let pendingCerts = [];
  students.forEach(s => {
    (s.certifications || []).forEach(c => {
      if (c.status === 'pending') {
        pendingCerts.push({
          student: s,
          cert: c
        });
      }
    });
  });

  // Filter
  let filtered = pendingCerts.filter(item => {
    const matchSearch = item.cert.name.toLowerCase().includes(search.toLowerCase()) || item.student.name.toLowerCase().includes(search.toLowerCase());
    const matchYear = yearFilter === 'All' || item.student.year === yearFilter;
    const matchType = typeFilter === 'All' || item.cert.type === typeFilter;
    return matchSearch && matchYear && matchType;
  });

  // Paginate
  const total = filtered.length;
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  const handleApprove = (studentId, certId) => {
    const updated = students.map(s => {
      if (s.id !== studentId) return s;
      
      const newCerts = s.certifications.map(c => {
        if (c.id !== certId) return c;
        return {
          ...c,
          status: 'approved',
          reviewedAt: new Date().toISOString(),
          reviewedBy: 'Admin',
          adminRemarks: remarks[certId] || ''
        };
      });

      const clone = { ...s, certifications: newCerts };
      // Recalculate score!
      recalculateOnApproval(clone, certId, config.scoringConfig);
      
      // Notify student
      if (!clone.notifications) clone.notifications = [];
      clone.notifications.push({
        id: genId(),
        message: `Your certificate "${newCerts.find(c => c.id === certId).name}" has been approved!`,
        timestamp: new Date().toISOString(),
        read: false
      });

      return clone;
    });

    updateStudents(updated);
    addToast('Certificate approved successfully', 'success');
    logAdminAction('Approve Certificate', `Student ID: ${studentId}`, `Approved cert ${certId}`);
  };

  const handleReject = (studentId, certId) => {
    const rmk = remarks[certId]?.trim();
    if (!rmk) {
      addToast('Please enter rejection remarks', 'warning');
      return;
    }

    const updated = students.map(s => {
      if (s.id !== studentId) return s;
      
      const newCerts = s.certifications.map(c => {
        if (c.id !== certId) return c;
        return {
          ...c,
          status: 'rejected',
          reviewedAt: new Date().toISOString(),
          reviewedBy: 'Admin',
          adminRemarks: rmk
        };
      });

      const clone = { ...s, certifications: newCerts };
      // Notify student
      if (!clone.notifications) clone.notifications = [];
      clone.notifications.push({
        id: genId(),
        message: `Your certificate "${newCerts.find(c => c.id === certId).name}" was rejected. Reason: ${rmk}`,
        timestamp: new Date().toISOString(),
        read: false
      });

      return clone;
    });

    updateStudents(updated);
    addToast('Certificate rejected', 'error');
    logAdminAction('Reject Certificate', `Student ID: ${studentId}`, `Rejected cert ${certId}. Reason: ${rmk}`);
  };

  const handleRequestInfo = (studentId, certId) => {
    const rmk = remarks[certId]?.trim() || 'Please re-upload a clearer copy or verify details.';
    const updated = students.map(s => {
      if (s.id !== studentId) return s;
      
      const newCerts = s.certifications.map(c => {
        if (c.id !== certId) return c;
        return {
          ...c,
          status: 'info-requested',
          reviewedAt: new Date().toISOString(),
          reviewedBy: 'Admin',
          adminRemarks: rmk
        };
      });

      const clone = { ...s, certifications: newCerts };
      // Notify student
      if (!clone.notifications) clone.notifications = [];
      clone.notifications.push({
        id: genId(),
        message: `More info requested for "${newCerts.find(c => c.id === certId).name}". Remarks: ${rmk}`,
        timestamp: new Date().toISOString(),
        read: false
      });

      return clone;
    });

    updateStudents(updated);
    addToast('Information request sent to student', 'info');
    logAdminAction('Request Info', `Student ID: ${studentId}`, `Requested info on cert ${certId}. Remarks: ${rmk}`);
  };

  return (
    <div>
      <h2 className="page-title">Certificate Approval Queue ({total} pending)</h2>

      <div className="filter-bar mb-3">
        <SearchInput value={search} onChange={setSearch} placeholder="Search student or certificate..." />
        <select value={yearFilter} onChange={e => { setYearFilter(e.target.value); setCurrentPage(1); }} style={{ width: 'auto' }}>
          <option value="All">All Years</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
          <option value="DSY">DSY</option>
        </select>
        <select value={typeFilter} onChange={e => { setTypeFilter(e.target.value); setCurrentPage(1); }} style={{ width: 'auto' }}>
          <option value="All">All Types</option>
          <option value="technical">Technical</option>
          <option value="non-technical">Non-Technical</option>
        </select>
      </div>

      {paginated.length === 0 ? (
        <EmptyState icon="ti-certificate" heading="Approval queue is empty" text="No pending certificate review requests." />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {paginated.map(({ student, cert }) => (
            <div key={cert.id} className="card" style={{ borderLeft: '4px solid var(--warning)' }}>
              <div className="flex justify-between items-start" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar name={student.name} size="sm" />
                    <div>
                      <strong style={{ fontSize: 14 }}>{student.name}</strong>
                      <span className="text-xs text-secondary ml-2">PRN: {student.prn} · {student.year} Year</span>
                    </div>
                  </div>
                  <h4 style={{ margin: '0.25rem 0', fontSize: 15, fontWeight: 500 }}>{cert.name}</h4>
                  <p className="text-xs text-secondary" style={{ margin: '0.25rem 0' }}>
                    Type: <span className="badge badge-gray">{cert.type === 'technical' ? 'Technical' : 'Non-technical'}</span> | Platform/Org: <strong>{cert.platform || cert.issuingOrg}</strong> | Submitted: <strong>{formatDate(cert.submittedAt)}</strong>
                  </p>
                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="text-xs btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 2, marginTop: 4 }}>
                      <i className="ti ti-external-link" /> Verify Credential Link
                    </a>
                  )}
                  {cert.fileLabel && (
                    <div className="text-xs cell-muted mt-1">
                      <i className="ti ti-file" style={{ marginRight: 3 }} /> Attachment: <strong>{cert.fileLabel}</strong>
                    </div>
                  )}
                </div>

                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <textarea
                    placeholder="Enter review remarks (required for Rejection)..."
                    value={remarks[cert.id] || ''}
                    onChange={e => setRemarks({ ...remarks, [cert.id]: e.target.value })}
                    rows={2}
                    style={{ fontSize: 12 }}
                  />
                  <div className="flex justify-end gap-2">
                    <button className="btn btn-secondary btn-xs" onClick={() => handleRequestInfo(student.id, cert.id)}>
                      Request Info
                    </button>
                    <button className="btn btn-danger btn-xs" onClick={() => handleReject(student.id, cert.id)}>
                      Reject
                    </button>
                    <button className="btn btn-success btn-xs" onClick={() => handleApprove(student.id, cert.id)}>
                      <i className="ti ti-check" /> Approve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Pagination total={total} page={currentPage} perPage={perPage} onChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 3 — Student Management
// ──────────────────────────────────────────────────────────────
function StudentManagement({
  students, faculty, config, updateStudents, logAdminAction, addToast,
  onViewStudent, onEditStudent
}) {
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 10;

  // Filter students
  let filtered = students.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.prn.includes(search);
    const matchYear = yearFilter === 'All' || s.year === yearFilter;
    const matchStatus = statusFilter === 'All' || s.status === statusFilter;
    return matchSearch && matchYear && matchStatus;
  });

  const total = filtered.length;
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  // Checkbox handlers
  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedIds(paginated.map(s => s.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id, checked) => {
    if (checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter(x => x !== id));
    }
  };

  const handleBulkDeactivate = () => {
    if (selectedIds.length === 0) return;
    const updated = students.map(s => {
      if (selectedIds.includes(s.id)) {
        return { ...s, status: 'inactive' };
      }
      return s;
    });
    updateStudents(updated);
    setSelectedIds([]);
    addToast(`Deactivated ${selectedIds.length} students`, 'success');
    logAdminAction('Bulk Deactivate Students', `Count: ${selectedIds.length}`, `Deactivated: ${selectedIds.join(', ')}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="page-title" style={{ marginBottom: 0 }}>Student Database</h2>
        <div className="flex gap-2">
          {selectedIds.length > 0 && (
            <button className="btn btn-danger btn-sm" onClick={handleBulkDeactivate}>
              Deactivate Selected ({selectedIds.length})
            </button>
          )}
        </div>
      </div>

      <div className="filter-bar mb-3">
        <SearchInput value={search} onChange={setSearch} placeholder="Search by name, email, PRN..." />
        <select value={yearFilter} onChange={e => { setYearFilter(e.target.value); setCurrentPage(1); }} style={{ width: 'auto' }}>
          <option value="All">All Years</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
          <option value="DSY">DSY</option>
        </select>
        <select value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setCurrentPage(1); }} style={{ width: 'auto' }}>
          <option value="All">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="card">
        {paginated.length === 0 ? (
          <EmptyState icon="ti-search" heading="No students found" text="Try checking other filters." />
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={selectedIds.length === paginated.length && paginated.length > 0}
                      onChange={e => handleSelectAll(e.target.checked)}
                    />
                  </th>
                  <th>STUDENT</th><th>PRN</th><th>YEAR</th><th>DIV</th><th>SCORE</th><th>FACULTY</th><th>STATUS</th><th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map(s => {
                  const fac = faculty.find(f => f.id === s.assignedFacultyId);
                  return (
                    <tr key={s.id} className={s.status === 'inactive' ? 'cell-muted' : ''}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(s.id)}
                          onChange={e => handleSelectOne(s.id, e.target.checked)}
                        />
                      </td>
                      <td className="flex items-center gap-2">
                        <Avatar name={s.name} size="sm" />
                        <div>
                          <div className="font-medium">{s.name}</div>
                          <div className="text-xs text-secondary">{s.email}</div>
                        </div>
                      </td>
                      <td>{s.prn}</td>
                      <td>{s.year}</td>
                      <td>Div {s.division}</td>
                      <td><strong style={{ color: getScoreColor(s.score) }}>{s.score}</strong></td>
                      <td className="text-xs">{fac ? fac.name : 'Unassigned'}</td>
                      <td><StatusBadge status={s.status} /></td>
                      <td>
                        <div className="flex gap-1">
                          <button className="btn btn-secondary btn-xs" onClick={() => onViewStudent(s)}>
                            View
                          </button>
                          <button className="btn btn-primary btn-xs" onClick={() => onEditStudent(s)}>
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <Pagination total={total} page={currentPage} perPage={perPage} onChange={setCurrentPage} />
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 4 — Faculty Management
// ──────────────────────────────────────────────────────────────
function FacultyManagement({
  students, faculty, updateFaculty, logAdminAction, addToast,
  onViewFaculty, onEditFaculty
}) {
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [form, setForm] = useState({ name: '', empId: '', email: '', designation: '', subjects: '' });
  const [errors, setErrors] = useState({});

  let filtered = faculty.filter(f => {
    return f.name.toLowerCase().includes(search.toLowerCase()) || f.empId.includes(search);
  });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.empId.trim()) e.empId = 'Employee ID is required';
    if (!form.email.trim()) e.email = 'Email is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleAddFaculty = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newFaculty = {
      id: 'FAC_' + Date.now(),
      name: form.name.trim(),
      empId: form.empId.trim(),
      email: form.email.trim(),
      designation: form.designation || 'Assistant Professor',
      subjects: form.subjects ? form.subjects.split(',').map(s => s.trim()) : [],
      status: 'active',
      notifications: []
    };

    updateFaculty([...faculty, newFaculty]);
    setShowAddModal(false);
    setForm({ name: '', empId: '', email: '', designation: '', subjects: '' });
    addToast('Faculty registered successfully', 'success');
    logAdminAction('Register Faculty', `ID: ${newFaculty.empId}`, `Registered ${newFaculty.name}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="page-title" style={{ marginBottom: 0 }}>Faculty Directory</h2>
        <button className="btn btn-primary btn-sm" onClick={() => setShowAddModal(true)}>
          <i className="ti ti-plus" /> Add Faculty
        </button>
      </div>

      <div className="filter-bar mb-3">
        <div style={{ flex: 1 }}>
          <SearchInput value={search} onChange={setSearch} placeholder="Search faculty name or employee ID..." />
        </div>
      </div>

      <div className="card">
        {filtered.length === 0 ? (
          <EmptyState icon="ti-search" heading="No faculty members found" />
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>FACULTY</th><th>EMPLOYEE ID</th><th>DESIGNATION</th><th>SUBJECTS HANDLED</th><th>ASSIGNED STUS</th><th>STATUS</th><th>ACTIONS</th></tr>
              </thead>
              <tbody>
                {filtered.map(f => {
                  const assignedCount = students.filter(s => s.assignedFacultyId === f.id).length;
                  return (
                    <tr key={f.id}>
                      <td className="flex items-center gap-2">
                        <Avatar name={f.name} role="faculty" size="sm" />
                        <div>
                          <div className="font-medium">{f.name}</div>
                          <div className="text-xs text-secondary">{f.email}</div>
                        </div>
                      </td>
                      <td>{f.empId}</td>
                      <td>{f.designation}</td>
                      <td>
                        <div className="flex flex-wrap gap-1">
                          {(f.subjects || []).slice(0, 3).map(s => (
                            <span key={s} className="badge badge-gray text-xs">{s}</span>
                          ))}
                          {(f.subjects || []).length > 3 && <span className="text-xs text-secondary">+{f.subjects.length - 3} more</span>}
                        </div>
                      </td>
                      <td><strong>{assignedCount}</strong></td>
                      <td><StatusBadge status={f.status} /></td>
                      <td>
                        <div className="flex gap-1">
                          <button className="btn btn-secondary btn-xs" onClick={() => onViewFaculty(f)}>View</button>
                          <button className="btn btn-primary btn-xs" onClick={() => onEditFaculty(f)}>Edit</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showAddModal && (
        <Modal title="Register Faculty Member" onClose={() => setShowAddModal(false)}>
          <form onSubmit={handleAddFaculty}>
            <div className="form-group">
              <label className="form-label">Full Name<span className="required">*</span></label>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={errors.name ? 'error' : ''} />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Employee ID<span className="required">*</span></label>
                <input value={form.empId} onChange={e => setForm({ ...form, empId: e.target.value })} className={errors.empId ? 'error' : ''} placeholder="e.g. FAC101" />
                {errors.empId && <div className="form-error">{errors.empId}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Email<span className="required">*</span></label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={errors.email ? 'error' : ''} />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Designation</label>
              <select value={form.designation} onChange={e => setForm({ ...form, designation: e.target.value })}>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Professor">Professor</option>
                <option value="HOD">Head of Department (HOD)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Subjects (comma-separated)</label>
              <input value={form.subjects} onChange={e => setForm({ ...form, subjects: e.target.value })} placeholder="e.g. Operating Systems, ML, DSA" />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button type="submit" className="btn btn-primary">Add Faculty</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 5 — Academic Marks Upload
// ──────────────────────────────────────────────────────────────
function MarksUpload({ students, config, updateStudents, logAdminAction, addToast }) {
  const [tab, setTab] = useState('manual');
  const [search, setSearch] = useState('');
  const [selectedStu, setSelectedStu] = useState(null);
  const [marks, setMarks] = useState({ CIA1: '', CIA2: '', capstone: '', practicals: '', CGPA: '' });
  const [showSimulate, setShowSimulate] = useState(false);

  // Search autocomplete for student
  const matches = search ? students.filter(s => {
    return s.name.toLowerCase().includes(search.toLowerCase()) || s.prn.includes(search);
  }).slice(0, 5) : [];

  const handleSelectStudent = (s) => {
    setSelectedStu(s);
    setSearch(`${s.name} (${s.prn})`);
    setMarks({
      CIA1: s.academics?.CIA1?.obtained ?? '',
      CIA2: s.academics?.CIA2?.obtained ?? '',
      capstone: s.academics?.capstone?.obtained ?? '',
      practicals: s.academics?.practicals?.obtained ?? '',
      CGPA: s.academics?.CGPA ?? ''
    });
  };

  const handleSaveMarks = () => {
    if (!selectedStu) return;
    
    const marksObj = {
      CIA1: { obtained: Number(marks.CIA1), maxMarks: 35 },
      CIA2: { obtained: Number(marks.CIA2), maxMarks: 35 },
      capstone: { obtained: Number(marks.capstone), maxMarks: 20 },
      practicals: { obtained: Number(marks.practicals), maxMarks: 10 },
      CGPA: Number(marks.CGPA)
    };

    const updated = students.map(s => {
      if (s.id !== selectedStu.id) return s;
      
      const clone = JSON.parse(JSON.stringify(s));
      recalculateOnMarksUpload(clone, marksObj, config.scoringConfig);
      
      // Add notification
      if (!clone.notifications) clone.notifications = [];
      clone.notifications.push({
        id: genId(),
        message: 'Your academic internal marks / CGPA have been updated by admin.',
        timestamp: new Date().toISOString(),
        read: false
      });

      return clone;
    });

    updateStudents(updated);
    addToast('Academic marks updated', 'success');
    logAdminAction('Upload Marks (Manual)', `PRN: ${selectedStu.prn}`, `Updated academic components for ${selectedStu.name}`);
    setSelectedStu(null);
    setSearch('');
  };

  const triggerBulkProcess = () => {
    // Process simulated CSV data (update top 3 students)
    const targets = students.slice(0, 3);
    const updated = students.map(s => {
      const isTarget = targets.find(t => t.id === s.id);
      if (!isTarget) return s;

      const clone = JSON.parse(JSON.stringify(s));
      const marksObj = {
        CIA1: { obtained: 30, maxMarks: 35 },
        CIA2: { obtained: 28, maxMarks: 35 },
        capstone: { obtained: 17, maxMarks: 20 },
        practicals: { obtained: 9, maxMarks: 10 },
        CGPA: 8.5
      };
      recalculateOnMarksUpload(clone, marksObj, config.scoringConfig);
      return clone;
    });

    updateStudents(updated);
    addToast('Simulated CSV processed successfully. 3 records updated.', 'success');
    logAdminAction('Upload Marks (Bulk CSV)', 'Multiple Students', 'Processed simulated CSV marks sheet');
    setShowSimulate(false);
  };

  return (
    <div>
      <h2 className="page-title">Academic Marks Upload Center</h2>
      <Tabs tabs={[{ key: 'manual', label: 'Manual Entry' }, { key: 'csv', label: 'Bulk CSV Upload' }]} active={tab} onChange={setTab} />

      {tab === 'manual' && (
        <div className="card">
          <div className="form-group" style={{ position: 'relative' }}>
            <label className="form-label">Search Student</label>
            <input
              value={search}
              onChange={e => { setSearch(e.target.value); if (!e.target.value) setSelectedStu(null); }}
              placeholder="Start typing student name or PRN..."
            />
            {matches.length > 0 && !selectedStu && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--color-background-card)', border: '1px solid var(--color-border)', borderRadius: 4, zIndex: 50, boxShadow: 'var(--shadow-md)' }}>
                {matches.map(s => (
                  <div key={s.id} onClick={() => handleSelectStudent(s)} style={{ padding: '8px 12px', cursor: 'pointer', borderBottom: '1px solid var(--color-border-tertiary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{s.name}</span>
                    <span className="text-xs text-secondary">{s.prn} · {s.year} Year</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {selectedStu && (
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-tertiary)' }}>
              <h4 className="mb-3">Update Marks for <strong>{selectedStu.name}</strong> ({selectedStu.prn})</h4>
              <div className="grid-2">
                <div className="form-group"><label className="form-label">CIA 1 (max 35)</label><input type="number" max={35} value={marks.CIA1} onChange={e => setMarks({ ...marks, CIA1: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">CIA 2 (max 35)</label><input type="number" max={35} value={marks.CIA2} onChange={e => setMarks({ ...marks, CIA2: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Capstone (max 20)</label><input type="number" max={20} value={marks.capstone} onChange={e => setMarks({ ...marks, capstone: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Practicals (max 10)</label><input type="number" max={10} value={marks.practicals} onChange={e => setMarks({ ...marks, practicals: e.target.value })} /></div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">Current CGPA (out of 10.0)</label><input type="number" step="0.01" max={10} value={marks.CGPA} onChange={e => setMarks({ ...marks, CGPA: e.target.value })} /></div>
              </div>
              <button className="btn btn-success" onClick={handleSaveMarks} style={{ marginTop: '1rem' }}>
                <i className="ti ti-check" /> Save & Recalculate
              </button>
            </div>
          )}
        </div>
      )}

      {tab === 'csv' && (
        <div className="card">
          <div className="upload-zone" onClick={() => setShowSimulate(true)} style={{ cursor: 'pointer' }}>
            <div className="upload-zone-icon"><i className="ti ti-cloud-upload" /></div>
            <div>
              <p><strong>Click to simulated-upload marks spreadsheet</strong></p>
              <p className="text-xs text-muted mt-1">Accepts CSV, XLSX templates (CGPA, CIA1, CIA2, Capstone, Practicals)</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: '1rem' }}>
            <button className="btn btn-secondary btn-sm" onClick={() => addToast('Template downloaded successfully', 'success')}>
              <i className="ti ti-download" /> Download CSV Template
            </button>
          </div>

          {showSimulate && (
            <Modal title="CSV Import Preview (Simulated)" onClose={() => setShowSimulate(false)}>
              <p className="text-xs text-secondary mb-3">Below is a preview of parsed entries from the spreadsheet. Click Process to import.</p>
              <div className="table-wrapper mb-3">
                <table>
                  <thead>
                    <tr><th>PRN</th><th>NAME</th><th>CIA1</th><th>CIA2</th><th>CAP</th><th>PRAC</th><th>CGPA</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>2024001</td><td>Rohan Mehta</td><td>30/35</td><td>28/35</td><td>17/20</td><td>9/10</td><td>8.50</td></tr>
                    <tr><td>2024002</td><td>Vikram Kulkarni</td><td>30/35</td><td>28/35</td><td>17/20</td><td>9/10</td><td>8.50</td></tr>
                    <tr><td>2024003</td><td>Divya Pillai</td><td>30/35</td><td>28/35</td><td>17/20</td><td>9/10</td><td>8.50</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end gap-2">
                <button className="btn btn-secondary" onClick={() => setShowSimulate(false)}>Cancel</button>
                <button className="btn btn-success" onClick={triggerBulkProcess}>Process Import</button>
              </div>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 6 — Add User (Forms)
// ──────────────────────────────────────────────────────────────
function AddUser({ students, faculty, config, updateStudents, updateFaculty, logAdminAction, addToast }) {
  const [tab, setTab] = useState('student');
  const [stuForm, setStuForm] = useState({ name: '', prn: '', email: '', year: '1st', division: 'A', rollNo: '', admissionType: 'Regular', dob: '', assignedFacultyId: '', pass: '', passConfirm: '' });
  const [facForm, setFacForm] = useState({ name: '', empId: '', email: '', designation: 'Assistant Professor', subjects: '', pass: '', passConfirm: '' });
  const [errors, setErrors] = useState({});

  const validateStudent = () => {
    const e = {};
    if (!stuForm.name.trim()) e.name = 'Required';
    if (!stuForm.prn.trim()) e.prn = 'Required';
    if (!stuForm.email.trim()) e.email = 'Required';
    if (!stuForm.pass) e.pass = 'Required';
    if (stuForm.pass !== stuForm.passConfirm) e.passConfirm = 'Passwords must match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateFaculty = () => {
    const e = {};
    if (!facForm.name.trim()) e.name = 'Required';
    if (!facForm.empId.trim()) e.empId = 'Required';
    if (!facForm.email.trim()) e.email = 'Required';
    if (!facForm.pass) e.pass = 'Required';
    if (facForm.pass !== facForm.passConfirm) e.passConfirm = 'Passwords must match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!validateStudent()) return;

    const newStu = {
      id: 'STU_' + Date.now(),
      prn: stuForm.prn.trim(),
      name: stuForm.name.trim(),
      email: stuForm.email.trim(),
      phone: '98' + String(Math.floor(10000000 + Math.random() * 90000000)),
      year: stuForm.year,
      branch: 'Computer Engineering',
      division: stuForm.division,
      rollNo: stuForm.rollNo || 'CE' + Math.floor(100 + Math.random() * 900),
      admissionType: stuForm.admissionType,
      dob: stuForm.dob || '2004-01-01',
      assignedFacultyId: stuForm.assignedFacultyId || faculty[0]?.id || '',
      status: 'active',
      academics: { CIA1: { obtained: 0, maxMarks: 35 }, CIA2: { obtained: 0, maxMarks: 35 }, capstone: { obtained: 0, maxMarks: 20 }, practicals: { obtained: 0, maxMarks: 10 }, CGPA: 0, semester: 3, backlogs: 0 },
      certifications: [],
      internships: [],
      placements: [],
      hackathons: [],
      projects: [],
      sports: [],
      scoreHistory: [],
      notifications: [],
      score: 0,
      categoryScores: { academics: 0, internships: 0, placements: 0, hackathons: 0, projects: 0, certifications: 0, sports: 0 }
    };

    // Calculate initial score
    const initialScores = calculateScore(newStu, config.scoringConfig);
    newStu.score = initialScores.total;

    updateStudents([...students, newStu]);
    addToast('Student registered successfully', 'success');
    logAdminAction('Add Student', `PRN: ${newStu.prn}`, `Added student record for ${newStu.name}`);

    // reset
    setStuForm({ name: '', prn: '', email: '', year: '2nd', division: 'A', rollNo: '', admissionType: 'Regular', dob: '', assignedFacultyId: '', pass: '', passConfirm: '' });
    setErrors({});
  };

  const handleAddFaculty = (e) => {
    e.preventDefault();
    if (!validateFaculty()) return;

    const newFac = {
      id: 'FAC_' + Date.now(),
      empId: facForm.empId.trim(),
      name: facForm.name.trim(),
      email: facForm.email.trim(),
      phone: '98' + String(Math.floor(10000000 + Math.random() * 90000000)),
      designation: facForm.designation,
      subjects: facForm.subjects ? facForm.subjects.split(',').map(x => x.trim()) : [],
      status: 'active',
      notifications: []
    };

    updateFaculty([...faculty, newFac]);
    addToast('Faculty registered successfully', 'success');
    logAdminAction('Add Faculty', `Emp ID: ${newFac.empId}`, `Registered faculty ${newFac.name}`);

    setFacForm({ name: '', empId: '', email: '', designation: 'Assistant Professor', subjects: '', pass: '', passConfirm: '' });
    setErrors({});
  };

  return (
    <div>
      <h2 className="page-title">Register New User</h2>
      <Tabs tabs={[{ key: 'student', label: 'Add Student' }, { key: 'faculty', label: 'Add Faculty' }]} active={tab} onChange={setTab} />

      {tab === 'student' && (
        <div className="card">
          <form onSubmit={handleAddStudent}>
            <div className="grid-2">
              <div className="form-group"><label className="form-label">Full Name<span className="required">*</span></label><input value={stuForm.name} onChange={e => setStuForm({ ...stuForm, name: e.target.value })} className={errors.name ? 'error' : ''} />{errors.name && <div className="form-error">{errors.name}</div>}</div>
              <div className="form-group"><label className="form-label">PRN (Permanent Reg No)<span className="required">*</span></label><input value={stuForm.prn} onChange={e => setStuForm({ ...stuForm, prn: e.target.value })} className={errors.prn ? 'error' : ''} />{errors.prn && <div className="form-error">{errors.prn}</div>}</div>
              <div className="form-group"><label className="form-label">Email Address<span className="required">*</span></label><input type="email" value={stuForm.email} onChange={e => setStuForm({ ...stuForm, email: e.target.value })} className={errors.email ? 'error' : ''} />{errors.email && <div className="form-error">{errors.email}</div>}</div>
              <div className="form-group">
                <label className="form-label">Year</label>
                <select value={stuForm.year} onChange={e => setStuForm({ ...stuForm, year: e.target.value })}>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                  <option value="DSY">DSY</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Division</label>
                <select value={stuForm.division} onChange={e => setStuForm({ ...stuForm, division: e.target.value })}>
                  <option value="A">Div A</option>
                  <option value="B">Div B</option>
                </select>
              </div>
              <div className="form-group"><label className="form-label">Roll Number</label><input value={stuForm.rollNo} onChange={e => setStuForm({ ...stuForm, rollNo: e.target.value })} placeholder="e.g. CE201" /></div>
              <div className="form-group">
                <label className="form-label">Admission Type</label>
                <select value={stuForm.admissionType} onChange={e => setStuForm({ ...stuForm, admissionType: e.target.value })}>
                  <option value="Regular">Regular</option>
                  <option value="DSY">Direct Second Year (DSY)</option>
                </select>
              </div>
              <div className="form-group"><label className="form-label">Date of Birth</label><input type="date" value={stuForm.dob} onChange={e => setStuForm({ ...stuForm, dob: e.target.value })} /></div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Assign Advisor / Faculty Counselor</label>
                <select value={stuForm.assignedFacultyId} onChange={e => setStuForm({ ...stuForm, assignedFacultyId: e.target.value })}>
                  <option value="">Unassigned</option>
                  {faculty.map(f => <option key={f.id} value={f.id}>{f.name} ({f.empId})</option>)}
                </select>
              </div>
              <div className="form-group"><label className="form-label">Temporary Password<span className="required">*</span></label><input type="password" value={stuForm.pass} onChange={e => setStuForm({ ...stuForm, pass: e.target.value })} className={errors.pass ? 'error' : ''} />{errors.pass && <div className="form-error">{errors.pass}</div>}</div>
              <div className="form-group"><label className="form-label">Confirm Password<span className="required">*</span></label><input type="password" value={stuForm.passConfirm} onChange={e => setStuForm({ ...stuForm, passConfirm: e.target.value })} className={errors.passConfirm ? 'error' : ''} />{errors.passConfirm && <div className="form-error">{errors.passConfirm}</div>}</div>
            </div>
            <button type="submit" className="btn btn-primary mt-4" style={{ padding: '8px 16px' }}>
              <i className="ti ti-plus" /> Register Student
            </button>
          </form>
        </div>
      )}

      {tab === 'faculty' && (
        <div className="card">
          <form onSubmit={handleAddFaculty}>
            <div className="grid-2">
              <div className="form-group"><label className="form-label">Full Name<span className="required">*</span></label><input value={facForm.name} onChange={e => setFacForm({ ...facForm, name: e.target.value })} className={errors.name ? 'error' : ''} />{errors.name && <div className="form-error">{errors.name}</div>}</div>
              <div className="form-group"><label className="form-label">Employee ID<span className="required">*</span></label><input value={facForm.empId} onChange={e => setFacForm({ ...facForm, empId: e.target.value })} className={errors.empId ? 'error' : ''} placeholder="e.g. FAC120" />{errors.empId && <div className="form-error">{errors.empId}</div>}</div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">Email Address<span className="required">*</span></label><input type="email" value={facForm.email} onChange={e => setFacForm({ ...facForm, email: e.target.value })} className={errors.email ? 'error' : ''} />{errors.email && <div className="form-error">{errors.email}</div>}</div>
              <div className="form-group">
                <label className="form-label">Designation</label>
                <select value={facForm.designation} onChange={e => setFacForm({ ...facForm, designation: e.target.value })}>
                  <option value="Assistant Professor">Assistant Professor</option>
                  <option value="Associate Professor">Associate Professor</option>
                  <option value="Professor">Professor</option>
                  <option value="HOD">Head of Department (HOD)</option>
                </select>
              </div>
              <div className="form-group"><label className="form-label">Subjects (comma-separated)</label><input value={facForm.subjects} onChange={e => setFacForm({ ...facForm, subjects: e.target.value })} placeholder="e.g. Operating Systems, ML, DSA" /></div>
              <div className="form-group"><label className="form-label">Temporary Password<span className="required">*</span></label><input type="password" value={facForm.pass} onChange={e => setFacForm({ ...facForm, pass: e.target.value })} className={errors.pass ? 'error' : ''} />{errors.pass && <div className="form-error">{errors.pass}</div>}</div>
              <div className="form-group"><label className="form-label">Confirm Password<span className="required">*</span></label><input type="password" value={facForm.passConfirm} onChange={e => setFacForm({ ...facForm, passConfirm: e.target.value })} className={errors.passConfirm ? 'error' : ''} />{errors.passConfirm && <div className="form-error">{errors.passConfirm}</div>}</div>
            </div>
            <button type="submit" className="btn btn-primary mt-4" style={{ padding: '8px 16px' }}>
              <i className="ti ti-plus" /> Register Faculty Member
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 7 — Analytics
// ──────────────────────────────────────────────────────────────
function Analytics({ students, config }) {
  const [yearFilter, setYearFilter] = useState('All');

  const targetStudents = yearFilter === 'All' ? students : students.filter(s => s.year === yearFilter);

  // 1. Score Range Distribution (0-40, 41-60, 61-80, 81-100)
  let b1 = 0, b2 = 0, b3 = 0, b4 = 0;
  targetStudents.forEach(s => {
    if (s.score >= 81) b4++;
    else if (s.score >= 61) b3++;
    else if (s.score >= 41) b2++;
    else b1++;
  });

  const pieData = [
    { label: 'High Performers (81-100)', value: b4, color: '#3B6D11' },
    { label: 'Good standing (61-80)', value: b3, color: '#185FA5' },
    { label: 'Moderate (41-60)', value: b2, color: '#BA7517' },
    { label: 'Needs attention (0-40)', value: b1, color: '#A32D2D' }
  ];

  // 2. Category Radar averages
  const categories = ['academics', 'internships', 'placements', 'hackathons', 'projects', 'certifications', 'sports'];
  const labels = categories.map(c => c.charAt(0).toUpperCase() + c.slice(1));
  const values = categories.map(key => {
    const sum = targetStudents.reduce((acc, stu) => acc + (stu.categoryScores?.[key] || 0), 0);
    const avg = targetStudents.length > 0 ? sum / targetStudents.length : 0;
    const max = config.scoringConfig[key] || 10;
    return max ? avg / max : 0; // percentage fraction
  });

  // 3. Platform Breakdown (Top platforms for certifications)
  const platformCounts = {};
  targetStudents.forEach(s => {
    (s.certifications || []).forEach(c => {
      if (c.status === 'approved' && c.platform) {
        platformCounts[c.platform] = (platformCounts[c.platform] || 0) + 1;
      }
    });
  });

  const platformData = Object.entries(platformCounts)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="page-title" style={{ marginBottom: 0 }}>Department Analytics & Insights</h2>
        <select value={yearFilter} onChange={e => setYearFilter(e.target.value)} style={{ width: 'auto' }}>
          <option value="All">All Years</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
          <option value="DSY">DSY</option>
        </select>
      </div>

      <div className="grid-2">
        {/* Score Distribution (Pie) */}
        <div className="card">
          <div className="card-header"><span className="card-title">Score Ranges Distribution (Pie)</span></div>
          {targetStudents.length > 0 && (b1+b2+b3+b4) > 0 ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
              <PieChart data={pieData} size={150} />
            </div>
          ) : (
            <EmptyState icon="ti-pie-chart" heading="No data to render" />
          )}
        </div>

        {/* Category Radar Chart */}
        <div className="card">
          <div className="card-header"><span className="card-title">Category Average Performance Radar</span></div>
          {targetStudents.length > 0 ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem 0' }}>
              <RadarChart labels={labels} values={values} size={200} />
            </div>
          ) : (
            <EmptyState icon="ti-chart-bar" heading="No data to render" />
          )}
        </div>
      </div>

      <div className="grid-2 mt-4">
        {/* Certification Platforms */}
        <div className="card">
          <div className="card-header"><span className="card-title">Top 5 Certificate Platforms</span></div>
          {platformData.length > 0 ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
              <BarChart data={platformData} width={380} height={160} color="var(--purple)" />
            </div>
          ) : (
            <EmptyState icon="ti-certificate" heading="No approved certifications" />
          )}
        </div>

        {/* Analytics Insights */}
        <div className="card">
          <div className="card-header"><span className="card-title">Dean's Dashboard Insights</span></div>
          <div style={{ padding: '0.5rem 0' }}>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}><i className="ti ti-activity" /></div>
                <div className="timeline-body">
                  <div className="timeline-title">Strongest Academic Sector</div>
                  <div className="timeline-meta" style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
                    Avg Academic score is {Math.round(values[0] * 100)}% of the category ceiling.
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" style={{ background: 'var(--warning-light)', color: 'var(--warning)' }}><i className="ti ti-help" /></div>
                <div className="timeline-body">
                  <div className="timeline-title">Weakest Category Identified</div>
                  <div className="timeline-meta" style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
                    Placements & Internships averages are currently trailing targets by {Math.round((1 - Math.min(values[1], values[2])) * 100)}%.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 8 — Intervention Roster
// ──────────────────────────────────────────────────────────────
function InterventionRoster({ students, faculty, addToast }) {
  const atRisk = students
    .filter(s => s.score < 60)
    .sort((a, b) => a.score - b.score);

  const triggerCounseling = (stu) => {
    addToast(`Counseling schedule request sent for ${stu.name}`, 'success');
  };

  const triggerNotifyFaculty = (stu) => {
    const fac = faculty.find(f => f.id === stu.assignedFacultyId);
    if (fac) {
      if (!fac.notifications) fac.notifications = [];
      fac.notifications.push({
        id: genId(),
        message: `Action Required: At-risk student ${stu.name} (PRN: ${stu.prn}) is assigned to you. Current score is ${stu.score}.`,
        timestamp: new Date().toISOString(),
        read: false
      });
      addToast(`Notification dispatched to advisor ${fac.name}`, 'success');
    } else {
      addToast('No advisor assigned to this student', 'warning');
    }
  };

  return (
    <div>
      <h2 className="page-title">Intervention & Counselling Roster</h2>

      <div className="card mb-4" style={{ background: 'var(--danger-light)', border: '1px solid rgba(239, 68, 68, 0.15)' }}>
        <div className="flex items-center gap-3">
          <i className="ti ti-shield-alert" style={{ fontSize: 24, color: 'var(--danger)' }} />
          <p className="text-sm" style={{ margin: 0, color: 'var(--danger)' }}>
            This list represents students performing critically below target scoring levels. Advisors can trigger administrative reminders or request academic counseling blocks.
          </p>
        </div>
      </div>

      <div className="card">
        {atRisk.length === 0 ? (
          <EmptyState icon="ti-checkbox" heading="No critical interventions" text="All student portfolios score above 60." />
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>RANK</th><th>NAME</th><th>PRN</th><th>YEAR</th><th>SCORE</th><th>FACULTY COUNSELOR</th><th>INTERACTION</th>
                </tr>
              </thead>
              <tbody>
                {atRisk.map((s, idx) => {
                  const fac = faculty.find(f => f.id === s.assignedFacultyId);
                  return (
                    <tr key={s.id}>
                      <td>#{idx + 1}</td>
                      <td className="font-medium">{s.name}</td>
                      <td>{s.prn}</td>
                      <td>{s.year} Year</td>
                      <td><strong style={{ color: getScoreColor(s.score) }}>{s.score}</strong></td>
                      <td>{fac ? fac.name : <span className="badge badge-gray">Unassigned</span>}</td>
                      <td>
                        <div className="flex gap-1">
                          <button className="btn btn-secondary btn-xs" onClick={() => triggerNotifyFaculty(s)}>Notify Advisor</button>
                          <button className="btn btn-primary btn-xs" onClick={() => triggerCounseling(s)}>Schedule Counseling</button>
                        </div>
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
// PAGE 9 — Audit Log
// ──────────────────────────────────────────────────────────────
function AuditLogTab({ auditLog }) {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  let filtered = auditLog.filter(log => {
    return log.action.toLowerCase().includes(search.toLowerCase()) || log.target.toLowerCase().includes(search.toLowerCase());
  });

  const total = filtered.length;
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div>
      <h2 className="page-title">Administrative System Audit Log</h2>

      <div className="filter-bar mb-3">
        <div style={{ flex: 1 }}>
          <SearchInput value={search} onChange={setSearch} placeholder="Filter logs by action, student target..." />
        </div>
      </div>

      <div className="card">
        {paginated.length === 0 ? (
          <EmptyState icon="ti-search" heading="No audit records match filters" />
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>TIMESTAMP</th><th>ACTION</th><th>ADMINISTRATOR</th><th>TARGET</th><th>DETAILS</th><th>IP</th></tr>
              </thead>
              <tbody>
                {paginated.map((log, idx) => (
                  <tr key={idx}>
                    <td className="cell-muted text-xs">{formatDateTime(log.timestamp)}</td>
                    <td className="font-semibold">{log.action}</td>
                    <td className="text-xs">{log.admin}</td>
                    <td className="cell-muted text-xs">{log.target}</td>
                    <td className="text-xs">{log.details}</td>
                    <td className="cell-muted text-xs">{log.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Pagination total={total} page={currentPage} perPage={perPage} onChange={setCurrentPage} />
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 10 — Notifications (Dispatch)
// ──────────────────────────────────────────────────────────────
function AdminNotifications({
  admin, students, faculty, addToast, logAdminAction,
  updateStudents, updateFaculty
}) {
  const [tab, setTab] = useState('received');
  const [targetType, setTargetType] = useState('all'); // 'all', 'students', 'faculty', 'year_3rd' etc
  const [notifType, setNotifType] = useState('Info'); // 'Info', 'Warning', 'Announcement'
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSendNotification = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      addToast('Message content cannot be blank', 'warning');
      return;
    }

    const payload = {
      id: genId(),
      message: `${notifType.toUpperCase()}: ${title ? title + ' — ' : ''}${message}`,
      timestamp: new Date().toISOString(),
      read: false
    };

    if (targetType === 'all' || targetType === 'students') {
      const updated = students.map(s => ({
        ...s,
        notifications: [payload, ...(s.notifications || [])]
      }));
      updateStudents(updated);
    }
    if (targetType === 'all' || targetType === 'faculty') {
      const updated = faculty.map(f => ({
        ...f,
        notifications: [payload, ...(f.notifications || [])]
      }));
      updateFaculty(updated);
    }

    addToast('Broadcast message dispatched successfully', 'success');
    logAdminAction('Broadcast Notification', `Target: ${targetType}`, `Dispatched: ${payload.message}`);
    
    setTitle('');
    setMessage('');
  };

  return (
    <div>
      <h2 className="page-title">Communications Desk</h2>
      <Tabs tabs={[{ key: 'received', label: 'Admin Notifications Box' }, { key: 'send', label: 'Broadcast Notification' }]} active={tab} onChange={setTab} />

      {tab === 'received' && (
        <div className="card">
          <EmptyState icon="ti-bell-off" heading="No administrative system alerts" text="System status reports normal." />
        </div>
      )}

      {tab === 'send' && (
        <div className="card">
          <form onSubmit={handleSendNotification}>
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Send Broadcast To</label>
                <select value={targetType} onChange={e => setTargetType(e.target.value)}>
                  <option value="all">All Student & Faculty Accounts</option>
                  <option value="students">All Registered Students Only</option>
                  <option value="faculty">All Registered Faculty Advisors Only</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Alert Level</label>
                <select value={notifType} onChange={e => setNotifType(e.target.value)}>
                  <option value="Info">Info Announcement</option>
                  <option value="Warning">Warning / System Alert</option>
                  <option value="Reminder">Scoring Deadline Reminder</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject / Title</label>
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. CIA 2 Score Lock Date" />
            </div>

            <div className="form-group">
              <label className="form-label">Broadcast Message Content<span className="required">*</span></label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Enter details for the broadcast announcement..." rows={4} />
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
              <i className="ti ti-mail-forward" /> Dispatch Broadcast
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 11 — Settings
// ──────────────────────────────────────────────────────────────
function DepartmentSettings({ config, updateConfig, logAdminAction, addToast }) {
  const [tab, setTab] = useState('general');
  
  // Scopes local editing states
  const [weights, setWeights] = useState({ ...config.scoringConfig });
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const sumWeights = Object.values(weights).reduce((s, w) => s + Number(w), 0);

  const handleSaveWeights = () => {
    if (sumWeights !== 100) {
      addToast('Weights must sum exactly to 100', 'error');
      return;
    }

    const updatedConfig = {
      ...config,
      scoringConfig: {
        academics: Number(weights.academics),
        internships: Number(weights.internships),
        placements: Number(weights.placements),
        hackathons: Number(weights.hackathons),
        projects: Number(weights.projects),
        certifications: Number(weights.certifications),
        sports: Number(weights.sports)
      }
    };

    updateConfig(updatedConfig);
    addToast('Scoring configuration weights saved', 'success');
    logAdminAction('Modify Settings (Weights)', 'Department Configuration', `Weights: ${JSON.stringify(weights)}`);
  };

  const handleResetWeights = () => {
    const defaults = { academics: 35, internships: 20, placements: 15, hackathons: 10, projects: 10, certifications: 5, sports: 5 };
    setWeights(defaults);
    setShowResetConfirm(false);
    addToast('Weights reset to system defaults', 'info');
  };

  return (
    <div>
      <h2 className="page-title">Department Settings & Scoring Configuration</h2>
      <Tabs tabs={[{ key: 'general', label: 'General Info' }, { key: 'scoring', label: 'Scoring Engine Configuration' }]} active={tab} onChange={setTab} />

      {tab === 'general' && (
        <div className="card">
          <div className="info-grid">
            <div className="info-item"><div className="info-label">College Affiliation</div><div className="info-value">{config.college}</div></div>
            <div className="info-item"><div className="info-label">Department Registry</div><div className="info-value">{config.name}</div></div>
            <div className="info-item"><div className="info-label">Current Academic Year</div><div className="info-value">{config.academicYear}</div></div>
            <div className="info-item"><div className="info-label">Current Target Semester</div><div className="info-value">Semester {config.currentSemester}</div></div>
          </div>
          <div className="divider" style={{ margin: '1.5rem 0' }} />
          <h4 className="mb-2">System Integrations</h4>
          <div className="grid-2">
            <div className="flex justify-between items-center p-3" style={{ border: '1px solid var(--color-border)', borderRadius: 6 }}>
              <div>
                <strong className="text-sm block">Google Identity Suite SSO</strong>
                <span className="text-xs text-secondary">Allow accounts login via college Google domain.</span>
              </div>
              <ToggleSwitch checked={true} onChange={() => {}} />
            </div>
            <div className="flex justify-between items-center p-3" style={{ border: '1px solid var(--color-border)', borderRadius: 6 }}>
              <div>
                <strong className="text-sm block">Academic CRM Auto-Import Sync</strong>
                <span className="text-xs text-secondary">Hourly synchronization with university internal ledger.</span>
              </div>
              <ToggleSwitch checked={false} onChange={() => {}} />
            </div>
          </div>
        </div>
      )}

      {tab === 'scoring' && (
        <div className="card">
          <div className="section-title mb-3">Modify Scoring Category Weights (Must sum to 100)</div>
          <div className="grid-2">
            {Object.keys(weights).map(cat => (
              <div key={cat} className="form-group">
                <label className="form-label">{cat.charAt(0).toUpperCase() + cat.slice(1)} Weight (%)</label>
                <input
                  type="number"
                  value={weights[cat]}
                  onChange={e => setWeights({ ...weights, [cat]: e.target.value })}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4 pt-3" style={{ borderTop: '1px solid var(--color-border-tertiary)' }}>
            <div>
              <span className="text-sm">Current Sum: </span>
              <strong style={{ color: sumWeights === 100 ? 'var(--success)' : 'var(--danger)' }}>{sumWeights} %</strong>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-secondary" onClick={() => setShowResetConfirm(true)}>Reset defaults</button>
              <button className="btn btn-success" onClick={handleSaveWeights}>Save Configuration</button>
            </div>
          </div>

          {showResetConfirm && (
            <ConfirmModal
              title="Reset Scoring Weights"
              message="Are you sure you want to restore all configuration category weights back to defaults? The global score values will update on next approval trigger."
              confirmLabel="Reset"
              onConfirm={handleResetWeights}
              onCancel={() => setShowResetConfirm(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 12 — Admin Profile
// ──────────────────────────────────────────────────────────────
function AdminProfile({ admin, addToast }) {
  const [pass, setPass] = useState({ old: '', new: '', confirm: '' });

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (!pass.old || !pass.new) {
      addToast('Please input password details', 'warning');
      return;
    }
    if (pass.new !== pass.confirm) {
      addToast('New password confirmation mismatch', 'warning');
      return;
    }
    addToast('Admin security credentials updated', 'success');
    setPass({ old: '', new: '', confirm: '' });
  };

  return (
    <div>
      <h2 className="page-title">Administrative Credentials Shell</h2>

      <div className="grid-2">
        <div className="card">
          <div className="card-header"><span className="card-title">Profile Information</span></div>
          <div className="info-grid">
            <div className="info-item"><div className="info-label">Administrator Account</div><div className="info-value">{admin.name || 'System HOD Admin'}</div></div>
            <div className="info-item"><div className="info-label">Registry Email</div><div className="info-value">{admin.email || 'admin@comp.xyz.edu'}</div></div>
            <div className="info-item"><div className="info-label">Designation Scope</div><div className="info-value">Head of Department (HOD) / Registrar</div></div>
            <div className="info-item"><div className="info-label">Active Directory Domain</div><div className="info-value">xyz.edu</div></div>
          </div>
        </div>

        <div className="card">
          <div className="card-header"><span className="card-title">Change Account Password</span></div>
          <form onSubmit={handleUpdatePassword}>
            <div className="form-group"><label className="form-label">Current Password</label><input type="password" value={pass.old} onChange={e => setPass({ ...pass, old: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">New Password</label><input type="password" value={pass.new} onChange={e => setPass({ ...pass, new: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">Confirm New Password</label><input type="password" value={pass.confirm} onChange={e => setPass({ ...pass, confirm: e.target.value })} /></div>
            <button type="submit" className="btn btn-primary mt-2">Update Credentials</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// STUDENT MODAL (ADMIN WRITER/EDITOR)
// ──────────────────────────────────────────────────────────────
function AdminStudentModal({
  student, students, faculty, config, editing, setEditing, onClose,
  updateStudents, logAdminAction, addToast
}) {
  const [tab, setTab] = useState('overview');
  const [form, setForm] = useState({ ...student });
  const [marks, setMarks] = useState({
    CIA1: student.academics?.CIA1?.obtained ?? '',
    CIA2: student.academics?.CIA2?.obtained ?? '',
    capstone: student.academics?.capstone?.obtained ?? '',
    practicals: student.academics?.practicals?.obtained ?? '',
    CGPA: student.academics?.CGPA ?? ''
  });

  const yearRank = getRankInYear(student, students);
  const deptRank = getDepartmentRank(student, students);

  const handleSaveProfile = () => {
    const updated = students.map(s => {
      if (s.id !== student.id) return s;
      return {
        ...s,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        dob: form.dob,
        assignedFacultyId: form.assignedFacultyId,
        division: form.division,
        year: form.year
      };
    });
    updateStudents(updated);
    setEditing(false);
    addToast('Student profile details saved', 'success');
    logAdminAction('Edit Student Profile', `PRN: ${student.prn}`, `Updated demographics for ${student.name}`);
  };

  const handleUpdateMarks = () => {
    const marksObj = {
      CIA1: { obtained: Number(marks.CIA1), maxMarks: 35 },
      CIA2: { obtained: Number(marks.CIA2), maxMarks: 35 },
      capstone: { obtained: Number(marks.capstone), maxMarks: 20 },
      practicals: { obtained: Number(marks.practicals), maxMarks: 10 },
      CGPA: Number(marks.CGPA)
    };

    const updated = students.map(s => {
      if (s.id !== student.id) return s;
      const clone = JSON.parse(JSON.stringify(s));
      recalculateOnMarksUpload(clone, marksObj, config.scoringConfig);
      return clone;
    });

    updateStudents(updated);
    addToast('Internal academic score recalculated', 'success');
    logAdminAction('Upload Marks (Modal)', `PRN: ${student.prn}`, `Modified academic marks ledger for ${student.name}`);
  };

  const handleDeactivate = () => {
    const updated = students.map(s => {
      if (s.id !== student.id) return s;
      return { ...s, status: s.status === 'active' ? 'inactive' : 'active' };
    });
    updateStudents(updated);
    addToast(`Student account status set to ${student.status === 'active' ? 'Inactive' : 'Active'}`, 'info');
    logAdminAction('Toggle Student Status', `PRN: ${student.prn}`, `Changed status of ${student.name} to ${student.status === 'active' ? 'inactive' : 'active'}`);
    onClose();
  };

  return (
    <Modal title={`${editing ? 'Edit' : 'View'} Student File — ${student.name}`} onClose={onClose} size="lg">
      <div className="flex items-center gap-4 mb-3" style={{ flexWrap: 'wrap' }}>
        <Avatar name={student.name} size="lg" />
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: 16 }}>{student.name}</h3>
          <span className="text-xs text-secondary">PRN: {student.prn} | Division: {student.division} · Year: {student.year}</span>
        </div>
        {!editing && (
          <div className="flex gap-1">
            <button className="btn btn-secondary btn-sm" onClick={() => setEditing(true)}><i className="ti ti-edit" /> Edit Profile</button>
            <button className={`btn btn-${student.status === 'active' ? 'danger' : 'success'} btn-sm`} onClick={handleDeactivate}>
              {student.status === 'active' ? 'Deactivate' : 'Activate'}
            </button>
          </div>
        )}
      </div>

      <Tabs tabs={[{ key: 'overview', label: 'Overview' }, { key: 'academics', label: 'Upload Academics' }, { key: 'certs', label: 'Certifications' }]} active={tab} onChange={setTab} />

      <div style={{ marginTop: '1rem', minHeight: 250 }}>
        {tab === 'overview' && (
          <div>
            {editing ? (
              <div className="grid-2">
                <div className="form-group"><label className="form-label">Full Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Email Address</label><input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Phone</label><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Date of Birth</label><input type="date" value={form.dob} onChange={e => setForm({ ...form, dob: e.target.value })} /></div>
                <div className="form-group">
                  <label className="form-label">Year</label>
                  <select value={form.year} onChange={e => setForm({ ...form, year: e.target.value })}>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                    <option value="DSY">DSY</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Division</label>
                  <select value={form.division} onChange={e => setForm({ ...form, division: e.target.value })}>
                    <option value="A">Div A</option>
                    <option value="B">Div B</option>
                  </select>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Assigned Advisor</label>
                  <select value={form.assignedFacultyId} onChange={e => setForm({ ...form, assignedFacultyId: e.target.value })}>
                    <option value="">Unassigned</option>
                    {faculty.map(f => <option key={f.id} value={f.id}>{f.name} ({f.empId})</option>)}
                  </select>
                </div>
                <div className="flex gap-2 mt-4" style={{ gridColumn: '1 / -1', justifyContent: 'flex-end' }}>
                  <button className="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
                  <button className="btn btn-success" onClick={handleSaveProfile}><i className="ti ti-check" /> Save Changes</button>
                </div>
              </div>
            ) : (
              <div className="grid-2">
                <div className="card">
                  <div className="card-header"><span className="card-title">Global Portfolio Metrics</span></div>
                  <div className="flex items-center justify-around" style={{ padding: '1rem 0' }}>
                    <ScoreRing score={student.score} size={110} strokeWidth={8} />
                    <div className="text-sm">
                      <div>Year Rank: <strong>#{yearRank}</strong></div>
                      <div>Dept Rank: <strong>#{deptRank}</strong></div>
                      <div>Certs Count: <strong>{(student.certifications || []).length}</strong></div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header"><span className="card-title">Registration Details</span></div>
                  <div className="info-grid">
                    <div className="info-item"><div className="info-label">Email</div><div className="info-value">{student.email}</div></div>
                    <div className="info-item"><div className="info-label">Phone</div><div className="info-value">{student.phone}</div></div>
                    <div className="info-item"><div className="info-label">Roll Number</div><div className="info-value">{student.rollNo}</div></div>
                    <div className="info-item"><div className="info-label">Admission Type</div><div className="info-value">{student.admissionType}</div></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === 'academics' && (
          <div className="card">
            <h4 className="mb-3">Recalculate Academic Component Score</h4>
            <div className="grid-2">
              <div className="form-group"><label className="form-label">CIA 1 Mark (obtained/35)</label><input type="number" value={marks.CIA1} onChange={e => setMarks({ ...marks, CIA1: e.target.value })} /></div>
              <div className="form-group"><label className="form-label">CIA 2 Mark (obtained/35)</label><input type="number" value={marks.CIA2} onChange={e => setMarks({ ...marks, CIA2: e.target.value })} /></div>
              <div className="form-group"><label className="form-label">Capstone project (obtained/20)</label><input type="number" value={marks.capstone} onChange={e => setMarks({ ...marks, capstone: e.target.value })} /></div>
              <div className="form-group"><label className="form-label">Practicals/Orals (obtained/10)</label><input type="number" value={marks.practicals} onChange={e => setMarks({ ...marks, practicals: e.target.value })} /></div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">Cumulative GPA (CGPA)</label><input type="number" step="0.01" value={marks.CGPA} onChange={e => setMarks({ ...marks, CGPA: e.target.value })} /></div>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleUpdateMarks}>
              <i className="ti ti-check" /> Recalculate Scoring
            </button>
          </div>
        )}

        {tab === 'certs' && (
          <div className="card">
            {(!student.certifications || student.certifications.length === 0) ? (
              <EmptyState icon="ti-certificate" heading="No certificate logs found" />
            ) : (
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr><th>NAME</th><th>TYPE</th><th>DATE</th><th>STATUS</th></tr>
                  </thead>
                  <tbody>
                    {student.certifications.map(c => (
                      <tr key={c.id}>
                        <td className="font-medium">{c.name}</td>
                        <td><span className={`badge ${c.type === 'technical' ? 'badge-primary' : 'badge-purple'}`}>{c.type}</span></td>
                        <td className="cell-muted">{formatDate(c.completionDate)}</td>
                        <td><StatusBadge status={c.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}

// ──────────────────────────────────────────────────────────────
// FACULTY MODAL (ADMIN VIEWER/EDITOR)
// ──────────────────────────────────────────────────────────────
function AdminFacultyModal({
  facultyItem, students, faculty, editing, setEditing, onClose,
  updateFaculty, logAdminAction, addToast
}) {
  const [form, setForm] = useState({ ...facultyItem, subjects: facultyItem.subjects?.join(', ') || '' });

  const assignedStudentsList = students.filter(s => s.assignedFacultyId === facultyItem.id);

  const handleSaveFaculty = () => {
    const updated = faculty.map(f => {
      if (f.id !== facultyItem.id) return f;
      return {
        ...f,
        name: form.name.trim(),
        email: form.email.trim(),
        designation: form.designation,
        subjects: form.subjects ? form.subjects.split(',').map(s => s.trim()) : []
      };
    });
    updateFaculty(updated);
    setEditing(false);
    addToast('Faculty profile saved', 'success');
    logAdminAction('Edit Faculty Info', `ID: ${facultyItem.empId}`, `Updated info for advisor ${facultyItem.name}`);
  };

  const handleToggleFacultyStatus = () => {
    const updated = faculty.map(f => {
      if (f.id !== facultyItem.id) return f;
      return { ...f, status: f.status === 'active' ? 'inactive' : 'active' };
    });
    updateFaculty(updated);
    addToast(`Faculty advisor status set to ${facultyItem.status === 'active' ? 'Inactive' : 'Active'}`, 'info');
    logAdminAction('Toggle Faculty Status', `ID: ${facultyItem.empId}`, `Set ${facultyItem.name} to ${facultyItem.status === 'active' ? 'inactive' : 'active'}`);
    onClose();
  };

  return (
    <Modal title={`${editing ? 'Edit' : 'View'} Advisor Registry — ${facultyItem.name}`} onClose={onClose} size="md">
      <div className="flex items-center gap-3 mb-4">
        <Avatar name={facultyItem.name} role="faculty" size="lg" />
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: 16 }}>{facultyItem.name}</h3>
          <span className="text-xs text-secondary">ID: {facultyItem.empId} | Assigned Students: <strong>{assignedStudentsList.length}</strong></span>
        </div>
        {!editing && (
          <div className="flex gap-1">
            <button className="btn btn-secondary btn-sm" onClick={() => setEditing(true)}><i className="ti ti-edit" /> Edit</button>
            <button className={`btn btn-${facultyItem.status === 'active' ? 'danger' : 'success'} btn-sm`} onClick={handleToggleFacultyStatus}>
              {facultyItem.status === 'active' ? 'Deactivate' : 'Activate'}
            </button>
          </div>
        )}
      </div>

      <div style={{ minHeight: 200 }}>
        {editing ? (
          <div>
            <div className="form-group"><label className="form-label">Full Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">Email address</label><input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
            <div className="form-group">
              <label className="form-label">Designation</label>
              <select value={form.designation} onChange={e => setForm({ ...form, designation: e.target.value })}>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Professor">Professor</option>
                <option value="HOD">Head of Department (HOD)</option>
              </select>
            </div>
            <div className="form-group"><label className="form-label">Subjects (comma-separated)</label><input value={form.subjects} onChange={e => setForm({ ...form, subjects: e.target.value })} /></div>
            <div className="flex gap-2 mt-4 justify-end">
              <button className="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
              <button className="btn btn-success" onClick={handleSaveFaculty}><i className="ti ti-check" /> Save</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="info-grid">
              <div className="info-item"><div className="info-label">Email</div><div className="info-value">{facultyItem.email}</div></div>
              <div className="info-item"><div className="info-label">Designation</div><div className="info-value">{facultyItem.designation}</div></div>
              <div className="info-item" style={{ gridColumn: '1 / -1' }}>
                <div className="info-label">Assigned Students</div>
                <div className="table-wrapper mt-2">
                  <table style={{ fontSize: 11 }}>
                    <thead><tr><th>PRN</th><th>NAME</th><th>YEAR</th><th>SCORE</th></tr></thead>
                    <tbody>
                      {assignedStudentsList.map(s => (
                        <tr key={s.id}>
                          <td>{s.prn}</td><td>{s.name}</td><td>{s.year}</td><td>{s.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
