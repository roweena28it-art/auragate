export default function Section({ title, subtitle, action, children, className = "" }) {
  return (
    <section className={`section ${className}`}>
      <div className="section-head">
        <div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>
        {action}
      </div>
      {children}
    </section>
  );
}
