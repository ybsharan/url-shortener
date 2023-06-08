import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={'https://i.ibb.co/kgQmkwk/techimax.jpg'} alt='Founder' />

        <h2>Founder and CEO</h2>
        <p>COPYRIGHT © 2023 Techimax</p>
        <p>ALL RIGHTS RESERVED</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href='https://www.linkedin.com/in/baidehi-sharan-yadav-9067221a1/'
            target={'blank'}
          >
            <AiFillLinkedin />
          </a>

          <a href='https://github.com/ybsharan' target={'blank'}>
            <AiFillGithub />
          </a>
          <a href='https://instagram.com/ysharan79' target={'blank'}>
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href='#home'>
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
