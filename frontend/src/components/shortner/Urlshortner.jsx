import React, { useState } from "react";
import copy from "copy-to-clipboard";
import "./urlshortner.css";

function Urlshortner() {
  const hostUrl = window.location.href;

  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(true);

  const copyUrl = () => {
    copy(hostUrl + shortUrl.shortId);
    setCopied(false);
    setTimeout(() => {
      setCopied(true);
    }, 3000);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (longUrl.length === 0) {
      window.alert("Input field can't be empty");
    } else {
      try {
        const response = await fetch("/api/urls", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            longUrl: longUrl,
          }),
        });
        const data = await response.json();
        setShortUrl(data);
        setLongUrl("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <h1 className="heading">Get your URL shortened!</h1>
      <div className="wrapper">
        <div className="form">
          <form onSubmit={submitHandler}>
            <div>
              <input
                type="text"
                placeholder="paste your long URL here"
                value={longUrl}
                onChange={(e) => {
                  setLongUrl(e.target.value);
                }}
              />
              <button type="submit" className="shorten">
                Shorten URL
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="shortend URL"
                value={shortUrl ? `${hostUrl}${shortUrl.shortId}` : null}
              />

              {copied ? (
                <button className="copy" onClick={copyUrl}>
                  Copy URL
                </button>
              ) : (
                <button className="copy">Copied</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Urlshortner;
