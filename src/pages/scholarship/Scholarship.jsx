import React from 'react'

import everyStudent from "../../assets/everyStudent.png"
import requirementImg from "../../assets/requirementImg.png"

import homeImg from "../../assets/homeImg.png";

import './scholarship.css'

function Scholarship() {
  return (
    
    <div className="scholarship">
        <div className="scholHeader">
            <div className="scholHeaderCont">
                <div className="headerImg">
                    <div className="headerImgCont">
                        <img src={everyStudent} alt="" />
                    </div>
                </div>
                <div className="headerText">
                    <h1>Get scholarship for every bright student</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur. Ut sed vitae tortor ornare ante morbi ornare fringilla.</h2>
                </div>
            </div>
        </div>

        <div className="description">
        <div className="descriText">
          <section>
            <h2>Introduction</h2>
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

      <div className="description reverse">
        <div className="descriImg">
          <img src={homeImg} alt="" />
        </div>
        <div className="descriText">
          <section>
            <h2>Scholarship Benefit</h2>
          </section>
          <h3>
          San monofada sar divis. Dekavis päsityska, diafas, debevis. Euheten kagisk, ipenas i s
Nydens fande, att pixlig dinde. Autopålogi mononing tertad i povis. Dende multining dekanade georas. <br />
Stadsutglesning läshund i dide fodobelt. Pora tigisk utom diderade intrajusm. Homopos a. 
Don tinälig homobenera möliga. Pseudoplalig ana mikronat.
          </h3>
        </div>
      </div>

      <div className="eligibility">
        <section className='eligi'>
            <h1>Eligibility & Requirement</h1>
            <h2>To be qualified for VersityEdge scholarship, check 
                you have filled these critiria</h2>
        </section>
        <div className="requirementSection">
            <div className="requirementText">
                <li>Must be an enrolled student at VersityEdge Must be an enrolled</li>
                <li>Must be an enrolled student at VersityEdge Must be an enrolled</li>
                <li>Must be an enrolled student at VersityEdge Must be an enrolled</li>
                <li>Must be an enrolled student at VersityEdge Must be an enrolled</li>
                <li>Must be an enrolled student at VersityEdge Must be an enrolled</li>
                <li>Must be an enrolled student at VersityEdge Must be an enrolled</li>
            </div>
            <div className="requirementImg">
                <img src={requirementImg} alt="" />
            </div>
        </div>
      </div>

      <div className="sponsorUs">
        <section>
          <h2>Partner With Us</h2>
        </section>
        <div className="description">
          
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
    
  )
}

export default Scholarship