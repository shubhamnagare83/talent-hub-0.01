// ============================================================
// CertTrack Pro — Shared Components
// ============================================================
import React, { useState, useEffect, useRef } from 'react';
import { getInitials, getScoreColor } from '../scoreEngine';

// ========== Avatar ==========
export function Avatar({ name, role = 'student', size = 'md', className = '' }) {
  const cls = `avatar avatar-${size} avatar-${role} ${className}`;
  return <div className={cls}>{getInitials(name)}</div>;
}

// ========== Score Ring (SVG, animated) ==========
export function ScoreRing({ score, size = 120, strokeWidth = 8, showLabel = true }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(score), 50);
    return () => clearTimeout(timer);
  }, [score]);

  const offset = circumference - (animatedScore / 100) * circumference;
  const color = getScoreColor(score);

  return (
    <div className="score-ring-container" style={{ width: size, height: size }}>
      <svg className="score-ring-svg" width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--color-background-secondary)" strokeWidth={strokeWidth} />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1s ease, stroke 0.5s ease' }} />
      </svg>
      {showLabel && (
        <div className="score-ring-center">
          <div style={{ fontSize: size > 80 ? 26 : 16, fontWeight: 500, color }}>{score}</div>
          {size > 80 && <div style={{ fontSize: 10, color: 'var(--color-text-secondary)' }}>out of 100</div>}
        </div>
      )}
    </div>
  );
}

// ========== Category Bars ==========
export function CategoryBars({ categoryScores, config }) {
  const cats = [
    { key: 'academics', label: 'Academics', icon: 'ti-school', color: 'var(--primary)' },
    { key: 'internships', label: 'Internships', icon: 'ti-briefcase', color: '#2563EB' },
    { key: 'placements', label: 'Placements', icon: 'ti-building', color: '#7C3AED' },
    { key: 'hackathons', label: 'Hackathons', icon: 'ti-trophy', color: '#DC2626' },
    { key: 'projects', label: 'Projects', icon: 'ti-code', color: '#059669' },
    { key: 'certifications', label: 'Certifications', icon: 'ti-certificate', color: '#D97706' },
    { key: 'sports', label: 'Sports', icon: 'ti-run', color: '#0891B2' },
  ];
  return (
    <div className="cat-bars">
      {cats.map(c => {
        const pts = categoryScores?.[c.key] || 0;
        const max = config[c.key] || 10;
        const pct = Math.min(100, (pts / max) * 100);
        return (
          <div key={c.key} className="cat-bar-row" title={`${c.label}: ${pts}/${max} points`}>
            <span className="cat-bar-label"><i className={`ti ${c.icon}`} style={{ marginRight: 4 }} />{c.label}</span>
            <div className="cat-bar-wrap">
              <div className="cat-bar-bg"><div className="cat-bar-fill" style={{ width: `${pct}%`, background: c.color }} /></div>
            </div>
            <span className="cat-bar-pts">{pts}/{max}</span>
          </div>
        );
      })}
    </div>
  );
}

// ========== Toast Container ==========
export function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="toast-container">
      {toasts.slice(0, 3).map(t => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          <i className={`toast-icon ti ${t.type === 'success' ? 'ti-check' : t.type === 'error' ? 'ti-x' : t.type === 'warning' ? 'ti-alert-triangle' : 'ti-info-circle'}`}
            style={{ color: t.type === 'success' ? 'var(--success)' : t.type === 'error' ? 'var(--danger)' : t.type === 'warning' ? 'var(--warning)' : 'var(--primary)' }} />
          <div className="toast-content"><div className="toast-message">{t.message}</div></div>
          <button className="toast-close" onClick={() => removeToast(t.id)}><i className="ti ti-x" /></button>
        </div>
      ))}
    </div>
  );
}

// ========== Confirmation Modal ==========
export function ConfirmModal({ title, message, confirmLabel = 'Confirm', confirmType = 'danger', onConfirm, onCancel }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onCancel(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onCancel]);

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal modal-sm" onClick={e => e.stopPropagation()}>
        <div className="modal-body" style={{ textAlign: 'center', padding: '2rem' }}>
          <i className="ti ti-alert-triangle" style={{ fontSize: 40, color: 'var(--warning)', marginBottom: 12 }} />
          <h3 style={{ fontSize: 16, fontWeight: 500, marginBottom: 8 }}>{title}</h3>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 20 }}>{message}</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
            <button className={`btn btn-${confirmType}`} onClick={onConfirm}>{confirmLabel}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== Generic Modal ==========
