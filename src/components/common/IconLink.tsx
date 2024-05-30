// IconLink.tsx
import React from 'react';

// types.ts
export enum IconType {
  Home = 'solid fa-home',
  Portfolio = 'solid fa-th',
  About = 'solid fa-user',
  Contact = 'solid fa-envelope',
  Twitter = 'brands fa-twitter',
  Facebook = 'brands fa-facebook-f',
  Github = 'brands fa-github',
  Dribbble = 'brands fa-dribbble',
  Email = 'solid fa-envelope'
}

export interface IconLinkProps {
  href: string;
  iconType: IconType;
  label?: string; 
  id?: string;
}


const IconLink: React.FC<IconLinkProps> = ({ href, iconType, label, id }) => {
  return (
    <li>
      {label ? (
        <a href={href} id={id}>
          <span className={`icon ${iconType}`}>{label}</span>
        </a>
      ) : (
        <a href={href} id={id} className={`icon ${iconType}`}></a>
      )}
    </li>
  );
}

export default IconLink;
