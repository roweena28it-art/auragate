export const Icon = ({ name, size = 17 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    dashboard: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    devices: <><rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8M12 17v4"/></>,
    bandwidth: <><path d="M3 12h4l2-7 4 14 2-7h6"/><path d="M3 19h18"/></>,
    alerts: <><path d="M10.3 4.3a2 2 0 0 1 3.4 0l6.1 11a2 2 0 0 1-1.7 3H5.9a2 2 0 0 1-1.7-3z"/><path d="M12 9v4M12 16h.01"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.5 1.5-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2.12v-.4a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.5-1.5.06-.06A1.7 1.7 0 0 0 9.4 15a1.7 1.7 0 0 0-1.56-1.03H7.4v-2.12h.44A1.7 1.7 0 0 0 9.4 10.8a1.7 1.7 0 0 0-.34-1.88L9 8.86l1.5-1.5.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.03-1.56V5.8h2.12v.4a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.5 1.5-.06.06A1.7 1.7 0 0 0 19.4 10.8a1.7 1.7 0 0 0 1.56 1.03h.44v2.12h-.44A1.7 1.7 0 0 0 19.4 15z"/></>,
    search: <><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    user: <><circle cx="12" cy="8" r="3"/><path d="M5 20c.7-3.1 3-5 7-5s6.3 1.9 7 5"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    refresh: <><path d="M20 11a8 8 0 0 0-14.9-3L3 11"/><path d="M3 5v6h6"/><path d="M4 13a8 8 0 0 0 14.9 3L21 13"/><path d="M21 19v-6h-6"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
};
