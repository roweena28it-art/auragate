export default function AlertList({ alerts, compact = false }) {
  return (
    <div className={`alert-list ${compact ? "compact" : ""}`}>
      {alerts.length ? alerts.map(a => (
        <div className="alert-row" key={a.id}>
          <span className={`severity-dot severity-${a.severity.toLowerCase()}`}></span>
          <div className="alert-copy">
            <strong>{a.title}</strong>
            <span>{a.description}</span>
            <small>{a.device}</small>
          </div>
          <time>{a.time}</time>
          {!compact && <span className={`severity-text severity-text-${a.severity.toLowerCase()}`}>{a.severity}</span>}
        </div>
      )) : <div className="empty">No security events match this filter.</div>}
    </div>
  );
}
