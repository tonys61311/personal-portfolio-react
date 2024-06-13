// src/components/SideBar.tsx
import React from 'react';
import { PageType } from '@/types/PageType';

const SideBar: React.FC = () => {
    const pageItems = PageType.getAllPageTypes();

    return (
        <ul>
            {pageItems.map(item => (
                <li key={item.type}>
                    <a href={item.href}>
                        <span className={`icon ${item.iconClass}`}> {item.title} </span> 
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default SideBar;
