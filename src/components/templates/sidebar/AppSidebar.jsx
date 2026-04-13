import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaImages, FaInfoCircle, FaTimes } from 'react-icons/fa';
import './appSidebar.css';

const navItems = [
  { id: 0, label: 'Home',    path: '/',        icon: FaHome },
  { id: 1, label: 'About',   path: '/about',   icon: FaInfoCircle },
  { id: 2, label: 'Artists', path: '/artist',  icon: FaUsers },
  { id: 3, label: 'Gallery', path: '/gallery', icon: FaImages },
];

const AppSidebar = ({ isOpen, onClose }) => (
  <>
    {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar-logo">
        <span className="sidebar-logo-text">OTF</span>
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
          <FaTimes />
        </button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ id, label, path, icon: Icon }) => (
          <NavLink
            key={id}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `sidebar-link${isActive ? ' sidebar-link--active' : ''}`
            }
            onClick={onClose}
          >
            <Icon className="sidebar-link-icon" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  </>
);

export default AppSidebar;
