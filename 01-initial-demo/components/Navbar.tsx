import React from 'react';
import styles from './NavBar.module.css';
import ActiveLink from './ActiveLink';
export const Navbar = () => {
  const menuItems = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
  ];
  return (
    <div className={styles['menu-container']}>
      {menuItems.map((item) => (
        <ActiveLink key={item.text} href={item.href}>
          {item.text}
        </ActiveLink>
      ))}
    </div>
  );
};

export default Navbar;
