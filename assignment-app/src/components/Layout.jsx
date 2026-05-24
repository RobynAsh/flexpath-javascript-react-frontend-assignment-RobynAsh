import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navbar-brand ms-4 nav-link mb-0 ${isActive ? 'fw-bold' : 'text-secondary'}`
          }
        >
          User Behavior Data
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `navbar-brand ms-4 nav-link mb-0 ${isActive ? 'fw-bold' : 'text-secondary'}`
          }
        >
          Search Through Dataset
        </NavLink>
      </nav>
      <hr />
      {children}
    </div>
  );
};

export default Layout;
