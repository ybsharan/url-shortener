import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className='noData'> Loading...</p>;
  }
  if (error) {
    return <p className='noData'> Something Went Wrong</p>;
  }

  return (
    <>
      {shortenLink && (
        <div id='result'>
          <p>{shortenLink}</p>

          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? 'copied' : ''}>Copy</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
