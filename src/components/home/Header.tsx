// Header.tsx
import React from 'react';
import IconLink, {IconType} from '@/components/common/IconLink';

const Header: React.FC = () => {
  return (
    <div id="header">
      <div className="top">
        {/* Logo */}
        <div id="logo">
          <span className="image avatar48"><img src="/images/avatar.jpg" alt="" /></span>
          <h1 id="title">Jane Doe</h1>
          <p>Hyperspace Engineer</p>
        </div>
        {/* Nav */}
        <nav id="nav">
          <ul>
            <IconLink href="#top" iconType={IconType.Home} label="Intro" />
            <IconLink href="#portfolio" iconType={IconType.Portfolio} label="Portfolio" />
            <IconLink href="#about" iconType={IconType.About} label="About Me" />
            <IconLink href="#contact" iconType={IconType.Contact} label="Contact" />
          </ul>
        </nav>
      </div>
      <div className="bottom">
        {/* Social Icons */}
        <ul className="icons">
          <IconLink href="#" iconType={IconType.Twitter} />
          <IconLink href="#" iconType={IconType.Facebook} />
          <IconLink href="#" iconType={IconType.Github} />
          <IconLink href="#" iconType={IconType.Dribbble} />
          <IconLink href="#" iconType={IconType.Email} />
        </ul>
      </div>
    </div>
  );
}

export default Header;
