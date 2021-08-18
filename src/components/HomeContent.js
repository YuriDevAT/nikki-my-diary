import React, { useEffect, useState } from "react";

const HomeContent = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
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
      const res = await fetch("http://quotes.rest/qod.json?category=inspire");
      const json = await res.json();
      setQuote(json.contents.quotes[0].quote);
      setAuthor(json.contents.quotes[0].author);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-400 h-36 flex justify-center items-center">
      {error && (
        <p>
          I would be a motivating quote but unfortunately something went wrong.
        </p>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{quote}</h2>
          <p className="float-right">- {author}</p>
        </div>
      )}
    </div>
  );
};

export default HomeContent;
