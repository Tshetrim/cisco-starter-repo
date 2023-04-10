import React from 'react';

const Exhibit = ({ title, children }) => {
  return (
    <div className="exhibit">
      <h2 className="exhibit-title">{title}</h2>
      <div className="exhibit-content">{children}</div>
    </div>
  );
};

export default Exhibit;
