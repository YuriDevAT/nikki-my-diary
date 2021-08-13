import React, { useEffect, useState } from "react";

const HomeContent = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
    const intervalID = setInterval(() => {
      getQuote();
    }, 24 * 60 * 60 * 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const getQuote = () => {
    fetch("http://quotes.rest/qod.json?category=inspire")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      });
  };

  return (
    <div className="">
      <h2>{quote}</h2>
      <p>- {author}</p>
    </div>
  );
};

export default HomeContent;
