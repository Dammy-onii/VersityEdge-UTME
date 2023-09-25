import React from 'react'

import "./homeDescription.css"
import homeImg from "../../../../assets/homeImg.png";

function HomeDescription() {
  return (
    <div>
        <div className="description">
        <div className="backgroundText">
          <h1>UTME AT A GO</h1>
        </div>
        <div className="descriText">
          <section>
            <h2>UTME AT A GO</h2>
          </section>
          <h3>
            San monofada sar divis. Dekavis päsityska, diafas, debevis. Euheten
            kagisk, ipenas i s Nydens fande, att pixlig dinde. Autopålogi
            mononing tertad i povis. Dende multining dekanade georas. <br />
            Stadsutglesning läshund i dide fodobelt. Pora tigisk utom diderade
            intrajusm. Homopos a. Don tinälig homobenera möliga. Pseudoplalig
            ana mikronat.
          </h3>
          <div className="button">
            <h3>Register</h3>
          </div>
        </div>
        <div className="descriImg">
          <img src={homeImg} alt="" />
        </div>
      </div>

      <div className="description reverse">
        <div className="backgroundText">
          <h1>UTME AT A GO</h1>
        </div>
        <div className="descriImg">
          <img src={homeImg} alt="" />
        </div>
        <div className="descriText">
          <section>
            <h2>Empower Your UTME Journey</h2>
          </section>
          <h3>
            San monofada sar divis. Dekavis päsityska, diafas, debevis. Euheten
            kagisk, ipenas i s Nydens fande, att pixlig dinde. Autopålogi
            mononing tertad i povis. Dende multining dekanade georas. <br />
            Stadsutglesning läshund i dide fodobelt. Pora tigisk utom diderade
            intrajusm. Homopos a. Don tinälig homobenera möliga. Pseudoplalig
            ana mikronat.
          </h3>
          <div className="button">
            <h3>Register</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDescription