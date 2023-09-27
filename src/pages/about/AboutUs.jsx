import React from 'react'
import Homeheader from '../../components/Homeheader'

import "./aboutUs.css"
import VideoYoutube from './VideoYoutube'
import Registeration from './Registeration'

function AboutUs() {
  return (
    <div>
        <Homeheader />
        <div className="videoDescription">
            <div className="videoText">
                <div className="videoTextContainer">
                    <h2>New Tutor rooms</h2>
                    <h3>VersityEdge gets a cool study space for group of students
                        ade epid om neck homot ponade. Mabenat bätuhås om än  
                        Travis naskapet inte gigare, fulparkerare varose. Rekoring
                        vönyrade, ber. Preda arade antevare penyliga son.
                        kontrar speren grafen. Benat den 
                        ade epid om neck homot ponade. Mabenat bätuhås om än  
                        Travis naskapet inte gigare, fulparkerare varose. Rekoring
                        vönyrade, ber. Preda arade antevare penyliga son.
                        kontrar speren grafen. Benat den ade epid om neck homot ponade.   
                        Travis naskapet inte gigare, fulparkerare varose. Rekoring
               
                    </h3>
                    <h3 className='textMore'>Read more...</h3>
                </div>
            </div>
            <div className="videoYoutube">
                <div className="videoYoutubeCont">
                    <VideoYoutube />
                </div>
            </div>
        </div>

        <Registeration />

    </div>
  )
}

export default AboutUs