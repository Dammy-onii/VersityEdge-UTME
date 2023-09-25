import React from 'react'

import background from '../assets/homeHeader.png'
import '../components/homeHeader.css'

function Homeheader() {
  return (
    <div className="homeHeader">
        {/* <img className='background' src={background} alt="" /> */}
            <div className="headerText">
                <h1>UTME <span>AT A</span> GO</h1>
                <h2>Conquer Your UTME Exam, Secure Admission With Expert Guidance</h2>
            </div>
            <div className="headerTimer">
                <div className="time box">
                    <h2>36</h2>
                    <h3>Days</h3>
                </div>
                <div className="time circle">
                    <h2>7</h2>
                    <h3>Hours</h3>
                </div>
                <div className="time box">
                    <h2>40</h2>
                    <h3>Mins</h3>
                </div>
                <div className="time circle">
                    <h2>58</h2>
                    <h3>Secs</h3>
                </div>
            </div>
            <div className="venue">
                <div className="venueText">
                    <span class="material-symbols-outlined">
                    calendar_today
                    </span>
                    <h2>12th, September 2023</h2>
                </div>
                <div className="venueText">
                    <span class="material-symbols-outlined">
                    volume_up
                    </span>
                    <h2>3 Speakers</h2>
                </div>
                <div className="venueText">
                    <span class="material-symbols-outlined">
                    location_on
                    </span>
                    <h2>UI Hotels, University of Ibadan.</h2>
                </div>
            </div>
        </div>
  )
}

export default Homeheader