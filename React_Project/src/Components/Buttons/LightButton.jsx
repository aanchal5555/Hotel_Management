
import React from 'react';


const LightButton = ({ children, href }) => {
  return (
    <a href={href} className="btn btn-light py-md-3 px-md-5 animated slideInRight">
      {children}
    </a>
  );
};

export default LightButton;
