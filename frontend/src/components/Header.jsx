import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <h1>Techimax</h1>
      <main>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/services'}>Services</Link>
        <Link to={'/contact'}>Contact</Link>
      </main>
      <a href='mailto:bsharanyadav@gmail.com'>
        <button>Feedback</button>
      </a>
    </nav>
  );
}

export default Header;
