import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import './appHeader.css';

const AppHeader = ({ onMenuClick }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="app-header">
      {/* Hamburger — visible on mobile only */}
      <button className="header-menu-btn" onClick={onMenuClick} aria-label="Open menu">
        <FaBars size={20} />
      </button>

      <div className="header-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search drops, artists, collections..."
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <button className="search-clear-btn" onClick={() => setSearchValue('')}>
            <FaTimes />
          </button>
        )}
      </div>

      <div className="header-actions">
        <Link to="/about" className="header-btn header-btn--ghost">Sign In</Link>
      </div>
    </header>
  );
};

export default AppHeader;
