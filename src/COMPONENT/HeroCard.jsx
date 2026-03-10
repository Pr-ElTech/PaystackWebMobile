import React from "react";
import "../CSS/herocard.css";

const HeroCard = ({ content }) => {
  return (
    <section className="cardB">
      <div className="hero-left">
        <img src={content?.Image} alt="" />
      </div>
      <div className="hero-right">
        <h1>{content?.Title}</h1>
        <p>{content?.TitleText}</p>
        {/* <ul>
          {content.List.map((item, index) => (
            <li>{item?.index}</li>
          ))}
        </ul> */}
        <h1>{content?.Subtitle}</h1>
        <p>{content?.Text}</p>
        <p>{content.link}</p>
      </div>
    </section>
  );
};

export default HeroCard;
