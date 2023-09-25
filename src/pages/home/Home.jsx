import React from "react";
import Homeheader from "../../components/Homeheader";

import homeImg from "../../assets/homeImg.png";
import "./home.css";
import "./homeRes.css";
import Partners from "../../components/Partners";
import HomeDescription from "./homeComponents/homeDescriptions/HomeDescription";

function Home() {
  return (
    <div className="container">
      <Homeheader />

      <HomeDescription />

      <div className="features">
        <div className="backgroundText blue">
          <h1>Features</h1>
        </div>
        <div className="featuresText">
          <h2>Features</h2>
          <h3>
            Are you tired of feeling lost in the complex admission process?
            VersityEdge is your ultimate solution to overcome challenges and
            unlock a world of opportunities
          </h3>
        </div>
        <div className="featureList">
          <div className="featureExample">
            <div className="featureIcon"></div>
            <div className="featureText">
              <h2>World class speakers</h2>
              <h3>Our solution is tailored to help you achieve your goals</h3>
            </div>
          </div>
          <div className="featureExample exampleMargin">
            <div className="featureIcon"></div>
            <div className="featureText">
              <h2>Networking</h2>
              <h3>
                Access a wide range of study materials, mock exams, and
                interactive content to master subjects effectively.
              </h3>
            </div>
          </div>
          <div className="featureExample">
            <div className="featureIcon"></div>
            <div className="featureText">
              <h2>Modern Venue</h2>
              <h3>
                We know that the admission journey can be overwhelming, and
                doubts can creep in at any hour. With VersityEdge's 24/7
                support, you'll never feel alone.
              </h3>
            </div>
          </div>
          <div className="featureExample exampleMargin">
            <div className="featureIcon"></div>
            <div className="featureText">
              <h2>Certificates</h2>
              <h3>
                Wondering about your chances of acceptance? Predict your chance
                of admission anytime. 
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonialElements">
          <div className="arrow">
            <div className="arrowCircle">
              <span class="material-symbols-outlined">arrow_back</span>
            </div>
            <div className="arrowCircle">
              <span class="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
          <div className="testimonialImage"></div>
          <div className="testimonialText">
            <h2>Hear from our students</h2>
            <h3>
              "Gratitude overflows for VersityEdge! With their exceptional
              mentorship, I secured admission to the University of Ibadan for
              Industrial and Production Engineering. Personalized study plans
              and AI-powered mock tests boosted my confidence. Forever thankful
              for their unwavering support on my path to greatness!"
            </h3>
            <h3>
              {" "}
              <b>~Samuel Peter Obotu</b>{" "}
            </h3>
          </div>
        </div>
      </div>

      <Partners />
      

      <div className="sponsorUs">
        <section className="sponsor">
          <h2>Sponsor Us</h2>
        </section>
        <div className="description">
          <div className="backgroundText">
            <h1>Sponsor Us</h1>
          </div>
          <div className="descriImg">
            <img src={homeImg} alt="" />
          </div>
          <div className="descriText">
            <h3>
              Sponsor US at underturism vonanera för att terare, såsom tressade.
              Trer mandatpingis ning emedan homore, besade. Digital tvilling
              makrobasamma niledes huruvida nan. Jinar mikrotes 5:2-diet nor.
              Vaning derer, plakyplangar päbelt koling. Mikrosade pekoledes,
              jesk såsom digebel sonat. Predyra gupesam fotoception terajingar,
              inte jedat. Trifili byrar geott i nevis. Mabebel jida intraspehet
              tir. Vaning derer, plakyplangar päbelt koling. Mikrosade
              pekoledes, jesk såsom digebel sonat. Predyra gupesam fotoception
              terajingar, inte jedat. Trifili byrar geott i nevis. Mabebel jida
              intraspehet tir.
            </h3>
            <div className="button">
              <h3>Sponsor Us</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
