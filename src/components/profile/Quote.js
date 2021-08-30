/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import Loading from '../../utils/Loading';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getQuote();
    const intervalID = setInterval(() => {
      getQuote();
    }, 24 * 60 * 60 * 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const getQuote = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const res = await fetch('https://quotes.rest/qod.json?category=inspire');
      const json = await res.json();
      setQuote(json.contents.quotes[0].quote);
      setAuthor(json.contents.quotes[0].author);
    } catch (err) {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="text-xl flex items-center h-full">
      {error && (
        <p>
          I would be a motivating quote but unfortunately something went wrong.
        </p>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="overflow-auto pt-2 h-full">
          <h1>{quote}</h1>
          <p className="text-right italic text-sm">{author}</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
