// IconLink.tsx
import React from 'react';

// types.ts
export enum IconTypeEnum {
  // Home = 'solid fa-home',
  // Portfolio = 'solid fa-th',
  // About = 'solid fa-user',
  // Contact = 'solid fa-envelope',
  Twitter = 'brands fa-twitter',
  Facebook = 'brands fa-facebook-f',
  Github = 'brands fa-github',
  Dribbble = 'brands fa-dribbble',
  Email = 'solid fa-envelope'
}

class IconType {
  constructor(public type: IconTypeEnum) { }

  get href(): string {
      return `#${this.type}`;
  }

  get iconClass(): string {
      return this.type;
  }

  static getAllIconTypes(): IconType[] {
      return Object.values(IconTypeEnum).map(type => new IconType(type));
  }
}

const IconLinks: React.FC = () => {
  const iconItems = IconType.getAllIconTypes();
  return (
    <ul className="icons">
        {iconItems.map(item => (
                <li key={item.type}>
                    <a href={item.href} className={`icon ${item.iconClass}`}></a>
                </li>
            ))}
    </ul>
  );
}

export default IconLinks;
