import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';

const MainNav = () => {
  const className: NavLinkProps['className'] = ({ isActive }) =>
    clsx('nav-link', { 'router-link-exact-active': isActive });

  return (
    <div className='navbar-nav mr-auto'>
      <NavLink to='/' className={className}>
        Home
      </NavLink>
      <NavLink to='/profile' className={className}>
        Profile
      </NavLink>
      <NavLink to='/external-api' className={className}>
        External API
      </NavLink>
    </div>
  );
};

export default MainNav;
