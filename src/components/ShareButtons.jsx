import React from "react";
import {
  BsWhatsapp,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";

function ShareButtons({ shortUrl }) {
  // Funções para compartilhar 
  const shareOnFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shortUrl
    )}`;
    window.open(facebookShareUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shortUrl
    )}`;
    window.open(twitterShareUrl, "_blank");
  };

  const shareOnLinkedin = () => {
    const LinkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      shortUrl
    )}`;
    window.open(LinkedinShareUrl, "_blank");
  };

  const shareOnWhatsApp = () => {
    const whatsappShareUrl = `whatsapp://send?text=${encodeURIComponent(
      shortUrl
    )}`;
    window.open(whatsappShareUrl);
  };

  return (
    <div className="social">
      <h2 className="social-title">Compartilhar com amigos</h2>
      <div className="social-networking">
        <button className="btn btn-facebook" onClick={shareOnFacebook}>
          <BsFacebook />
        </button>
        <button className="btn btn-whatsapp" onClick={shareOnWhatsApp}>
          <BsWhatsapp />
        </button>
        <button className="btn btn-twitter" onClick={shareOnTwitter}>
          <BsTwitter />
        </button>
        <button className="btn btn-linkedin" onClick={shareOnLinkedin}>
          <BsLinkedin />
        </button>
      </div>
    </div>
  );
}

export default ShareButtons;
