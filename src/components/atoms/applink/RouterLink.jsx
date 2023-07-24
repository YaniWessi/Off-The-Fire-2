import React from 'react';
import { Link } from 'react-router-dom';

const RouterLink = ({link: {path, label}}) => 
  <Link to={path}>{label}</Link>

export default RouterLink;  
