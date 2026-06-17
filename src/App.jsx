// ============================================================
// CertTrack Pro — Main App Shell
// Login, Sidebar, Topbar, Routing, Global State
// ============================================================
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { initialStudents, initialFaculty, adminUser, departmentConfig, initialAuditLog, genId } from './data';
import { initializeAllScores, getInitials, getRankInYear, getDepartmentRank } from './scoreEngine';
import { Avatar, ToastContainer } from './components/SharedComponents';
import StudentPanel from './components/StudentPanel';
import FacultyPanel from './components/FacultyPanel';
import AdminPanel from './components/AdminPanel';

// Initialize scores on boot
const bootStudents = JSON.parse(JSON.stringify(initialStudents));
initializeAllScores(bootStudents, departmentConfig.scoringConfig);

export default function App() {
  // ---- Auth State ----
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRole, setCurrentRole] = useState('student');
  const [currentUser, setCurrentUser] = useState(null);

  // ---- UI State ----
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  // ---- Data State ----
  const [students, setStudents] = useState(bootStudents);
  const [faculty, setFaculty] = useState(JSON.parse(JSON.stringify(initialFaculty)));
  const [config, setConfig] = useState(JSON.parse(JSON.stringify(departmentConfig)));
  const [auditLog, setAuditLog] = useState(JSON.parse(JSON.stringify(initialAuditLog)));
  const [adminData, setAdminData] = useState(JSON.parse(JSON.stringify(adminUser)));

  // ---- Toast State ----
  const [toasts, setToasts] = useState([]);
  const toastTimers = useRef({});

  // ---- Login Form ----
  const [loginRole, setLoginRole] = useState('student');
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // ---- Dark mode effect ----
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // ---- Toast functions ----
  const addToast = useCallback((message, type = 'success') => {
    const id = 'toast_' + Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    const timer = setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
    toastTimers.current[id] = timer;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
    if (toastTimers.current[id]) clearTimeout(toastTimers.current[id]);
  }, []);

  // ---- Login handler ----
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    if (!loginId.trim()) { setLoginError('Please enter your credentials'); return; }
    if (!loginPassword.trim()) { setLoginError('Please enter your password'); return; }

    if (loginRole === 'student') {
      const emailInput = loginId.trim().toLowerCase();
      const passwordInput = loginPassword.trim();
      const stu = students.find(s => s.email.toLowerCase() === emailInput);
      if (!stu) { setLoginError('Student email not found'); return; }
      if (stu.prn !== passwordInput) { setLoginError('Incorrect password (must be your PRN)'); return; }
      setCurrentUser(stu);
      setCurrentRole('student');
    } else if (loginRole === 'faculty') {
      const fac = faculty.find(f => f.empId === loginId.trim());
      if (!fac) { setLoginError('Faculty ID not found'); return; }
      setCurrentUser(fac);
      setCurrentRole('faculty');
    } else {
      if (loginId.trim() !== 'admin@dept') { setLoginError('Invalid admin credentials'); return; }
      setCurrentUser(adminData);
      setCurrentRole('admin');
    }
    setIsLoggedIn(true);
    setActivePage('dashboard');
    addToast('Welcome back!', 'success');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setActivePage('dashboard');
    setLoginId('');
    setLoginPassword('');
    setLoginError('');
  };

  // ---- Update handlers ----
  const updateStudents = useCallback((newStudents) => {
    setStudents(newStudents);
    // If current user is a student, update their ref too
    if (currentRole === 'student' && currentUser) {
      const updated = newStudents.find(s => s.id === currentUser.id);
      if (updated) setCurrentUser(updated);
    }
  }, [currentRole, currentUser]);

  const updateFaculty = useCallback((newFaculty) => {
    setFaculty(newFaculty);
    if (currentRole === 'faculty' && currentUser) {
      const updated = newFaculty.find(f => f.id === currentUser.id);
      if (updated) setCurrentUser(updated);
    }
  }, [currentRole, currentUser]);

  const updateAuditLog = useCallback((newLog) => {
    setAuditLog(newLog);
  }, []);

  const updateConfig = useCallback((newConfig) => {
    setConfig(newConfig);
  }, []);

  // ---- Notification count ----
  const getUnreadCount = () => {
    if (!currentUser) return 0;
    const notifs = currentUser.notifications || [];
    return notifs.filter(n => !n.read).length;
  };

  // ---- Sidebar nav config ----
  const getNavItems = () => {
    if (currentRole === 'student') {
      return [
        { key: 'dashboard', icon: 'ti-layout-dashboard', label: 'Dashboard' },
        { key: 'profile', icon: 'ti-user', label: 'My profile' },
        { key: 'upload-cert', icon: 'ti-upload', label: 'Upload certificate' },
        { key: 'my-certificates', icon: 'ti-certificate', label: 'My certificates' },
        { key: 'achievements', icon: 'ti-award', label: 'Achievements' },
        { key: 'submission-tracker', icon: 'ti-list-check', label: 'Submission tracker' },
        { key: 'leaderboard', icon: 'ti-chart-bar', label: 'Leaderboard' },
        { key: 'notifications', icon: 'ti-bell', label: 'Notifications', badge: getUnreadCount() },
        { key: 'score-breakdown', icon: 'ti-chart-pie', label: 'Score breakdown' },
        { key: 'settings', icon: 'ti-settings', label: 'Settings' },
      ];
    }
    if (currentRole === 'faculty') {
      return [
        { key: 'dashboard', icon: 'ti-layout-dashboard', label: 'Dashboard' },
        { key: 'student-list', icon: 'ti-users', label: 'Students' },
        { key: 'reports', icon: 'ti-report', label: 'Reports' },
        { key: 'intervention', icon: 'ti-alert-circle', label: 'Intervention' },
        { key: 'my-profile', icon: 'ti-user', label: 'My profile' },
        { key: 'notifications', icon: 'ti-bell', label: 'Notifications', badge: getUnreadCount() },
      ];
    }
    // admin
    return [
      { key: 'dashboard', icon: 'ti-layout-dashboard', label: 'Dashboard' },
      { key: 'approvals', icon: 'ti-checkbox', label: 'Approvals', badge: students.reduce((c, s) => c + s.certifications.filter(cert => cert.status === 'pending').length, 0) },
      { key: 'students', icon: 'ti-users', label: 'Students' },
      { key: 'faculty-mgmt', icon: 'ti-chalkboard', label: 'Faculty' },
      { key: 'marks-upload', icon: 'ti-file-upload', label: 'Marks upload' },
      { key: 'add-user', icon: 'ti-user-plus', label: 'Add user' },
      { key: 'analytics', icon: 'ti-chart-dots', label: 'Analytics' },
      { key: 'intervention', icon: 'ti-alert-circle', label: 'Intervention' },
      { key: 'audit-log', icon: 'ti-list-details', label: 'Audit log' },
      { key: 'notifications', icon: 'ti-bell', label: 'Notifications', badge: getUnreadCount() },
      { key: 'settings', icon: 'ti-settings', label: 'Settings' },
      { key: 'my-profile', icon: 'ti-user', label: 'My profile' },
    ];
  };

  // ---- Breadcrumb ----
  const getBreadcrumb = () => {
    const pageNames = {
      'dashboard': 'Dashboard', 'profile': 'My profile', 'upload-cert': 'Upload certificate',
      'my-certificates': 'My certificates', 'achievements': 'Achievements', 'submission-tracker': 'Submission tracker',
      'leaderboard': 'Leaderboard', 'notifications': 'Notifications', 'score-breakdown': 'Score breakdown',
      'settings': 'Settings', 'student-list': 'Students', 'reports': 'Reports', 'intervention': 'Intervention',
      'my-profile': 'My profile', 'approvals': 'Approvals', 'students': 'Students', 'faculty-mgmt': 'Faculty',
      'marks-upload': 'Marks upload', 'add-user': 'Add user', 'analytics': 'Analytics', 'audit-log': 'Audit log',
    };
    return pageNames[activePage] || 'Dashboard';
  };

  // ================= RENDER =================

  // ---- Login Screen ----
  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <i className="ti ti-certificate login-logo-icon" />
            <h1>CertTrack Pro</h1>
            <p>XYZ College of Engineering</p>
          </div>

          {/* Role Cards */}
          <div className="role-cards">
            {[
              { key: 'student', icon: 'ti-school', label: 'Student' },
              { key: 'faculty', icon: 'ti-chalkboard', label: 'Faculty' },
              { key: 'admin', icon: 'ti-shield-check', label: 'Admin' }
            ].map(r => (
              <div key={r.key} className={`role-card ${loginRole === r.key ? 'selected' : ''}`}
                onClick={() => { setLoginRole(r.key); setLoginId(''); setLoginError(''); }}>
                <i className={`ti ${r.icon}`} />
                <div className="role-card-label">{r.label}</div>
              </div>
            ))}
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">
                {loginRole === 'student' ? 'Email Address' : loginRole === 'faculty' ? 'Employee ID' : 'Username'}
              </label>
              <div className="input-with-icon">
                <i className="ti ti-id input-icon" />
                <input type="text" value={loginId} onChange={e => { setLoginId(e.target.value); setLoginError(''); }}
                  placeholder={loginRole === 'student' ? 'Enter your email' : loginRole === 'faculty' ? 'Enter Employee ID' : 'Enter username'} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-with-icon">
                <i className="ti ti-lock input-icon" />
                <input type={showPassword ? 'text' : 'password'} value={loginPassword}
                  onChange={e => { setLoginPassword(e.target.value); setLoginError(''); }} placeholder="Enter your password" />
                <button type="button" className="input-suffix-btn" onClick={() => setShowPassword(!showPassword)}>
                  <i className={`ti ${showPassword ? 'ti-eye-off' : 'ti-eye'}`} />
                </button>
              </div>
            </div>

            {loginError && <div className="form-error" style={{ marginBottom: 12 }}>{loginError}</div>}

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '10px', fontSize: 14, marginTop: 4 }}>
              <i className="ti ti-login" /> Sign in
            </button>

            <div style={{ textAlign: 'center', marginTop: 12 }}>
              <button type="button" className="btn btn-ghost btn-sm"
                onClick={() => addToast('Contact your department admin to reset password', 'info')}>
                Forgot password?
              </button>
            </div>
          </form>

          <div className="login-demo-hint">
            <strong>Demo credentials:</strong><br />
            Student: Email <strong>rohan.mehta@xyz.edu</strong> · Password (PRN) <strong>2024001</strong><br />
            Faculty: ID <strong>FAC001</strong> · Password <strong>(any)</strong><br />
            Admin: Username <strong>admin@dept</strong> · Password <strong>(any)</strong>
          </div>
        </div>

        <div className="login-footer">
          © 2024-25 Computer Engineering Dept · XYZ College
        </div>

        <ToastContainer toasts={toasts} removeToast={removeToast} />
      </div>
    );
  }

  // ---- Main App Shell ----
  const navItems = getNavItems();

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-top">
          <div className="sidebar-user">
            <Avatar name={currentUser?.name || ''} role={currentRole} size="sm" />
            {!sidebarCollapsed && (
              <div className="sidebar-user-info">
                <div className="sidebar-user-name">{currentUser?.name}</div>
                <div className="sidebar-user-role">{currentRole.charAt(0).toUpperCase() + currentRole.slice(1)}</div>
              </div>
            )}
          </div>
        </div>
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <div key={item.key} className={`nav-item ${activePage === item.key ? 'active' : ''}`}
              onClick={() => setActivePage(item.key)} title={sidebarCollapsed ? item.label : ''}>
              <i className={`ti ${item.icon}`} />
              {!sidebarCollapsed && <span>{item.label}</span>}
              {!sidebarCollapsed && item.badge > 0 && <span className="nav-badge">{item.badge}</span>}
            </div>
          ))}
        </nav>
        {!sidebarCollapsed && (
          <div className="sidebar-bottom">
            <div className="sidebar-version">CertTrack v3.0</div>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <div className="main-area">
        {/* Topbar */}
        <header className="topbar">
          <button className="hamburger-btn" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
            <i className={`ti ${sidebarCollapsed ? 'ti-menu-2' : 'ti-layout-sidebar-left-collapse'}`} />
          </button>
          <div className="topbar-logo">
            <i className="ti ti-certificate" />
            {!sidebarCollapsed && <span>CertTrack Pro</span>}
          </div>
          <div className="topbar-breadcrumb">
            <i className="ti ti-chevron-right" style={{ fontSize: 12 }} />
            <span>{getBreadcrumb()}</span>
          </div>
          <div className="topbar-right">
            {/* Dark mode toggle */}
            <button className="topbar-icon-btn" onClick={() => setDarkMode(!darkMode)} title={darkMode ? 'Light mode' : 'Dark mode'}>
              <i className={`ti ${darkMode ? 'ti-sun' : 'ti-moon'}`} />
            </button>
            {/* Notifications bell */}
            <button className="notif-btn" onClick={() => setActivePage('notifications')}>
              <i className="ti ti-bell" />
              {getUnreadCount() > 0 && <span className="notif-dot">{getUnreadCount()}</span>}
            </button>
            {/* User info */}
            <div className="user-info">
              <Avatar name={currentUser?.name || ''} role={currentRole} size="sm" />
              <div className="user-name-role">
                <div className="user-name">{currentUser?.name}</div>
                <div className="user-role-label">{currentRole.charAt(0).toUpperCase() + currentRole.slice(1)}</div>
              </div>
            </div>
            {/* Logout */}
            <button className="btn btn-ghost btn-sm" onClick={handleLogout}>
              <i className="ti ti-logout" /> Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          {currentRole === 'student' && (
            <StudentPanel
              student={students.find(s => s.id === currentUser?.id) || currentUser}
              students={students}
              faculty={faculty}
              config={config}
              addToast={addToast}
              updateStudents={updateStudents}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          )}
          {currentRole === 'faculty' && (
            <FacultyPanel
              currentFaculty={faculty.find(f => f.id === currentUser?.id) || currentUser}
              students={students}
              faculty={faculty}
              config={config}
              addToast={addToast}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          )}
          {currentRole === 'admin' && (
            <AdminPanel
              admin={currentUser}
              students={students}
              faculty={faculty}
              config={config}
              auditLog={auditLog}
              addToast={addToast}
              updateStudents={updateStudents}
              updateFaculty={updateFaculty}
              updateAuditLog={updateAuditLog}
              updateConfig={updateConfig}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          )}
        </main>
      </div>

      {/* Toasts */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
