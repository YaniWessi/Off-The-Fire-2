import React from 'react';

const AppButton = ({ classname, btnCb, children }) =>
  <button className={classname} onClick={btnCb}>{ children }</button>

export default AppButton;  
  