import axios from "axios";
import { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import ShareButtons from "./ShareButtons";

const Home = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [generateQR, setGenerateQR] = useState(false);

  const handleInputChange = (event) => {
    const url = event.target.value;
    setOriginalUrl(url);
  };

  const shortenURL = () => {
    if (!originalUrl) {
      setUrlError("Insira uma URL.");
      return;
    }

    const bitlyAPIKey = "3a0a96508e33defab26350263b1175a0570d9ccb";

    axios
      .post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: originalUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${bitlyAPIKey}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setShortUrl(response.data.link);
        setUrlError(""); 
      })
      .catch((error) => {
        setUrlError("Erro verifique sua URL e tente novamente.");
      });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="form-control">
          <label htmlFor="url">
            URL
            <input
              type="text"
              placeholder="Insira a URL"
              value={originalUrl}
              onChange={handleInputChange}
            />
            {urlError && <p className="error-message">{urlError}</p>}
          </label>
        </div>

        <label>
          Gerar Código QR:
          <input
            type="checkbox"
            checked={generateQR}
            onChange={() => setGenerateQR(!generateQR)}
          />
        </label>
      
      {shortUrl && (
        <div className="result">
          <p className="shorted-url">
            URL encurtada:{" "}
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </p>
          <div className="qr-code">
            {generateQR && <QRCode value={shortUrl} size={128} />}
          </div>
        </div>
      )}
        <button className="btn btn-shorten" onClick={shortenURL}>
          Encurtar
        </button>
      </div>
      <ShareButtons shortUrl={shortUrl} />
    </div>
  );
};

export default Home;
