import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DeviceModal from "./components/DeviceModal";
import { initialDevices, bandwidthData, trafficData, initialAlerts, defaultSettings } from "./data/mockData";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Bandwidth from "./pages/Bandwidth";
import SecurityAlerts from "./pages/SecurityAlerts";
import Settings from "./pages/Settings";

export default function App() {
  const [page, setPage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [devices, setDevices] = useState(initialDevices);
  const [alerts] = useState(initialAlerts);
  const [selected, setSelected] = useState(null);
  const [globalSearch, setGlobalSearch] = useState("");
  const [settings, setSettings] = useState(defaultSettings);

  const updateDevice = (id, status) => {
    setDevices(list => list.map(d => d.id === id ? {...d, status, lastSeen: status === "Blocked" ? "Blocked" : d.lastSeen} : d));
    setSelected(d => d ? {...d, status, lastSeen: status === "Blocked" ? "Blocked" : d.lastSeen} : d);
  };

  let content;
  const common = { devices, alerts, bandwidth: bandwidthData, traffic: trafficData };
  if (page === "Dashboard") content = <Dashboard {...common} onSelect={setSelected}/>;
  if (page === "Devices") content = <Devices devices={devices} onSelect={setSelected} globalSearch={globalSearch}/>;
  if (page === "Bandwidth") content = <Bandwidth devices={devices} data={bandwidthData}/>;
  if (page === "Security Alerts") content = <SecurityAlerts alerts={alerts}/>;
  if (page === "Settings") content = <Settings settings={settings} setSettings={setSettings}/>;

  return <div className="app-shell">
    <Sidebar page={page} setPage={setPage} open={sidebarOpen} setOpen={setSidebarOpen}/>
    <div className="main-shell">
      <Topbar page={page} onMenu={() => setSidebarOpen(true)} search={globalSearch} setSearch={setGlobalSearch}/>
      <main>{content}</main>
    </div>
    <DeviceModal device={selected} onClose={()=>setSelected(null)} onAuthorize={d=>updateDevice(d.id,"Authorized")} onBlock={d=>updateDevice(d.id,"Blocked")}/>
  </div>;
}
