import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <nav className='body-padding'>
      <div>
        <h1>The Aritifact</h1>
        <p>
          <em>Culture & Art blog</em>
        </p>
      </div>
      <ul>
        <li>
          <a href='#'>Blog</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;