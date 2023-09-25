import React, { useState, useEffect } from 'react';

import background from '../assets/homeHeader.png'
import '../components/homeHeader.css'

function Homeheader() {

    const targetDate = new Date('2023-11-14T23:59:59').getTime(); // Replace with your target date

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);



  return (
    <div className="homeHeader">
        {/* <img className='background' src={background} alt="" /> */}
            <div className="headerText">
                <h1>UTME <span>AT A</span> GO</h1>
                <h2>Conquer Your UTME Exam, Secure Admission With Expert Guidance</h2>
            </div>
            <div className="headerTimer">
                <div className="time box">
                    <h2>{timeRemaining.days}</h2>
                    <h3>Days</h3>
                </div>
                <div className="time circle">
                    <h2>{timeRemaining.hours}</h2>
                    <h3>Hours</h3>
                </div>
                <div className="time box">
                    <h2>{timeRemaining.minutes}</h2>
                    <h3>Mins</h3>
                </div>
                <div className="time circle">
                    <h2>{timeRemaining.seconds}</h2>
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