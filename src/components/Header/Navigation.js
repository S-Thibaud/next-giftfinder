import React from 'react';

import classes from './Navigation.module.css';
import { Link } from '@mui/icons-material';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          {' '}
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
        <Link href="/categories">
            <a>Categorieën</a>
          </Link>
        </li>
        <li>
        <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        {props.isLoggedIn && (
          <li>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
