import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import LinkResult from './LinkResult';
import HomeBackground from './HomeBackground';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const [value, setValue] = useState('');

  const handleClick = () => {
    setInputValue(value);
    setValue('');
  };

  return (
    <div id='home'>
      <section>
        <h2>Short URL Generator</h2>
        <Typewriter
          options={{
            strings: ['Paste the URL to be Shortened', 'Get Started for free'],
            autoStart: true,
            loop: true,
            cursor: '',
            wrapperClassName: 'typewriterpara',
          }}
        />
        <div id='inputContainer'>
          <input
            type='text'
            name='input'
            id='inputUrl'
            placeholder='Enter the URL'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input type='button' value='Button' onClick={handleClick} />
        </div>
      </section>

      <section>
        <LinkResult inputValue={inputValue} />
      </section>

      <HomeBackground />
    </div>
  );
};

export default Home;
