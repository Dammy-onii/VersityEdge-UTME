import React from 'react'

import mainLogo from '../../assets/Main Logo.svg'

import './footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="footerCont">
            <div className="footerLogo">
                <img src={mainLogo} alt="" />
                <div className="lText">
                    <h1>VersityEdge</h1>
                    <h2>Admission at a go</h2>
                </div>
            </div>
            <div className="footerText">
                <h1>Copywrite@VersityEdge</h1>
            </div>
            <div className="footerSocials">
                <h1>Connect with us</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer