import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const data = [
  { label: 'Mrinal Chaubey', to: '/' },
  { label: 'ABOUT US', to: '/about' },
  { label: 'PROJECTS', to: '/portfolio' },
  { label: 'RESUME', to: '/resume' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'CONTACT', to: '/contact' },
];

export default function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          {/* Removed logo icon */}

          <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
            {data.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <Link className="navbar__container__menu__item__links" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
}
