export default function StatStrip({ stats }) {
  return (
    <div className="stat-strip">
      {stats.map((s, i) => (
        <div className="stat-item" key={s.label}>
          <span>{s.label}</span>
          <strong className={s.tone || ""}>{s.value}</strong>
        </div>
      ))}
    </div>
  );
}
