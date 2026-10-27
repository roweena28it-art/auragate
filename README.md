# AuraGate

AuraGate is a frontend-only LAN security and network monitoring dashboard built as a college mini-project.

## Stack
- React
- Vite
- JavaScript
- CSS
- Recharts

## Run
```bash
npm install
npm run dev
```

## Backend readiness
All sample devices, alerts, bandwidth data and settings are isolated from the UI. A future Flask backend can replace the mock data layer with `fetch()` calls without changing the main presentation components.

## Pages
- Dashboard
- Devices
- Bandwidth
- Security Alerts
- Settings

## Demo interactions
- Search and filter devices
- Open device details
- Mark devices authorized
- Block devices
- Filter security alerts
- Change monitoring/settings controls
- Responsive sidebar/navigation
