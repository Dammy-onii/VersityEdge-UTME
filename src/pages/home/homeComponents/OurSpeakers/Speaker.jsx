import React from "react";
import CarouselSpeakers from "../../../../components/CarouselComp/CarouselSpeakers";

import speaker1 from "../../../../assets/speaker1.png";
import design from "../../../../assets/design.png";
import register from "../../../../assets/register.png";
import cto from "../../../../assets/cto.png";
import chantel from "../../../../assets/chantel.png";

import "./speaker.css";

function Speaker() {
  const carouselItems = [
    <div className="speakers" key={1}>
      <div className="speakersItem">
        <img src={speaker1} alt="" />
        <h2>CEO</h2>
      </div>
      <div className="speakersItem">
        <img src={design} alt="" />
        <h2>Head Design</h2>
      </div>
      <div className="speakersItem">
        <img src={register} alt="" />
        <h2>Jamb Register</h2>
      </div>
      <div className="speakersItem">
        <img src={cto} alt="" />
        <h2>CTO</h2>
      </div>
      <div className="speakersItem">
        <img src={chantel} alt="" />
        <h2>Chantel</h2>
      </div>
    </div>,
  ];

  return (
    <div className="testimonials">
        <div className="backgroundText speakText">
          <h1>The Speakers</h1>
        </div>
      <h2>The Speakers</h2>
      <div className="speakCont">
      <CarouselSpeakers items={carouselItems} />
      </div>
    </div>
  );
}

export default Speaker;
