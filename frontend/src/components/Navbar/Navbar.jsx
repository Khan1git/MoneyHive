import React, { useState } from 'react';
import { LayoutDashboard, CreditCard, ListOrdered, ReceiptText, ShoppingCart, CircleDollarSign } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`l-navbar ${isExpanded ? 'expander' : ''}`} id="navbar">
      <nav className="nav">
        <div>
          <div className="nav__brand">
            <button className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              <LayoutDashboard />
            </button>
          </div>
          <div className="nav__list">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}>
              <LayoutDashboard />
              <span className="nav__name">Dashboard</span>
            </NavLink>
            <NavLink to="/form" className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}>
            <CircleDollarSign />
              <span className="nav__name">Form</span>
            </NavLink>
            <NavLink to="/expense" className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}>
              <ReceiptText />
              <span className="nav__name">Place Order</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
