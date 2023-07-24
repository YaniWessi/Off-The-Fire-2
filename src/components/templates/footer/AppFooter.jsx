import React from 'react';
import SectionLinks from '../../molecules/section-links/SectionLinks';
import footer1 from '../../../assets/config/footerLinks.json';
import footer2 from '../../../assets/config/footerLinks2.json';
import '../templateStyles.css';


const AppFooter = () => 
<footer className="footer">
  <SectionLinks sectionId='footer-one' sectionTitle="" links={footer1} classname={'section-one'} />
  <SectionLinks sectionId='footer-two' sectionTitle="" links={footer2} classname={'section-two'} />
</footer>

export default AppFooter;