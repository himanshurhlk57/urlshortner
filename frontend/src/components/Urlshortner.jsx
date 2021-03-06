import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
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
        console.log(data);
        setShortUrl(data);
        setLongUrl("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <h1 className="heading"> URL SHORTNER</h1>
      <div className="wrapper">
        <div className="form">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Shorten your link"
              value={longUrl}
              onChange={(e) => {
                setLongUrl(e.target.value);
              }}
            />
            <Button variant="secondary" type="submit" className="shorten">
              Shorten
            </Button>
            <Button
              variant="outline-danger"
              className="reset"
              onClick={(e) => {
                setLongUrl("");
              }}
            >
              Reset
            </Button>
          </form>
        </div>
        <div className="result">
          {shortUrl ? (
            <Card className="card">
              <Card.Header className="cardHeading">Shorten Link</Card.Header>
              <Card.Body>
                <Card.Text>
                  <h5 className="shorturl">
                    {`${hostUrl}${shortUrl.shortId}`}
                  </h5>
                </Card.Text>

                {copied ? (
                  <Button variant="info" onClick={copyUrl}>
                    Copy Link
                  </Button>
                ) : (
                  <Button variant="success">Copied</Button>
                )}
              </Card.Body>
            </Card>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Urlshortner;
