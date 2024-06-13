// Header.tsx
import React from 'react';
import IconLinks from '@/components/common/IconLinks';
import SideBar from '@/components/common/SideBar';

const Header: React.FC = () => {
  return (
    <div id="header">
      <div className="top">
        {/* Logo */}
        <div id="logo">
          <span className="image avatar48"><img src="/images/avatar_square.jpg" alt="" className='rounded-full' /></span>
          <h1 id="title">Hsing-Chen (Tony) Lin</h1>
          <p>Front-End Engineer</p>
        </div>
        {/* Nav */}
        <nav id="nav">
          <SideBar />
        </nav>
      </div>
      <div className="bottom">
        {/* Social Icons */}
        <IconLinks />
      </div>
    </div>
  );
}

export default Header;
