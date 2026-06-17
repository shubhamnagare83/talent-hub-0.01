// ============================================================
// CertTrack Pro — Student Panel (All 10 Pages)
// ============================================================
import React, { useState, useEffect, useRef } from 'react';
import {
  Avatar, ScoreRing, CategoryBars, StatusBadge, Tabs, Pagination,
  EmptyState, SearchInput, StatCard, LineChart, Modal, ConfirmModal,
  formatDate, formatDateTime, timeAgo, ToggleSwitch
} from './SharedComponents';
import {
  calculateScore, getRankInYear, getDepartmentRank, getScoreColor, getInitials
} from '../scoreEngine';
import { genId } from '../data';

// ──────────────────────────────────────────────────────────────
// PAGE 1 — Dashboard
// ──────────────────────────────────────────────────────────────
function DashboardPage({ student, students, config }) {
  const scores = calculateScore(student, config.scoringConfig);
  const yearRank = getRankInYear(student, students);
  const deptRank = getDepartmentRank(student, students);
  const certCount = (student.certifications || []).length;
  const history = student.scoreHistory || [];
  const prevScore = history.length >= 2 ? history[history.length - 2].totalScore : scores.total;
  const diff = scores.total - prevScore;

  // Leaderboard top 10 same year
  const sameYear = students
    .filter(s => s.year === student.year && s.status === 'active')
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  // Recent activity: merge scoreHistory + notifications
  const recentActivity = [
    ...history.map(h => ({ type: 'score', date: h.date, text: h.trigger })),
    ...(student.notifications || []).map(n => ({ type: 'notif', date: n.timestamp, text: n.message }))
  ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      <div className="stat-grid">
        <StatCard icon="ti-chart-bar" iconBg="var(--primary-light)" iconColor="var(--primary)"
          value={scores.total} label="Total score"
          trend={diff !== 0 ? `${diff > 0 ? '+' : ''}${diff} pts` : undefined}
          trendDir={diff >= 0 ? 'up' : 'down'} />
        <StatCard icon="ti-trophy" iconBg="var(--warning-light)" iconColor="var(--warning)"
          value={`#${yearRank}`} label="Year rank" />
        <StatCard icon="ti-building" iconBg="var(--purple-light)" iconColor="var(--purple)"
          value={`#${deptRank}`} label="Department rank" />
        <StatCard icon="ti-certificate" iconBg="var(--success-light)" iconColor="var(--success)"
          value={certCount} label="Certificates submitted" />
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header"><span className="card-title">Overall score</span>
            {diff !== 0 && (
              <span className={`badge ${diff > 0 ? 'badge-success' : 'badge-danger'}`}>
                <i className={`ti ${diff > 0 ? 'ti-trending-up' : 'ti-trending-down'}`} style={{ fontSize: 11 }} />
                {diff > 0 ? '+' : ''}{diff} pts
              </span>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ScoreRing score={scores.total} size={160} strokeWidth={10} />
          </div>
        </div>
        <div className="card">
          <div className="card-header"><span className="card-title">Category breakdown</span></div>
          <CategoryBars categoryScores={student.categoryScores} config={config.scoringConfig} />
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header"><span className="card-title">Year leaderboard — Top 10</span></div>
          <div className="table-wrapper">
            <table>
              <thead><tr><th>#</th><th>STUDENT</th><th>SCORE</th></tr></thead>
              <tbody>
                {sameYear.map((s, i) => (
                  <tr key={s.id} className={s.id === student.id ? 'highlight-row' : ''}>
                    <td>{i < 3 ? ['🥇','🥈','🥉'][i] : i + 1}</td>
                    <td className="flex items-center gap-2">
                      <Avatar name={s.name} size="sm" />{s.name}
                      {s.id === student.id && <span className="badge badge-primary">You</span>}
                    </td>
                    <td><strong style={{ color: getScoreColor(s.score) }}>{s.score}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-header"><span className="card-title">Recent activity</span></div>
          {recentActivity.length === 0 ? (
            <EmptyState icon="ti-activity" heading="No recent activity" />
          ) : (
            <div className="timeline">
              {recentActivity.map((a, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" style={{
                    background: a.type === 'score' ? 'var(--primary-light)' : 'var(--success-light)',
                    color: a.type === 'score' ? 'var(--primary)' : 'var(--success)'
                  }}>
                    <i className={`ti ${a.type === 'score' ? 'ti-chart-line' : 'ti-bell'}`} />
                  </div>
                  <div className="timeline-body">
                    <div className="timeline-title">{a.text}</div>
                    <div className="timeline-meta">{timeAgo(a.date)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 2 — My Profile
// ──────────────────────────────────────────────────────────────
function ProfilePage({ student, addToast, updateStudents, students }) {
  const [editing, setEditing] = useState(false);
  const [tab, setTab] = useState('personal');
  const [form, setForm] = useState({ ...student });
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name?.trim()) e.name = 'Name is required';
    if (!form.email?.trim()) e.email = 'Email is required';
    if (!form.phone?.trim()) e.phone = 'Phone is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    const updated = students.map(s => s.id === student.id ? { ...s, name: form.name, email: form.email, phone: form.phone, dob: form.dob, address: form.address, parentName: form.parentName, parentPhone: form.parentPhone } : s);
    updateStudents(updated);
    setEditing(false);
    addToast('Profile updated successfully', 'success');
  };

  const handleCancel = () => { setForm({ ...student }); setEditing(false); setErrors({}); };

  const tabs = [
    { key: 'personal', label: 'Personal info' },
    { key: 'academic', label: 'Academic record' },
    { key: 'contact', label: 'Contact & family' }
  ];

  const ac = student.academics || {};
  const totalMarks = (ac.CIA1?.obtained || 0) + (ac.CIA2?.obtained || 0) + (ac.capstone?.obtained || 0) + (ac.practicals?.obtained || 0);
  const maxMarks = (ac.CIA1?.maxMarks || 35) + (ac.CIA2?.maxMarks || 35) + (ac.capstone?.maxMarks || 20) + (ac.practicals?.maxMarks || 10);
  const pct = maxMarks > 0 ? Math.round((totalMarks / maxMarks) * 100) : 0;

  return (
    <div>
      <h2 className="page-title">My profile</h2>
      <div className="card">
        <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
          <div className="flex items-center gap-3">
            <Avatar name={student.name} size="xl" />
            <div>
              <div style={{ fontSize: 18, fontWeight: 500 }}>{student.name}</div>
              <div className="text-sm text-secondary">PRN: {student.prn}</div>
              <div className="flex gap-1 mt-1" style={{ flexWrap: 'wrap' }}>
                <span className="badge badge-primary">{student.branch}</span>
                <span className="badge badge-purple">{student.year} year</span>
                <span className="badge badge-gray">Div {student.division}</span>
                <StatusBadge status={student.status} />
              </div>
            </div>
          </div>
          {!editing && <button className="btn btn-primary" onClick={() => setEditing(true)}><i className="ti ti-edit" />Edit profile</button>}
          {editing && (
            <div className="flex gap-2">
              <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
              <button className="btn btn-success" onClick={handleSave}><i className="ti ti-check" />Save</button>
            </div>
          )}
        </div>
      </div>

      <Tabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === 'personal' && (
        <div className="card">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Full name</div>
              {editing ? <input className={errors.name ? 'error' : ''} value={form.name} onChange={e => set('name', e.target.value)} /> : <div className="info-value">{student.name}</div>}
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>
            <div className="info-item">
              <div className="info-label">Date of birth</div>
              {editing ? <input type="date" value={form.dob || ''} onChange={e => set('dob', e.target.value)} /> : <div className="info-value">{formatDate(student.dob)}</div>}
            </div>
            <div className="info-item">
              <div className="info-label">Gender</div>
              <div className="info-value">—</div>
            </div>
            <div className="info-item">
              <div className="info-label">Admission type</div>
              <div className="info-value">{student.admissionType}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Roll number</div>
              <div className="info-value">{student.rollNo}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Year / Division</div>
              <div className="info-value">{student.year} — Div {student.division}</div>
            </div>
          </div>
        </div>
      )}

      {tab === 'academic' && (
        <div className="card">
          <div className="section-title">Internal marks</div>
          <div className="table-wrapper mb-4">
            <table>
              <thead><tr><th>COMPONENT</th><th>OBTAINED</th><th>MAX</th><th>%</th></tr></thead>
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
                <tr style={{ fontWeight: 500 }}><td>Total</td><td>{totalMarks}</td><td>{maxMarks}</td><td>{pct}%</td></tr>
              </tbody>
            </table>
          </div>
          <div className="section-title">CGPA</div>
          <div className="flex items-center gap-3 mb-3">
            <div style={{ fontSize: 28, fontWeight: 500, color: 'var(--primary)' }}>{ac.CGPA || '—'}</div>
            <div style={{ flex: 1 }}>
              <div className="progress-bar"><div className="progress-fill progress-primary" style={{ width: `${((ac.CGPA || 0) / 10) * 100}%` }} /></div>
            </div>
            <span className="text-sm text-secondary">/ 10.0</span>
          </div>
          <div className="info-grid">
            <div className="info-item"><div className="info-label">Semester</div><div className="info-value">{ac.semester || '—'}</div></div>
            <div className="info-item"><div className="info-label">Backlogs</div><div className="info-value" style={{ color: (ac.backlogs || 0) > 0 ? 'var(--danger)' : 'var(--success)' }}>{ac.backlogs || 0}</div></div>
          </div>
        </div>
      )}

      {tab === 'contact' && (
        <div className="card">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Email</div>
              {editing ? <input className={errors.email ? 'error' : ''} value={form.email} onChange={e => set('email', e.target.value)} /> : <div className="info-value">{student.email}</div>}
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>
            <div className="info-item">
              <div className="info-label">Phone</div>
              {editing ? <input className={errors.phone ? 'error' : ''} value={form.phone} onChange={e => set('phone', e.target.value)} /> : <div className="info-value">{student.phone}</div>}
              {errors.phone && <div className="form-error">{errors.phone}</div>}
            </div>
            <div className="info-item">
              <div className="info-label">Address</div>
              {editing ? <input value={form.address || ''} onChange={e => set('address', e.target.value)} /> : <div className="info-value">{student.address || '—'}</div>}
            </div>
            <div className="info-item">
              <div className="info-label">Parent / Guardian name</div>
              {editing ? <input value={form.parentName || ''} onChange={e => set('parentName', e.target.value)} /> : <div className="info-value">{student.parentName || '—'}</div>}
            </div>
            <div className="info-item">
              <div className="info-label">Parent phone</div>
              {editing ? <input value={form.parentPhone || ''} onChange={e => set('parentPhone', e.target.value)} /> : <div className="info-value">{student.parentPhone || '—'}</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 3 — Upload Certificate (4-step wizard)
// ──────────────────────────────────────────────────────────────
function UploadCertPage({ student, config, addToast, updateStudents, students, setActivePage }) {
  const [step, setStep] = useState(1);
  const [certType, setCertType] = useState('');
  const [form, setForm] = useState({ name: '', platform: '', org: '', date: '', credentialId: '', credentialUrl: '', description: '', category: '', level: '', achievement: '' });
  const [file, setFile] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validateStep2 = () => {
    const e = {};
    if (!form.name?.trim()) e.name = 'Certificate name is required';
    if (!form.org?.trim()) e.org = 'Organisation is required';
    if (!form.date) e.date = 'Date is required';
    if (certType === 'technical' && !form.platform) e.platform = 'Platform is required';
    if (certType === 'non-technical' && !form.category) e.category = 'Category is required';
    if (certType === 'non-technical' && !form.level) e.level = 'Level is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep3 = () => {
    const e = {};
    if (!file) e.file = 'Please select a file';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && !certType) { addToast('Please select certificate type', 'error'); return; }
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    setErrors({});
    setStep(s => s + 1);
  };

  const handleSubmit = () => {
    if (!agreed) { addToast('Please confirm the details are accurate', 'error'); return; }
    const newCert = {
      id: genId(),
      type: certType,
      name: form.name,
      issuingOrg: form.org,
      platform: certType === 'technical' ? form.platform : '',
      completionDate: form.date,
      credentialId: form.credentialId,
      credentialUrl: form.credentialUrl,
      fileLabel: file ? file.name : '',
      status: 'pending',
      adminRemarks: '',
      submittedAt: new Date().toISOString(),
      reviewedAt: '',
      reviewedBy: '',
      description: form.description,
      ...(certType === 'non-technical' ? { category: form.category, level: form.level, achievement: form.achievement } : {})
    };
    const updated = students.map(s => s.id === student.id ? { ...s, certifications: [...s.certifications, newCert] } : s);
    updateStudents(updated);
    addToast('Certificate submitted for review', 'success');
    setActivePage('my-certificates');
  };

  const steps = ['Type', 'Details', 'Upload', 'Review'];

  return (
    <div>
      <h2 className="page-title">Upload certificate</h2>
      {/* Step indicator */}
      <div className="step-indicator">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className={`step ${step > i + 1 ? 'completed' : ''} ${step === i + 1 ? 'active' : ''}`}>
              <div className="step-circle">{step > i + 1 ? <i className="ti ti-check" /> : i + 1}</div>
              <div className="step-label">{s}</div>
            </div>
            {i < steps.length - 1 && <div className={`step-connector ${step > i + 1 ? 'done' : ''}`} />}
          </React.Fragment>
        ))}
      </div>

      <div className="card">
        {/* Step 1 */}
        {step === 1 && (
          <div>
            <div className="section-title mb-3">Choose certificate type</div>
            <div className="grid-2">
              <div className={`role-card ${certType === 'technical' ? 'selected' : ''}`} onClick={() => setCertType('technical')} style={{ padding: '2rem', cursor: 'pointer' }}>
                <i className="ti ti-code" style={{ fontSize: 36, color: 'var(--primary)', display: 'block', marginBottom: 8 }} />
                <div style={{ fontSize: 15, fontWeight: 500 }}>Technical</div>
                <div className="text-sm text-secondary mt-1">AWS, Google, Coursera, NPTEL, etc.</div>
              </div>
              <div className={`role-card ${certType === 'non-technical' ? 'selected' : ''}`} onClick={() => setCertType('non-technical')} style={{ padding: '2rem', cursor: 'pointer' }}>
                <i className="ti ti-award" style={{ fontSize: 36, color: 'var(--purple)', display: 'block', marginBottom: 8 }} />
                <div style={{ fontSize: 15, fontWeight: 500 }}>Non-technical</div>
                <div className="text-sm text-secondary mt-1">Sports, cultural, leadership, NSS/NCC</div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <div className="section-title mb-3">Certificate details</div>
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Certificate name<span className="required">*</span></label>
                <input className={errors.name ? 'error' : ''} value={form.name} onChange={e => set('name', e.target.value)} placeholder="e.g. AWS Cloud Practitioner" />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>
              {certType === 'technical' ? (
                <div className="form-group">
                  <label className="form-label">Platform<span className="required">*</span></label>
                  <select className={errors.platform ? 'error' : ''} value={form.platform} onChange={e => set('platform', e.target.value)}>
                    <option value="">Select platform</option>
                    {config.technicalPlatforms.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.platform && <div className="form-error">{errors.platform}</div>}
                </div>
              ) : (
                <div className="form-group">
                  <label className="form-label">Category<span className="required">*</span></label>
                  <select className={errors.category ? 'error' : ''} value={form.category} onChange={e => set('category', e.target.value)}>
                    <option value="">Select category</option>
                    {config.nonTechCategories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.category && <div className="form-error">{errors.category}</div>}
                </div>
              )}
              <div className="form-group">
                <label className="form-label">Issuing organisation<span className="required">*</span></label>
                <input className={errors.org ? 'error' : ''} value={form.org} onChange={e => set('org', e.target.value)} placeholder="e.g. Amazon" />
                {errors.org && <div className="form-error">{errors.org}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Completion date<span className="required">*</span></label>
                <input type="date" className={errors.date ? 'error' : ''} value={form.date} onChange={e => set('date', e.target.value)} />
                {errors.date && <div className="form-error">{errors.date}</div>}
              </div>
              {certType === 'technical' ? (
                <>
                  <div className="form-group">
                    <label className="form-label">Credential ID</label>
                    <input value={form.credentialId} onChange={e => set('credentialId', e.target.value)} placeholder="Optional" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Credential URL</label>
                    <input type="url" value={form.credentialUrl} onChange={e => set('credentialUrl', e.target.value)} placeholder="https://..." />
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label className="form-label">Level<span className="required">*</span></label>
                    <select className={errors.level ? 'error' : ''} value={form.level} onChange={e => set('level', e.target.value)}>
                      <option value="">Select level</option>
                      <option value="college">College</option>
                      <option value="district">District</option>
                      <option value="state">State</option>
                      <option value="national">National</option>
                      <option value="international">International</option>
                    </select>
                    {errors.level && <div className="form-error">{errors.level}</div>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Achievement</label>
                    <input value={form.achievement} onChange={e => set('achievement', e.target.value)} placeholder="e.g. Winner, Participant" />
                  </div>
                </>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea value={form.description} onChange={e => set('description', e.target.value)} placeholder="Brief description of the certificate..." rows={3} />
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <div className="section-title mb-3">Upload certificate file</div>
            <div className={`upload-zone ${dragOver ? 'drag-over' : ''}`}
              onClick={() => fileRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={e => { e.preventDefault(); setDragOver(false); if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]); }}>
              <input ref={fileRef} type="file" accept=".pdf,.jpg,.jpeg,.png" style={{ display: 'none' }} onChange={e => { if (e.target.files[0]) setFile(e.target.files[0]); }} />
              <div className="upload-zone-icon"><i className="ti ti-cloud-upload" /></div>
              {file ? (
                <p><i className="ti ti-file" style={{ marginRight: 4 }} /><strong>{file.name}</strong> — {(file.size / 1024).toFixed(1)} KB</p>
              ) : (
                <div>
                  <p><strong>Click to browse</strong> or drag and drop</p>
                  <p className="text-xs text-muted mt-1">PDF, JPG, PNG (max 5 MB)</p>
                </div>
              )}
            </div>
            {errors.file && <div className="form-error mt-1">{errors.file}</div>}
            {file && (
              <button className="btn btn-ghost btn-sm mt-2" onClick={() => setFile(null)}>
                <i className="ti ti-trash" />Remove file
              </button>
            )}
          </div>
        )}

        {/* Step 4 — Review */}
        {step === 4 && (
          <div>
            <div className="section-title mb-3">Review & submit</div>
            <div className="info-grid mb-4">
              <div className="info-item"><div className="info-label">Type</div><div className="info-value">{certType === 'technical' ? 'Technical' : 'Non-technical'}</div></div>
              <div className="info-item"><div className="info-label">Name</div><div className="info-value">{form.name}</div></div>
              {certType === 'technical' && <div className="info-item"><div className="info-label">Platform</div><div className="info-value">{form.platform}</div></div>}
              {certType === 'non-technical' && <div className="info-item"><div className="info-label">Category</div><div className="info-value">{form.category}</div></div>}
              <div className="info-item"><div className="info-label">Organisation</div><div className="info-value">{form.org}</div></div>
              <div className="info-item"><div className="info-label">Date</div><div className="info-value">{formatDate(form.date)}</div></div>
              {certType === 'technical' && form.credentialId && <div className="info-item"><div className="info-label">Credential ID</div><div className="info-value">{form.credentialId}</div></div>}
              {certType === 'non-technical' && <div className="info-item"><div className="info-label">Level</div><div className="info-value">{form.level}</div></div>}
              <div className="info-item"><div className="info-label">File</div><div className="info-value">{file?.name || '—'}</div></div>
            </div>
            {form.description && <div className="info-item mb-3"><div className="info-label">Description</div><div className="info-value">{form.description}</div></div>}
            <div className="divider" />
            <div className="checkbox-row">
              <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
              <span className="text-sm">I confirm that the above details are accurate and the uploaded document is genuine.</span>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-4" style={{ paddingTop: '1rem', borderTop: 'var(--border)' }}>
          {step > 1 ? <button className="btn btn-secondary" onClick={() => { setErrors({}); setStep(s => s - 1); }}><i className="ti ti-arrow-left" />Back</button> : <div />}
          {step < 4 ? <button className="btn btn-primary" onClick={nextStep}>Next<i className="ti ti-arrow-right" /></button>
            : <button className="btn btn-success" onClick={handleSubmit} disabled={!agreed}><i className="ti ti-check" />Submit certificate</button>}
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 4 — My Certificates
// ──────────────────────────────────────────────────────────────
function MyCertsPage({ student, students, updateStudents, addToast, setActivePage }) {
  const [tab, setTab] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');

  const certs = student.certifications || [];
  const tabDefs = [
    { key: 'all', label: 'All', count: certs.length },
    { key: 'technical', label: 'Technical', count: certs.filter(c => c.type === 'technical').length },
    { key: 'non-technical', label: 'Non-technical', count: certs.filter(c => c.type === 'non-technical').length },
    { key: 'pending', label: 'Pending', count: certs.filter(c => c.status === 'pending').length },
    { key: 'approved', label: 'Approved', count: certs.filter(c => c.status === 'approved').length },
    { key: 'rejected', label: 'Rejected', count: certs.filter(c => c.status === 'rejected').length },
  ];

  let filtered = certs.filter(c => {
    if (tab === 'technical' || tab === 'non-technical') return c.type === tab;
    if (tab === 'pending' || tab === 'approved' || tab === 'rejected') return c.status === tab;
    return true;
  });
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(c => c.name.toLowerCase().includes(q) || (c.issuingOrg || '').toLowerCase().includes(q));
  }
  filtered.sort((a, b) => {
    if (sort === 'newest') return new Date(b.submittedAt || b.completionDate) - new Date(a.submittedAt || a.completionDate);
    if (sort === 'oldest') return new Date(a.submittedAt || a.completionDate) - new Date(b.submittedAt || b.completionDate);
    return a.name.localeCompare(b.name);
  });

  const handleReupload = (certId) => {
    const updated = students.map(s => {
      if (s.id !== student.id) return s;
      return { ...s, certifications: s.certifications.map(c => c.id === certId ? { ...c, status: 'pending', adminRemarks: '', submittedAt: new Date().toISOString() } : c) };
    });
    updateStudents(updated);
    addToast('Certificate re-submitted for review', 'success');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
        <h2 className="page-title" style={{ marginBottom: 0 }}>My certificates</h2>
        <button className="btn btn-primary" onClick={() => setActivePage('upload-cert')}><i className="ti ti-plus" />Upload new</button>
      </div>
      <Tabs tabs={tabDefs} active={tab} onChange={setTab} />
      <div className="filter-bar">
        <SearchInput value={search} onChange={setSearch} placeholder="Search certificates..." />
        <select value={sort} onChange={e => setSort(e.target.value)} style={{ width: 'auto', minWidth: 140 }}>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>
      <div className="card">
        {filtered.length === 0 ? (
          <EmptyState icon="ti-certificate" heading="No certificates found" text={tab !== 'all' ? `No ${tab} certificates yet.` : 'Upload your first certificate to get started.'} action={<button className="btn btn-primary btn-sm" onClick={() => setActivePage('upload-cert')}><i className="ti ti-plus" />Upload</button>} />
        ) : (
          <div className="table-wrapper">
            <table>
              <thead><tr><th>NAME</th><th>TYPE</th><th>ORGANISATION</th><th>DATE</th><th>STATUS</th><th>SUBMITTED</th><th>ACTION</th></tr></thead>
              <tbody>
                {filtered.map(c => (
                  <tr key={c.id}>
                    <td className="font-medium">{c.name}</td>
                    <td><span className={`badge ${c.type === 'technical' ? 'badge-primary' : 'badge-purple'}`}>{c.type === 'technical' ? 'Technical' : 'Non-tech'}</span></td>
                    <td className="cell-muted">{c.issuingOrg}</td>
                    <td className="cell-muted">{formatDate(c.completionDate)}</td>
                    <td><StatusBadge status={c.status} /></td>
                    <td className="cell-muted">{formatDate(c.submittedAt)}</td>
                    <td>
                      {c.status === 'rejected' && (
                        <div>
                          <div className="text-xs text-danger mb-1"><i className="ti ti-alert-circle" style={{ fontSize: 11, marginRight: 2 }} />{c.adminRemarks}</div>
                          <button className="btn btn-primary btn-xs" onClick={() => handleReupload(c.id)}><i className="ti ti-refresh" />Re-upload</button>
                        </div>
                      )}
                      {c.status === 'approved' && c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-xs"><i className="ti ti-external-link" />View</a>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 5 — Achievements
// ──────────────────────────────────────────────────────────────
function AchievementsPage({ student, students, updateStudents, addToast }) {
  const [tab, setTab] = useState('internships');
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [errors, setErrors] = useState({});

  const blankForms = {
    internships: { company: '', role: '', duration_months: '', type: 'MNC', stipend: '', startDate: '', endDate: '', offerLetterFile: '', status: 'pending' },
    projects: { title: '', description: '', githubUrl: '', techStack: '', commitCount: '', stars: 0, language: '', status: 'completed' },
    hackathons: { name: '', organizer: '', result: 'participated', teamSize: '', date: '', certificateFile: '', status: 'pending' },
    placements: { company: '', role: '', ctc: '', offerLetterFile: '', status: 'pending', offerDate: '' },
    sports: { sportName: '', level: 'college', achievement: '', date: '', certificateFile: '', status: 'pending' },
  };
  const [form, setForm] = useState(blankForms[tab]);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const getItems = () => student[tab] || [];

  const openAdd = () => { setForm(blankForms[tab]); setEditId(null); setShowForm(true); setErrors({}); };
  const openEdit = (item) => {
    const f = { ...item };
    if (tab === 'projects' && Array.isArray(f.techStack)) f.techStack = f.techStack.join(', ');
    setForm(f); setEditId(item.id); setShowForm(true); setErrors({});
  };

  const validate = () => {
    const e = {};
    if (tab === 'internships') {
      if (!form.company?.trim()) e.company = 'Required';
      if (!form.role?.trim()) e.role = 'Required';
    } else if (tab === 'projects') {
      if (!form.title?.trim()) e.title = 'Required';
    } else if (tab === 'hackathons') {
      if (!form.name?.trim()) e.name = 'Required';
    } else if (tab === 'placements') {
      if (!form.company?.trim()) e.company = 'Required';
      if (!form.role?.trim()) e.role = 'Required';
    } else if (tab === 'sports') {
      if (!form.sportName?.trim()) e.sportName = 'Required';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    const newItem = { ...form };
    if (tab === 'projects' && typeof newItem.techStack === 'string') {
      newItem.techStack = newItem.techStack.split(',').map(s => s.trim()).filter(Boolean);
    }
    if (!editId) newItem.id = genId();
    newItem.commitCount = Number(newItem.commitCount) || 0;
    newItem.duration_months = Number(newItem.duration_months) || 0;
    newItem.stipend = Number(newItem.stipend) || 0;
    newItem.ctc = Number(newItem.ctc) || 0;
    newItem.teamSize = Number(newItem.teamSize) || 0;
    newItem.stars = Number(newItem.stars) || 0;

    const updated = students.map(s => {
      if (s.id !== student.id) return s;
      let arr = [...(s[tab] || [])];
      if (editId) { arr = arr.map(x => x.id === editId ? newItem : x); }
      else { arr.push(newItem); }
      return { ...s, [tab]: arr };
    });
    updateStudents(updated);
    addToast(editId ? 'Achievement updated' : 'Achievement added', 'success');
    setShowForm(false);
    setEditId(null);
  };

  const handleDelete = () => {
    const updated = students.map(s => {
      if (s.id !== student.id) return s;
      return { ...s, [tab]: (s[tab] || []).filter(x => x.id !== confirmDelete) };
    });
    updateStudents(updated);
    addToast('Achievement deleted', 'success');
    setConfirmDelete(null);
  };

  const tabDefs = [
    { key: 'internships', label: 'Internships', count: (student.internships || []).length },
    { key: 'projects', label: 'Projects', count: (student.projects || []).length },
    { key: 'hackathons', label: 'Hackathons', count: (student.hackathons || []).length },
    { key: 'placements', label: 'Placements', count: (student.placements || []).length },
    { key: 'sports', label: 'Sports', count: (student.sports || []).length },
  ];

  const items = getItems();

  const renderForm = () => {
    if (tab === 'internships') return (
      <div className="grid-2">
        <div className="form-group"><label className="form-label">Company<span className="required">*</span></label><input className={errors.company ? 'error' : ''} value={form.company || ''} onChange={e => set('company', e.target.value)} />{errors.company && <div className="form-error">{errors.company}</div>}</div>
        <div className="form-group"><label className="form-label">Role<span className="required">*</span></label><input className={errors.role ? 'error' : ''} value={form.role || ''} onChange={e => set('role', e.target.value)} />{errors.role && <div className="form-error">{errors.role}</div>}</div>
        <div className="form-group"><label className="form-label">Duration (months)</label><input type="number" value={form.duration_months || ''} onChange={e => set('duration_months', e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Type</label><select value={form.type || 'MNC'} onChange={e => set('type', e.target.value)}><option value="MNC">MNC</option><option value="startup">Startup</option><option value="govt">Government</option></select></div>
        <div className="form-group"><label className="form-label">Stipend (₹/month)</label><input type="number" value={form.stipend || ''} onChange={e => set('stipend', e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Start date</label><input type="date" value={form.startDate || ''} onChange={e => set('startDate', e.target.value)} /></div>
        <div className="form-group"><label className="form-label">End date</label><input type="date" value={form.endDate || ''} onChange={e => set('endDate', e.target.value)} /></div>
      </div>
    );
    if (tab === 'projects') return (
      <div className="grid-2">
        <div className="form-group"><label className="form-label">Title<span className="required">*</span></label><input className={errors.title ? 'error' : ''} value={form.title || ''} onChange={e => set('title', e.target.value)} />{errors.title && <div className="form-error">{errors.title}</div>}</div>
        <div className="form-group"><label className="form-label">Language</label><input value={form.language || ''} onChange={e => set('language', e.target.value)} /></div>
        <div className="form-group"><label className="form-label">GitHub URL</label><input value={form.githubUrl || ''} onChange={e => set('githubUrl', e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Tech stack (comma-separated)</label><input value={form.techStack || ''} onChange={e => set('techStack', e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Commits</label><input type="number" value={form.commitCount || ''} onChange={e => set('commitCount', e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Stars</label><input type="number" value={form.stars || ''} onChange={e => set('stars', e.target.value)} /></div>
        <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">Description</label><textarea value={form.description || ''} onChange={e => set('description', e.target.value)} rows={2} /></div>
      </div>
    );
    if (tab === 'hackathons') return (
      <div className="grid-2">
        <div className="form-group"><label className="form-label">Hackathon name<span className="required">*</span></label><input className={errors.name ? 'error' : ''} value={form.name || ''} onChange={e => set('name', e.target.value)} />{errors.name && <div className="form-error">{errors.name}</div>}</div>
        <div className="form-group"><label className="form-label">Organizer</label><input value={form.organizer || ''} onChange={e => set('organizer', e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Result</label><select value={form.result || 'participated'} onChange={e => set('result', e.target.value)}><option value="winner">Winner</option><option value="runner-up">Runner-up</option><option value="participated">Participated</option></select></div>
        <div className="form-group"><label className="form-label">Team size</label><input type="number" value={form.teamSize || ''} onChange={e => set('teamSize', e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Date</label><input type="date" value={form.date || ''} onChange={e => set('date', e.target.value)} /></div>
      </div>
    );
    if (tab === 'placements') return (
      <div className="grid-2">
        <div className="form-group"><label className="form-label">Company<span className="required">*</span></label><input className={errors.company ? 'error' : ''} value={form.company || ''} onChange={e => set('company', e.target.value)} />{errors.company && <div className="form-error">{errors.company}</div>}</div>
        <div className="form-group"><label className="form-label">Role<span className="required">*</span></label><input className={errors.role ? 'error' : ''} value={form.role || ''} onChange={e => set('role', e.target.value)} />{errors.role && <div className="form-error">{errors.role}</div>}</div>
        <div className="form-group"><label className="form-label">CTC (₹)</label><input type="number" value={form.ctc || ''} onChange={e => set('ctc', e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Offer date</label><input type="date" value={form.offerDate || ''} onChange={e => set('offerDate', e.target.value)} /></div>
      </div>
    );
    if (tab === 'sports') return (
      <div className="grid-2">
        <div className="form-group"><label className="form-label">Sport name<span className="required">*</span></label><input className={errors.sportName ? 'error' : ''} value={form.sportName || ''} onChange={e => set('sportName', e.target.value)} />{errors.sportName && <div className="form-error">{errors.sportName}</div>}</div>
        <div className="form-group"><label className="form-label">Level</label><select value={form.level || 'college'} onChange={e => set('level', e.target.value)}><option value="college">College</option><option value="district">District</option><option value="state">State</option><option value="national">National</option></select></div>
        <div className="form-group"><label className="form-label">Achievement</label><input value={form.achievement || ''} onChange={e => set('achievement', e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Date</label><input type="date" value={form.date || ''} onChange={e => set('date', e.target.value)} /></div>
      </div>
    );
    return null;
  };

  return (
    <div>
      <h2 className="page-title">Achievements</h2>
      <Tabs tabs={tabDefs} active={tab} onChange={(t) => { setTab(t); setShowForm(false); setEditId(null); setErrors({}); }} />
      <div className="flex justify-between mb-3">
        <div />
        <button className="btn btn-primary btn-sm" onClick={openAdd}><i className="ti ti-plus" />Add new</button>
      </div>

      {showForm && (
        <div className="card mb-3">
          <div className="card-header"><span className="card-title">{editId ? 'Edit' : 'Add'} {tab.slice(0, -1)}</span></div>
          {renderForm()}
          <div className="flex gap-2 mt-2">
            <button className="btn btn-success btn-sm" onClick={handleSave}><i className="ti ti-check" />{editId ? 'Update' : 'Add'}</button>
            <button className="btn btn-secondary btn-sm" onClick={() => { setShowForm(false); setEditId(null); setErrors({}); }}>Cancel</button>
          </div>
        </div>
      )}

      <div className="card">
        {items.length === 0 ? (
          <EmptyState icon="ti-trophy" heading={`No ${tab} yet`} text="Click 'Add new' to get started." />
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  {tab === 'internships' && <><th>COMPANY</th><th>ROLE</th><th>DURATION</th><th>TYPE</th><th>STATUS</th><th>ACTIONS</th></>}
                  {tab === 'projects' && <><th>TITLE</th><th>LANGUAGE</th><th>COMMITS</th><th>STARS</th><th>STATUS</th><th>ACTIONS</th></>}
                  {tab === 'hackathons' && <><th>NAME</th><th>ORGANIZER</th><th>RESULT</th><th>DATE</th><th>STATUS</th><th>ACTIONS</th></>}
                  {tab === 'placements' && <><th>COMPANY</th><th>ROLE</th><th>CTC</th><th>OFFER DATE</th><th>STATUS</th><th>ACTIONS</th></>}
                  {tab === 'sports' && <><th>SPORT</th><th>LEVEL</th><th>ACHIEVEMENT</th><th>DATE</th><th>STATUS</th><th>ACTIONS</th></>}
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    {tab === 'internships' && <><td className="font-medium">{item.company}</td><td>{item.role}</td><td>{item.duration_months}m</td><td><span className="badge badge-gray">{item.type}</span></td><td><StatusBadge status={item.status} /></td></>}
                    {tab === 'projects' && <><td className="font-medium">{item.title}</td><td>{item.language}</td><td>{item.commitCount}</td><td>{item.stars} ⭐</td><td><StatusBadge status={item.status} /></td></>}
                    {tab === 'hackathons' && <><td className="font-medium">{item.name}</td><td>{item.organizer}</td><td><span className={`badge ${item.result === 'winner' ? 'badge-success' : item.result === 'runner-up' ? 'badge-warning' : 'badge-gray'}`}>{item.result}</span></td><td className="cell-muted">{formatDate(item.date)}</td><td><StatusBadge status={item.status} /></td></>}
                    {tab === 'placements' && <><td className="font-medium">{item.company}</td><td>{item.role}</td><td>₹{(item.ctc || 0).toLocaleString()}</td><td className="cell-muted">{formatDate(item.offerDate)}</td><td><StatusBadge status={item.status} /></td></>}
                    {tab === 'sports' && <><td className="font-medium">{item.sportName}</td><td><span className="badge badge-primary">{item.level}</span></td><td>{item.achievement}</td><td className="cell-muted">{formatDate(item.date)}</td><td><StatusBadge status={item.status} /></td></>}
                    <td>
                      <div className="flex gap-1">
                        <button className="btn btn-ghost btn-xs" onClick={() => openEdit(item)}><i className="ti ti-edit" /></button>
                        <button className="btn btn-ghost btn-xs text-danger" onClick={() => setConfirmDelete(item.id)}><i className="ti ti-trash" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {confirmDelete && (
        <ConfirmModal title="Delete achievement?" message="This action cannot be undone." confirmLabel="Delete"
          onConfirm={handleDelete} onCancel={() => setConfirmDelete(null)} />
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 6 — Submission Tracker
// ──────────────────────────────────────────────────────────────
function SubmissionTrackerPage({ student }) {
  const [filterCat, setFilterCat] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Collect all submissions
  const submissions = [
    ...(student.certifications || []).map(c => ({ ...c, category: c.type === 'technical' ? 'Technical cert' : 'Non-tech cert', icon: 'ti-certificate', color: 'var(--warning)' })),
    ...(student.internships || []).map(i => ({ ...i, name: `${i.company} — ${i.role}`, category: 'Internship', icon: 'ti-briefcase', color: '#2563EB' })),
    ...(student.hackathons || []).map(h => ({ ...h, category: 'Hackathon', icon: 'ti-trophy', color: '#DC2626' })),
    ...(student.projects || []).map(p => ({ ...p, name: p.title, category: 'Project', icon: 'ti-code', color: '#059669', status: p.status || 'completed' })),
    ...(student.placements || []).map(p => ({ ...p, name: `${p.company} — ${p.role}`, category: 'Placement', icon: 'ti-building', color: '#7C3AED' })),
    ...(student.sports || []).map(s => ({ ...s, name: s.sportName, category: 'Sports', icon: 'ti-run', color: '#0891B2' })),
  ].sort((a, b) => new Date(b.submittedAt || b.date || b.startDate || 0) - new Date(a.submittedAt || a.date || a.startDate || 0));

  const categories = ['all', ...new Set(submissions.map(s => s.category))];
  let filtered = submissions;
  if (filterCat !== 'all') filtered = filtered.filter(s => s.category === filterCat);
  if (filterStatus !== 'all') filtered = filtered.filter(s => s.status === filterStatus);

  const stats = {
    total: submissions.length,
    approved: submissions.filter(s => s.status === 'approved').length,
    pending: submissions.filter(s => s.status === 'pending').length,
    rejected: submissions.filter(s => s.status === 'rejected').length,
  };

  return (
    <div>
      <h2 className="page-title">Submission tracker</h2>
      <div className="stat-grid">
        <StatCard icon="ti-file-text" iconBg="var(--primary-light)" iconColor="var(--primary)" value={stats.total} label="Total submissions" />
        <StatCard icon="ti-check" iconBg="var(--success-light)" iconColor="var(--success)" value={stats.approved} label="Approved" />
        <StatCard icon="ti-clock" iconBg="var(--warning-light)" iconColor="var(--warning)" value={stats.pending} label="Pending" />
        <StatCard icon="ti-x" iconBg="var(--danger-light)" iconColor="var(--danger)" value={stats.rejected} label="Rejected" />
      </div>

      <div className="filter-bar">
        <select value={filterCat} onChange={e => setFilterCat(e.target.value)} style={{ width: 'auto', minWidth: 160 }}>
          {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All categories' : c}</option>)}
        </select>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ width: 'auto', minWidth: 140 }}>
          <option value="all">All statuses</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="card">
        {filtered.length === 0 ? (
          <EmptyState icon="ti-list" heading="No submissions found" text="Try changing the filters." />
        ) : (
          <div className="timeline">
            {filtered.map((s, i) => (
              <div key={s.id || i} className="timeline-item">
                <div className="timeline-dot" style={{ background: `${s.color}20`, color: s.color }}>
                  <i className={`ti ${s.icon}`} />
                </div>
                <div className="timeline-body">
                  <div className="flex items-center gap-2" style={{ flexWrap: 'wrap' }}>
                    <span className="timeline-title">{s.name}</span>
                    <span className="badge badge-gray">{s.category}</span>
                    <StatusBadge status={s.status} />
                  </div>
                  <div className="timeline-meta">
                    {formatDate(s.submittedAt || s.date || s.startDate)}
                    {s.reviewedBy && <> · Reviewed by {s.reviewedBy}</>}
                  </div>
                  {s.adminRemarks && s.status === 'rejected' && (
                    <div className="text-xs text-danger mt-1"><i className="ti ti-alert-circle" style={{ fontSize: 11, marginRight: 2 }} />{s.adminRemarks}</div>
                  )}
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
// PAGE 7 — Leaderboard
// ──────────────────────────────────────────────────────────────
function LeaderboardPage({ student, students }) {
  const [yearFilter, setYearFilter] = useState('all');
  const years = ['all', '1st', '2nd', '3rd', '4th', 'DSY'];

  let filtered = students.filter(s => s.status === 'active');
  if (yearFilter !== 'all') filtered = filtered.filter(s => s.year === yearFilter);
  filtered.sort((a, b) => b.score - a.score);

  const top3 = filtered.slice(0, 3);
  const medals = ['🥇', '🥈', '🥉'];
  const podiumOrder = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : top3;
  const podiumClasses = top3.length >= 3 ? ['podium-2', 'podium-1', 'podium-3'] : top3.map((_, i) => `podium-${i + 1}`);
  const podiumMedals = top3.length >= 3 ? [medals[1], medals[0], medals[2]] : top3.map((_, i) => medals[i]);

  const maxScore = filtered.length > 0 ? filtered[0].score : 100;

  return (
    <div>
      <h2 className="page-title">Leaderboard</h2>
      <div className="filter-bar">
        <select value={yearFilter} onChange={e => setYearFilter(e.target.value)} style={{ width: 'auto', minWidth: 140 }}>
          {years.map(y => <option key={y} value={y}>{y === 'all' ? 'All years' : y + ' year'}</option>)}
        </select>
      </div>

      {top3.length >= 3 && (
        <div className="podium">
          {podiumOrder.map((s, i) => (
            <div key={s.id} className={`podium-card ${podiumClasses[i]}`}>
              <div className="podium-medal">{podiumMedals[i]}</div>
              <Avatar name={s.name} size="lg" className="mb-2" />
              <div className="podium-name">{s.name}</div>
              <div className="text-xs text-secondary">{s.year} · Div {s.division}</div>
              <div className="podium-score">{s.score}</div>
            </div>
          ))}
        </div>
      )}

      <div className="card">
        <div className="table-wrapper">
          <table>
            <thead><tr><th>RANK</th><th>STUDENT</th><th>YEAR</th><th>SCORE</th><th></th></tr></thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={s.id} className={s.id === student.id ? 'highlight-row' : ''}>
                  <td>{i < 3 ? medals[i] : i + 1}</td>
                  <td className="flex items-center gap-2">
                    <Avatar name={s.name} size="sm" />
                    <div>
                      <div className="font-medium">{s.name}{s.id === student.id && <span className="badge badge-primary" style={{ marginLeft: 6 }}>You</span>}</div>
                      <div className="text-xs text-secondary">Div {s.division} · {s.rollNo}</div>
                    </div>
                  </td>
                  <td><span className="badge badge-gray">{s.year}</span></td>
                  <td><strong style={{ color: getScoreColor(s.score) }}>{s.score}</strong></td>
                  <td>
                    <div className="progress-bar" style={{ width: 100 }}>
                      <div className="progress-fill progress-primary" style={{ width: `${maxScore > 0 ? (s.score / maxScore) * 100 : 0}%` }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 8 — Notifications
// ──────────────────────────────────────────────────────────────
function NotificationsPage({ student, students, updateStudents }) {
  const [filter, setFilter] = useState('all');
  const notifications = student.notifications || [];

  const filtered = filter === 'unread' ? notifications.filter(n => !n.read) : notifications;
  const unreadCount = notifications.filter(n => !n.read).length;

  const markRead = (notifId) => {
    const updated = students.map(s => {
      if (s.id !== student.id) return s;
      return { ...s, notifications: s.notifications.map(n => n.id === notifId ? { ...n, read: true } : n) };
    });
    updateStudents(updated);
  };

  const markAllRead = () => {
    const updated = students.map(s => {
      if (s.id !== student.id) return s;
      return { ...s, notifications: s.notifications.map(n => ({ ...n, read: true })) };
    });
    updateStudents(updated);
  };

  const tabs = [
    { key: 'all', label: 'All', count: notifications.length },
    { key: 'unread', label: 'Unread', count: unreadCount },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-3" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
        <h2 className="page-title" style={{ marginBottom: 0 }}>Notifications</h2>
        {unreadCount > 0 && <button className="btn btn-secondary btn-sm" onClick={markAllRead}><i className="ti ti-checks" />Mark all as read</button>}
      </div>
      <Tabs tabs={tabs} active={filter} onChange={setFilter} />

      <div className="card">
        {filtered.length === 0 ? (
          <EmptyState icon="ti-bell-off" heading={filter === 'unread' ? 'All caught up!' : 'No notifications'}
            text={filter === 'unread' ? 'You have no unread notifications.' : 'You will see notifications here when something happens.'} />
        ) : (
          <div>
            {filtered.map(n => (
              <div key={n.id} className={`notif-item ${!n.read ? 'unread' : ''}`} onClick={() => !n.read && markRead(n.id)}>
                {!n.read && <div className="notif-dot-unread" />}
                {n.read && <div style={{ width: 8 }} />}
                <div className="notif-body" style={{ flex: 1 }}>
                  <div className="notif-title">{n.message}</div>
                  <div className="notif-time">{timeAgo(n.timestamp)}</div>
                </div>
                <span className={`badge ${n.type === 'success' ? 'badge-success' : n.type === 'warning' ? 'badge-warning' : 'badge-primary'}`}>{n.type}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 9 — Score Breakdown
// ──────────────────────────────────────────────────────────────
function ScoreBreakdownPage({ student, config }) {
  const [expandedCat, setExpandedCat] = useState(null);
  const scores = calculateScore(student, config.scoringConfig);
  const history = student.scoreHistory || [];

  const categories = [
    { key: 'academics', label: 'Academics', icon: 'ti-school', max: config.scoringConfig.academics, color: 'var(--primary)',
      desc: 'Calculated from CIA1 + CIA2 + Capstone + Practicals marks as a percentage of maximum marks, scaled to the weight.',
      tip: 'Focus on improving CIA and capstone scores for maximum impact.' },
    { key: 'internships', label: 'Internships', icon: 'ti-briefcase', max: config.scoringConfig.internships, color: '#2563EB',
      desc: 'Best approved internship scored by duration and company type. 6+ months at MNC = full marks.',
      tip: 'Pursue a 6-month internship at an MNC for maximum points.' },
    { key: 'placements', label: 'Placements', icon: 'ti-building', max: config.scoringConfig.placements, color: '#7C3AED',
      desc: 'Based on highest CTC from approved placements. 10L+ = full marks.',
      tip: 'Apply to higher-CTC companies and practice competitive programming.' },
    { key: 'hackathons', label: 'Hackathons', icon: 'ti-trophy', max: config.scoringConfig.hackathons, color: '#DC2626',
      desc: 'Winner = 10pts, Runner-up = 5pts, Participated = 2pts. Capped at max weight.',
      tip: 'Win or place in a hackathon for maximum points.' },
    { key: 'projects', label: 'Projects', icon: 'ti-code', max: config.scoringConfig.projects, color: '#059669',
      desc: 'GitHub-based: commits, tech stack diversity, and stars contribute to score.',
      tip: 'Push more commits, diversify tech stack, and star-worthy open source work.' },
    { key: 'certifications', label: 'Certifications', icon: 'ti-certificate', max: config.scoringConfig.certifications, color: '#D97706',
      desc: 'Each approved certification = 1 point, capped at max weight.',
      tip: 'Get more certifications approved to reach the cap.' },
    { key: 'sports', label: 'Sports', icon: 'ti-run', max: config.scoringConfig.sports, color: '#0891B2',
      desc: 'National = 5pts, State = 3pts, District = 2pts, College = 1pt.',
      tip: 'Compete at higher levels (state/national) for more points.' },
  ];

  const chartData = history.map(h => ({
    label: new Date(h.date).toLocaleDateString('en-IN', { month: 'short' }),
    value: h.totalScore
  }));

  return (
    <div>
      <h2 className="page-title">Score breakdown</h2>
      <div className="card mb-4">
        <div className="card-header"><span className="card-title">Score trend</span></div>
        {chartData.length >= 2 ? (
          <LineChart data={chartData} width={600} height={180} color="var(--primary)" />
        ) : (
          <div className="text-sm text-secondary">Not enough data points for a chart yet.</div>
        )}
      </div>

      {categories.map(cat => {
        const pts = scores[cat.key];
        const pct = cat.max > 0 ? (pts / cat.max) * 100 : 0;
        const isExpanded = expandedCat === cat.key;
        const belowMax = pts < cat.max;

        return (
          <div key={cat.key} className="card" style={{ marginBottom: '0.75rem' }}>
            <div className="flex items-center justify-between" style={{ cursor: 'pointer' }} onClick={() => setExpandedCat(isExpanded ? null : cat.key)}>
              <div className="flex items-center gap-2">
                <div className="stat-icon" style={{ background: `${cat.color}15`, color: cat.color, width: 36, height: 36, fontSize: 16 }}>
                  <i className={`ti ${cat.icon}`} />
                </div>
                <div>
                  <div className="font-medium">{cat.label}</div>
                  <div className="text-xs text-secondary">{pts} / {cat.max} points</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="progress-bar" style={{ width: 120 }}>
                  <div className="progress-fill" style={{ width: `${pct}%`, background: cat.color }} />
                </div>
                <span style={{ fontWeight: 500, color: cat.color, minWidth: 40, textAlign: 'right' }}>{Math.round(pct)}%</span>
                <i className={`ti ${isExpanded ? 'ti-chevron-up' : 'ti-chevron-down'}`} style={{ color: 'var(--color-text-muted)' }} />
              </div>
            </div>
            {isExpanded && (
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: 'var(--border)' }}>
                <div className="text-sm mb-2"><strong>How it's calculated:</strong> {cat.desc}</div>
                {belowMax && (
                  <div className="flex items-center gap-2" style={{ padding: '0.625rem', background: 'var(--primary-light)', borderRadius: 8 }}>
                    <i className="ti ti-bulb" style={{ color: 'var(--primary)', fontSize: 16 }} />
                    <span className="text-sm"><strong>How to improve:</strong> {cat.tip}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PAGE 10 — Settings
// ──────────────────────────────────────────────────────────────
function SettingsPage({ student, students, updateStudents, addToast }) {
  const [tab, setTab] = useState('account');
  const [pwForm, setPwForm] = useState({ current: '', newPw: '', confirm: '' });
  const [pwErrors, setPwErrors] = useState({});
  const [emailForm, setEmailForm] = useState({ email: student.email, phone: student.phone });
  const [emailErrors, setEmailErrors] = useState({});
  const [profileVisibility, setProfileVisibility] = useState(true);

  const [notifSettings, setNotifSettings] = useState({
    certApproval: true, scoreUpdates: true, announcements: true, leaderboard: false, email: true
  });
  const [privacySettings, setPrivacySettings] = useState({
    showScore: true, showRank: true, showProfile: true
  });

  const handlePwChange = () => {
    const e = {};
    if (!pwForm.current) e.current = 'Current password is required';
    if (!pwForm.newPw) e.newPw = 'New password is required';
    else if (pwForm.newPw.length < 6) e.newPw = 'Password must be at least 6 characters';
    if (pwForm.newPw !== pwForm.confirm) e.confirm = 'Passwords do not match';
    setPwErrors(e);
    if (Object.keys(e).length > 0) return;
    setPwForm({ current: '', newPw: '', confirm: '' });
    addToast('Password changed successfully', 'success');
  };

  const handleEmailUpdate = () => {
    const e = {};
    if (!emailForm.email?.trim()) e.email = 'Email is required';
    if (!emailForm.phone?.trim()) e.phone = 'Phone is required';
    setEmailErrors(e);
    if (Object.keys(e).length > 0) return;
    const updated = students.map(s => s.id === student.id ? { ...s, email: emailForm.email, phone: emailForm.phone } : s);
    updateStudents(updated);
    addToast('Contact info updated', 'success');
  };

  const tabs = [
    { key: 'account', label: 'Account' },
    { key: 'notifications', label: 'Notifications' },
    { key: 'privacy', label: 'Privacy' },
  ];

  return (
    <div>
      <h2 className="page-title">Settings</h2>
      <Tabs tabs={tabs} active={tab} onChange={setTab} />

      {tab === 'account' && (
        <div>
          <div className="card">
            <div className="card-header"><span className="card-title">Change password</span></div>
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Current password<span className="required">*</span></label>
                <input type="password" className={pwErrors.current ? 'error' : ''} value={pwForm.current} onChange={e => setPwForm(f => ({ ...f, current: e.target.value }))} />
                {pwErrors.current && <div className="form-error">{pwErrors.current}</div>}
              </div>
              <div />
              <div className="form-group">
                <label className="form-label">New password<span className="required">*</span></label>
                <input type="password" className={pwErrors.newPw ? 'error' : ''} value={pwForm.newPw} onChange={e => setPwForm(f => ({ ...f, newPw: e.target.value }))} />
                {pwErrors.newPw && <div className="form-error">{pwErrors.newPw}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Confirm new password<span className="required">*</span></label>
                <input type="password" className={pwErrors.confirm ? 'error' : ''} value={pwForm.confirm} onChange={e => setPwForm(f => ({ ...f, confirm: e.target.value }))} />
                {pwErrors.confirm && <div className="form-error">{pwErrors.confirm}</div>}
              </div>
            </div>
            <button className="btn btn-primary btn-sm" onClick={handlePwChange}><i className="ti ti-lock" />Update password</button>
          </div>

          <div className="card">
            <div className="card-header"><span className="card-title">Contact information</span></div>
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Email<span className="required">*</span></label>
                <input type="email" className={emailErrors.email ? 'error' : ''} value={emailForm.email} onChange={e => setEmailForm(f => ({ ...f, email: e.target.value }))} />
                {emailErrors.email && <div className="form-error">{emailErrors.email}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Phone<span className="required">*</span></label>
                <input type="tel" className={emailErrors.phone ? 'error' : ''} value={emailForm.phone} onChange={e => setEmailForm(f => ({ ...f, phone: e.target.value }))} />
                {emailErrors.phone && <div className="form-error">{emailErrors.phone}</div>}
              </div>
            </div>
            <button className="btn btn-primary btn-sm" onClick={handleEmailUpdate}><i className="ti ti-check" />Save changes</button>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Profile visibility</div>
                <div className="text-xs text-secondary">Allow other students to view your profile</div>
              </div>
              <ToggleSwitch checked={profileVisibility} onChange={v => { setProfileVisibility(v); addToast(v ? 'Profile visible' : 'Profile hidden', 'info'); }} />
            </div>
          </div>
        </div>
      )}

      {tab === 'notifications' && (
        <div className="card">
          <div className="card-header"><span className="card-title">Notification preferences</span></div>
          {[
            { key: 'certApproval', label: 'Certificate approval updates', desc: 'Get notified when your certificates are approved or rejected' },
            { key: 'scoreUpdates', label: 'Score updates', desc: 'Get notified when your score changes' },
            { key: 'announcements', label: 'Announcements', desc: 'Department-wide announcements and notices' },
            { key: 'leaderboard', label: 'Leaderboard changes', desc: 'Get notified when your rank changes' },
            { key: 'email', label: 'Email notifications', desc: 'Receive notifications via email as well' },
          ].map(item => (
            <div key={item.key} className="flex items-center justify-between" style={{ padding: '0.875rem 0', borderBottom: 'var(--border)' }}>
              <div>
                <div className="font-medium">{item.label}</div>
                <div className="text-xs text-secondary">{item.desc}</div>
              </div>
              <ToggleSwitch checked={notifSettings[item.key]} onChange={v => setNotifSettings(s => ({ ...s, [item.key]: v }))} />
            </div>
          ))}
        </div>
      )}

      {tab === 'privacy' && (
        <div className="card">
          <div className="card-header"><span className="card-title">Privacy settings</span></div>
          {[
            { key: 'showScore', label: 'Show my score publicly', desc: 'Other students can see your total score' },
            { key: 'showRank', label: 'Show my rank on leaderboard', desc: 'Appear on the public leaderboard' },
            { key: 'showProfile', label: 'Show my profile to faculty', desc: 'Faculty members can view your full profile' },
          ].map(item => (
            <div key={item.key} className="flex items-center justify-between" style={{ padding: '0.875rem 0', borderBottom: 'var(--border)' }}>
              <div>
                <div className="font-medium">{item.label}</div>
                <div className="text-xs text-secondary">{item.desc}</div>
              </div>
              <ToggleSwitch checked={privacySettings[item.key]} onChange={v => setPrivacySettings(s => ({ ...s, [item.key]: v }))} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// MAIN EXPORT — StudentPanel Router
// ──────────────────────────────────────────────────────────────
export default function StudentPanel({ student, students, faculty, config, addToast, updateStudents, activePage, setActivePage }) {
  const pages = {
    'dashboard': () => <DashboardPage student={student} students={students} config={config} />,
    'profile': () => <ProfilePage student={student} students={students} addToast={addToast} updateStudents={updateStudents} />,
    'upload-cert': () => <UploadCertPage student={student} students={students} config={config} addToast={addToast} updateStudents={updateStudents} setActivePage={setActivePage} />,
    'my-certificates': () => <MyCertsPage student={student} students={students} updateStudents={updateStudents} addToast={addToast} setActivePage={setActivePage} />,
    'achievements': () => <AchievementsPage student={student} students={students} updateStudents={updateStudents} addToast={addToast} />,
    'submission-tracker': () => <SubmissionTrackerPage student={student} />,
    'leaderboard': () => <LeaderboardPage student={student} students={students} />,
    'notifications': () => <NotificationsPage student={student} students={students} updateStudents={updateStudents} />,
    'score-breakdown': () => <ScoreBreakdownPage student={student} config={config} />,
    'settings': () => <SettingsPage student={student} students={students} updateStudents={updateStudents} addToast={addToast} />,
  };

  const renderPage = pages[activePage] || pages['dashboard'];
  return <div>{renderPage()}</div>;
}
