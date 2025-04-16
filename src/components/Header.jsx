import React, { useState, useRef, useEffect } from 'react';
import Logo from "../assets/carelog logo 1.png";
import Search from "../assets/Group.png"
import Box from "../assets/box.png"
import Drop from "../assets/lucide_chevron-down.png"
import Frame from "../assets/Frame.png"

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
        <div className="logo-container">
          <div className="logo">
            <img className='logo-img' src={Logo}/>
            <span className="logo-text">Carelog</span>
          </div>
        </div>

      <div className='header-remainder'>
        <div className='search-container'>
            <input type="text" className='searching' placeholder="Search" />
            <button className='search-icon'>
            <img src={Search} className='search' />
            </button>
        </div>

        <div className='date'>
            <div className="date-picker">
              <img src={Box} className="date-picker-icon" />
              <span className="date-picker-text">Sep 2024</span>
            </div>

            <div className="dropdown" ref={dropdownRef}>
              <span className="dropdown-button-text">Monthly</span>
              <button 
                className="dropdown-button" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img className="dropdown-icon" src={Drop} />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <button className="dropdown-item"><span className='dropdown-text'>Monthly</span></button>
                  <button className="dropdown-item"><span className='dropdown-text-2'>Yearly</span></button>
                  <button className="dropdown-item-3"><span className='dropdown-text'>Recently</span></button>
                </div>
              )}
            </div>
        </div>
        
        <div className="user-profile">
          <div className="user-avatar">
            <img src={Frame} alt="Dr. Martins James" />
          </div>
          <div className="user-info">
            <p className="user-name">Dr Martins James</p>
            <p className="user-role">Senior Doctor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;