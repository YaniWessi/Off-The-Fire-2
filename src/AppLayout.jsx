import { useState } from 'react';
import AppHeader from './components/templates/header/AppHeader';
import AppSidebar from './components/templates/sidebar/AppSidebar';
import './components/templates/layout.css';

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <AppSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="app-main">
        <AppHeader onMenuClick={() => setSidebarOpen(prev => !prev)} />
        <main className="app-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