export function Modal({ title, children, onClose, size = '', footer }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal ${size ? 'modal-' + size : ''}`} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <button className="modal-close" onClick={onClose}><i className="ti ti-x" /></button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

// ========== Badge ==========
export function StatusBadge({ status }) {
  const map = {
    'approved': { cls: 'badge-success', icon: 'ti-check', label: 'Approved' },
    'pending': { cls: 'badge-warning', icon: 'ti-clock', label: 'Pending' },
    'rejected': { cls: 'badge-danger', icon: 'ti-x', label: 'Rejected' },
    'info-requested': { cls: 'badge-purple', icon: 'ti-help', label: 'Info requested' },
    'active': { cls: 'badge-success', icon: 'ti-check', label: 'Active' },
    'inactive': { cls: 'badge-gray', icon: 'ti-ban', label: 'Inactive' },
    'completed': { cls: 'badge-success', icon: 'ti-check', label: 'Completed' },
    'ongoing': { cls: 'badge-primary', icon: 'ti-loader', label: 'Ongoing' },
  };
  const m = map[status] || { cls: 'badge-gray', icon: 'ti-minus', label: status };
  return <span className={`badge ${m.cls}`}><i className={`ti ${m.icon}`} style={{ fontSize: 11 }} /> {m.label}</span>;
}

// ========== Tabs ==========
export function Tabs({ tabs, active, onChange }) {
  return (
    <div className="tabs">
      {tabs.map(t => (
        <button key={t.key} className={`tab-btn ${active === t.key ? 'active' : ''}`} onClick={() => onChange(t.key)}>
          {t.label}{t.count !== undefined ? ` (${t.count})` : ''}
        </button>
      ))}
    </div>
  );
}

// ========== Pagination ==========
export function Pagination({ total, page, perPage, onChange }) {
  const pages = Math.ceil(total / perPage);
  if (pages <= 1) return null;
  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, total);
  return (
    <div className="pagination">
      <span className="pagination-info">Showing {start}–{end} of {total} results</span>
      <div className="pagination-controls">
        <button className="page-btn btn-sm" disabled={page <= 1} onClick={() => onChange(page - 1)}>Previous</button>
        {Array.from({ length: Math.min(pages, 7) }, (_, i) => i + 1).map(p => (
          <button key={p} className={`page-btn ${p === page ? 'active' : ''}`} onClick={() => onChange(p)}>{p}</button>
        ))}
        <button className="page-btn btn-sm" disabled={page >= pages} onClick={() => onChange(page + 1)}>Next</button>
      </div>
    </div>
  );
}

// ========== Empty State ==========
export function EmptyState({ icon = 'ti-inbox', heading, text, action }) {
  return (
    <div className="empty-state">
      <i className={`ti ${icon} empty-icon`} />
      <div className="empty-heading">{heading}</div>
      {text && <div className="empty-text">{text}</div>}
      {action}
    </div>
  );
}

// ========== Search Input ==========
export function SearchInput({ value, onChange, placeholder = 'Search...' }) {
  return (
    <div className="input-with-icon search-input">
      <i className="ti ti-search input-icon" />
      <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}

// ========== Stat Card ==========
export function StatCard({ icon, iconBg, iconColor, value, label, trend, trendDir }) {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ background: iconBg, color: iconColor }}>
        <i className={`ti ${icon}`} />
      </div>
      <div className="stat-body">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
        {trend !== undefined && (
          <div className={`stat-trend ${trendDir === 'up' ? 'trend-up' : 'trend-down'}`}>
            <i className={`ti ${trendDir === 'up' ? 'ti-trending-up' : 'ti-trending-down'}`} style={{ fontSize: 12 }} /> {trend}
          </div>
        )}
      </div>
    </div>
  );
}

// ========== SVG Line Chart ==========
export function LineChart({ data, width = 400, height = 160, color = 'var(--primary)' }) {
  if (!data || data.length < 2) return null;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const w = width - padding.left - padding.right;
  const h = height - padding.top - padding.bottom;
  const maxY = Math.max(...data.map(d => d.value), 10);
  const minY = Math.min(...data.map(d => d.value), 0);
  const rangeY = maxY - minY || 1;

  const points = data.map((d, i) => ({
    x: padding.left + (i / (data.length - 1)) * w,
    y: padding.top + h - ((d.value - minY) / rangeY) * h,
    ...d
  }));

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = pathD + ` L ${points[points.length - 1].x} ${padding.top + h} L ${points[0].x} ${padding.top + h} Z`;

  return (
    <svg width={width} height={height} className="area-chart">
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map((f, i) => (
        <line key={i} x1={padding.left} x2={padding.left + w} y1={padding.top + h * (1 - f)} y2={padding.top + h * (1 - f)}
          stroke="var(--color-border-tertiary)" strokeWidth={0.5} />
      ))}
      {/* Y axis labels */}
      {[0, 0.5, 1].map((f, i) => (
        <text key={i} x={padding.left - 8} y={padding.top + h * (1 - f) + 3} textAnchor="end"
          fill="var(--color-text-muted)" fontSize={10}>{Math.round(minY + f * rangeY)}</text>
      ))}
      {/* Area fill */}
      <path d={areaD} fill={color} opacity={0.08} />
      {/* Line */}
      <path d={pathD} fill="none" stroke={color} strokeWidth={2} />
      {/* Dots + labels */}
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={3.5} fill={color} />
          <text x={p.x} y={padding.top + h + 16} textAnchor="middle" fill="var(--color-text-muted)" fontSize={9}>{p.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ========== SVG Bar Chart ==========
export function BarChart({ data, width = 400, height = 180, color = 'var(--primary)' }) {
  if (!data || data.length === 0) return null;
  const padding = { top: 20, right: 10, bottom: 30, left: 40 };
  const w = width - padding.left - padding.right;
  const h = height - padding.top - padding.bottom;
  const maxVal = Math.max(...data.map(d => d.value), 1);
  const barWidth = Math.min(32, (w / data.length) * 0.6);
  const gap = (w - barWidth * data.length) / (data.length + 1);

  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const barH = (d.value / maxVal) * h;
        const x = padding.left + gap * (i + 1) + barWidth * i;
        const y = padding.top + h - barH;
        return (
          <g key={i} className="bar-chart-group">
            <rect x={x} y={y} width={barWidth} height={barH} rx={3} fill={d.color || color} />
            <text x={x + barWidth / 2} y={y - 4} textAnchor="middle" fill="var(--color-text-primary)" fontSize={10} fontWeight={500}>{d.value}</text>
            <text x={x + barWidth / 2} y={padding.top + h + 14} textAnchor="middle" fill="var(--color-text-muted)" fontSize={9}>{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ========== SVG Pie Chart ==========
export function PieChart({ data, size = 160 }) {
  if (!data || data.length === 0) return null;
  const total = data.reduce((s, d) => s + d.value, 0);
  if (total === 0) return null;
  const cx = size / 2, cy = size / 2, r = size / 2 - 8;
  let cumAngle = -90;

  const slices = data.map(d => {
    const angle = (d.value / total) * 360;
    const startAngle = cumAngle;
    cumAngle += angle;
    const endAngle = cumAngle;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const largeArc = angle > 180 ? 1 : 0;
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    const d_attr = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    return { ...d, d: d_attr };
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <svg width={size} height={size}>
        {slices.map((s, i) => <path key={i} d={s.d} fill={s.color} opacity={0.85} />)}
      </svg>
      <div>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4, fontSize: 12 }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: d.color, flexShrink: 0 }} />
            <span style={{ color: 'var(--color-text-secondary)' }}>{d.label}: <strong>{d.value}</strong></span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========== Radar Chart ==========
export function RadarChart({ values, labels, size = 200 }) {
  const n = labels.length;
  const cx = size / 2, cy = size / 2, r = size / 2 - 30;
  const angleStep = (2 * Math.PI) / n;

  const getPoint = (i, val) => ({
    x: cx + r * val * Math.cos(angleStep * i - Math.PI / 2),
    y: cy + r * val * Math.sin(angleStep * i - Math.PI / 2)
  });

  const gridLevels = [0.25, 0.5, 0.75, 1];

  return (
    <svg width={size} height={size} className="radar-container">
      {/* Grid */}
      {gridLevels.map((lvl, li) => (
        <polygon key={li}
          points={Array.from({ length: n }, (_, i) => { const p = getPoint(i, lvl); return `${p.x},${p.y}`; }).join(' ')}
          fill="none" stroke="var(--color-border-tertiary)" strokeWidth={0.5} />
      ))}
      {/* Axes */}
      {Array.from({ length: n }, (_, i) => {
        const p = getPoint(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--color-border-tertiary)" strokeWidth={0.5} />;
      })}
      {/* Data polygon */}
      <polygon
        points={values.map((v, i) => { const p = getPoint(i, v); return `${p.x},${p.y}`; }).join(' ')}
        fill="var(--primary)" fillOpacity={0.15} stroke="var(--primary)" strokeWidth={1.5} />
      {/* Data points */}
      {values.map((v, i) => { const p = getPoint(i, v); return <circle key={i} cx={p.x} cy={p.y} r={3} fill="var(--primary)" />; })}
      {/* Labels */}
      {labels.map((l, i) => {
        const p = getPoint(i, 1.2);
        return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontSize={9} fill="var(--color-text-secondary)">{l}</text>;
      })}
    </svg>
  );
}

// ========== Toggle Switch ==========
export function ToggleSwitch({ checked, onChange }) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
      <span className="toggle-slider" />
    </label>
  );
}

// ========== Format date helper ==========
export function formatDate(dateStr) {
  if (!dateStr) return '—';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch { return dateStr; }
}

export function formatDateTime(dateStr) {
  if (!dateStr) return '—';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  } catch { return dateStr; }
}

export function timeAgo(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - d) / 1000);
  if (diff < 60) return 'Just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return formatDate(dateStr);
}
