import React from 'react'

import homeImg from "../../assets/homeImg.png";
import partnerHeader from '../../assets/partnerHeader.png'
import partnerBenefit from '../../assets/partnerBenefit.png'
import why from '../../assets/why.png'
import why2 from '../../assets/why2.png'
import why3 from '../../assets/why3.png'

import basic from "../../assets/basicPackage.png"
import premium from "../../assets/premiumPackage.png"
import silver from "../../assets/silverPackage.png"
import gold from "../../assets/goldPackage.png"

import insight from "../../assets/insights.png"
import insight2 from "../../assets/insight2.png"
import insight3 from "../../assets/insight3.png"

import worldclass from "../../assets/worldclass.png"
import networking from "../../assets/networking.png"
import modernvenue from "../../assets/modernvenue.png"

import './partner.css';
import './partnerRes.css';
import Partners from '../../components/Partners'

function PartnerWith() {
  return (
    
    <div className="partner">
        <div className="partnerBanner">
            <img src={partnerHeader} alt="" />
            <h1>Be Our Service <br /> Partner</h1>
        </div>

        <div className="description">
        <div className="descriText">
          <section>
            <h2>Partnership Benefit</h2>
          </section>
          <h3>
          San monofada sar divis. Dekavis päsityska, diafas, debevis. Euheten kagisk, ipenas i s
Nydens fande, att pixlig dinde. Autopålogi mononing tertad i povis. Dende multining dekanade georas. <br />
Stadsutglesning läshund i dide fodobelt. Pora tigisk utom diderade intrajusm. Homopos a. 
Don tinälig homobenera möliga. Pseudoplalig ana mikronat.
          </h3>
        </div>
        <div className="descriImg">
          <img src={homeImg} alt="" />
        </div>
      </div>

        <div className="package">
            <div className="packageCont">
                <h1>Partnership package</h1>
                <h3>VersityEdge revolutionizes the admission process; turning hurdles into gateways. We democratize guidance, 
                    ensuring accessibility, </h3>
                <div className="packCard">
                    <div className="packageCard basic">
                        <div className="packageType">
                            <img src={basic} alt="" />
                        </div>
                        <div className="packageText">
                            <h2>Basic</h2>
                            <h3>Lorem Ipsum summ
                            ipsy ya jikftye yo.
                            Away wity youj.</h3>
                        </div>
                    </div>
                    <div className="packageCard premium">
                        <div className="packageType">
                            <img src={premium} alt="" />
                        </div>
                        <div className="packageText">
                            <h2>Premium</h2>
                            <h3>Lorem Ipsum summ
                            ipsy ya jikftye yo.
                            Away wity youj.</h3>
                        </div>
                    </div>
                    <div className="packageCard silver">
                        <div className="packageType">
                            <img src={silver} alt="" />
                        </div>
                        <div className="packageText">
                            <h2>Silver</h2>
                            <h3>Lorem Ipsum summ
                            ipsy ya jikftye yo.
                            Away wity youj.</h3>
                        </div>
                    </div>
                    <div className="packageCard gold">
                        <div className="packageType">
                            <img src={gold} alt="" />
                        </div>
                        <div className="packageText">
                            <h2>Gold</h2>
                            <h3>Lorem Ipsum summ
                            ipsy ya jikftye yo.
                            Away wity youj.</h3>
                        </div>
                    </div>  
                </div>
            </div>
        </div>

        <div className="why">
            <div className="whyCont">
                <h1>Why partner with us</h1>
                <div className="activity">
                    <div className="activityCard">
                        <div className="activityImg">
                            <img src={why} alt="" />
                        </div>
                        <div className="activityText">
                            <h2>Campus</h2>
                            <h3>Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
Tidade homogisk, och metrofili och pöpygt, liksom </h3>
                        </div>
                    </div>
                    <div className="activityCard">
                        <div className="activityImg">
                            <img src={why2} alt="" />
                        </div>
                        <div className="activityText">
                            <h2>Campus</h2>
                            <h3>Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
Tidade homogisk, och metrofili och pöpygt, liksom </h3>
                        </div>
                    </div>
                    <div className="activityCard">
                        <div className="activityImg">
                            <img src={why3} alt="" />
                        </div>
                        <div className="activityText">
                            <h2>Campus</h2>
                            <h3>Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
Tidade homogisk, och metrofili och pöpygt, liksom </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="how">
            <div className="howCont">
                <h1>How to Partner</h1>
                <h2>Follow this steps to get VersityEdge Partnership and have access to more on our page</h2>
                <div className="howProcess">
                    <div className="process">
                        <div className="processImg">
                            <img src={worldclass} alt="" />
                        </div>
                        <div className="processText">
                            <h2>1</h2>
                            <h2>World className speakers</h2>
                            <h3>Our solution is tailored to help you achieve your goals</h3>
                        </div>
                    </div>
                    <div className="process">
                        <div className="processImg">
                            <img src={networking} alt="" />
                        </div>
                        <div className="processText">
                            <h2>2</h2>
                            <h2>Networking</h2>
                            <h3>Access a wide range of study materials,
                                mock exams, and interactive content to 
                               master subjects effectively.</h3>
                        </div>
                    </div>
                    <div className="process">
                        <div className="processImg">
                            <img src={modernvenue} alt="" />
                        </div>
                        <div className="processText">
                            <h2>3</h2>
                            <h2>Modern venue</h2>
                            <h3>We know that the admission journey can be overwhelming, and doubts can creep in at any hour. </h3>
                        </div>
                    </div>
                </div>
                <div className="howButton"><h3>Begin</h3></div>
            </div>
        </div>

        <Partners />

        <div className="insight">
            <div className="insightCont">
                <h2>Explore Out Insight</h2>
                <div className="explore">
                    <div className="insightCard">
                        <div className="insightImg">
                            <img src={insight} alt="" />
                        </div>
                        <div className="insightText">
                            <h2>
                                Navigating the Admission Process: From Application to Acceptance
                            </h2>
                            <h3>Elevate your study game with our expert-backed guide. Learn how to harness powerful study techniques that 
                                will boost your retention, improve your focus, and pave the way to exam triumph.</h3>
                            <div className="insightButton"><h3>Read More</h3></div>
                        </div>
                    </div>
                    <div className="insightCard">
                        <div className="insightImg">
                            <img src={insight2} alt="" />
                        </div>
                        <div className="insightText">
                            <h2>
                                How to Prepare Smartly for University of Lagos Post UTME Exams
                            </h2>
                            <h3>Elevate your study game with our expert-backed guide. Learn how to harness powerful study techniques that 
                                will boost your retention, improve your focus, and pave the way to exam triumph.</h3>
                            <div className="insightButton"><h3>Read More</h3></div>
                        </div>
                    </div>
                    <div className="insightCard">
                        <div className="insightImg">
                            <img src={insight3} alt="" />
                        </div>
                        <div className="insightText">
                            <h2>
                            Mastering the Art of Effective Study Techniques for Exam Success
                            </h2>
                            <h3>Elevate your study game with our expert-backed guide. Learn how to harness powerful study techniques that 
                                will boost your retention, improve your focus, and pave the way to exam triumph.</h3>
                            <div className="insightButton"><h3>Read More</h3></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    
  )
}

export default PartnerWith