import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const animations = {
    form: {
      initial: {
        x: '-100%',
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: '-100%',
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div id='contact'>
      <section>
        <motion.form {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Your Name'
            required
          />
          <input
            type='email'
            placeholder='Your Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            placeholder='Your Message'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.button {...animations.button} type='submit'>
            Send
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
};

export default Contact;
