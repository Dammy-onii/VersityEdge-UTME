import React from "react";
import Homeheader from "../../components/Homeheader";

import Carousel from "../../components/CarouselComp/Carousel";

import homeImg from "../../assets/homeImg.png";

import "./home.css";
import "./homeRes.css";

import Partners from "../../components/Partners";
import HomeDescription from "./homeComponents/homeDescriptions/HomeDescription";
import SponsorUs from "./homeComponents/SponsorUs";
import Fax from "./homeComponents/Accordion/Fax";
import Speaker from "./homeComponents/OurSpeakers/Speaker";
import WhyComponent from "./homeComponents/whyComponent/WhyComponent";
import PartnersComp from "./homeComponents/Partners/PartnersComp";

function Home() {
  const carouselItems = [
    <div className="testimonialElements" key={1}>
      <img className="testimonialImage" src={homeImg} alt="Image 1" />
      <div className="testimonialText">
        <h2>Hear from our students</h2>
        <h3>
          "Gratitude overflows for VersityEdge! With their exceptional
          mentorship, I secured admission to the University of Ibadan for
          Industrial and Production Engineering. Personalized study plans and
          AI-powered mock tests boosted my confidence. Forever thankful for
          their unwavering support on my path to greatness!"
        </h3>
        <h3>~Samuel Peter Obotu</h3>
      </div>
    </div>,
    <div className="testimonialElements" key={2}>
      <img className="testimonialImage" src={homeImg} alt="Image 1" />
      <div className="testimonialText">
        <h2>Hear from our students</h2>
        <h3>"loremknsnmwsmwoosnmonldxmlmdm homeDescriptions"</h3>
        <h3>~ Peter Obotu</h3>
      </div>
    </div>,
    <div className="testimonialElements" key={3}>
      <img className="testimonialImage" src={homeImg} alt="Image 1" />
      <div className="testimonialText">
        <h2>Hear from our students</h2>
        <h3>""Gratitude overflows for.eering. Personalized study plans and
          AI-powered mock tests boosted my confidence. Forever thankful for
          their unwavering support on my path to greatness!" homeDescriptions"</h3>
        <h3>~ Peter Obotu</h3>
      </div>
    </div>,
    // Add more slides as needed
  ];

  return (
    <div className="container">
      <Homeheader />

      <HomeDescription />

      <div className="features">
        
      <WhyComponent />
         
      </div>

      

      <div className="testimonials">
        <h2>Testimonials</h2>
        <Carousel items={carouselItems} />
      </div>

      <PartnersComp />

      <Speaker />

      <SponsorUs />

      <div className="description">
        <section>
          <h2>Frequently Asked Questions</h2>
          <h3>
            We want you to focus on your exam preparation. We've provided a list
            of questions other aspirants are asking or you may want to ask.
            Contact us if we're not able to answer what you have in mind.
          </h3>
        </section>
      </div>

      <Fax />

      <div className="newsletter">
        <div className="newsCont">
          <section>
            <h2>Subscribe to our Newsletter</h2>
            <h3>
              <span className="bolder">Stay Updated: </span> Sponsor US at
              underturism vonanera för att terare, såsom tressade. Trer
              mandatpingis ning emedan homore, besade. Digital tvilling
              makrobasamma niledes huruvida nan. Jinar mikrotes 5:2-diet nor.
              Vaning derer, plakyplangar päbelt koling.{" "}
            </h3>
          </section>

          <div className="suscribe">
            <input
              type="email"
              name=""
              id=""
              placeholder="Versityedge@gmail.com"
              className="suscribeText"
            />
            <input type="button" value="Suscribe" className="suscribeBtn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
