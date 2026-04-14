import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import './appFooter.css';

const navLinks = [
  { label: 'Home',    path: '/' },
  { label: 'About',   path: '/about' },
  { label: 'Artists', path: '/artist' },
  { label: 'Gallery', path: '/gallery' },
];

const collectionLinks = [
  { label: 'New Arrivals',          path: '/' },
  { label: 'Headwear & Essentials', path: '/' },
];

const socialLinks = [
  { label: 'Instagram', path: '#', icon: FaInstagram },
  { label: 'Twitter / X', path: '#', icon: FaTwitter },
  { label: 'TikTok',    path: '#', icon: FaTiktok },
];

const AppFooter = () => (
  <footer className="footer">
    <div className="footer-grid">

      {/* Brand */}
      <div>
        <p className="footer-brand-name">OTF</p>
        <p className="footer-brand-tagline">Where the culture meets the cold</p>
      </div>

      {/* Navigate */}
      <div>
        <p className="footer-col-title">Navigate</p>
        <ul className="footer-links">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Collections */}
      <div>
        <p className="footer-col-title">Collections</p>
        <ul className="footer-links">
          {collectionLinks.map(({ label, path }) => (
            <li key={label}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social */}
      <div>
        <p className="footer-col-title">Follow Us</p>
        <div className="footer-social">
          {socialLinks.map(({ label, path, icon: Icon }) => (
            <a key={label} href={path} target="_blank" rel="noreferrer">
              <Icon />
              <span className="footer-social-label">{label}</span>
            </a>
          ))}
        </div>
      </div>

    </div>

    <div className="footer-bottom">
      © 2026 Off The Fire. All rights reserved.
    </div>
  </footer>
);

export default AppFooter;
