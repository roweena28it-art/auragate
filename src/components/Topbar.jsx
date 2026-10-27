import { Icon } from "./Icons";

export default function Topbar({ page, onMenu, search, setSearch }) {
  return (
    <header className="topbar">
      <div className="top-left">
        <button className="mobile-menu" onClick={onMenu}><Icon name="menu"/></button>
        <div>
          <div className="eyebrow">NETWORK ADMINISTRATION</div>
          <h1>{page}</h1>
        </div>
      </div>
      <div className="top-actions">
        <label className="global-search">
          <Icon name="search" size={16}/>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search devices..." />
        </label>
        <span className="online-status"><span className="status-dot"></span>Network Online</span>
        <div className="profile"><span className="avatar">AP</span><span className="profile-name">Administrator</span></div>
      </div>
    </header>
  );
}
