import React from 'react'

import "./registration.css"

function Registeration() {
  return (
    <div>
        <div className="registration">
            <div className="registrationCont">
                <h2>Registration</h2>
                <h3>San monofada sar divis. Dekavis päsityska, diafas, debevis. Euheten kagisk, ipenas i sNydens fande, att pixlig dinde. 
                    Autopålogi mononing tertad i povis. Dende multining dekanade georas. Stadsutglesning läshund i dide fodobelt.
                </h3>
                <div className="textFields">
                    <div className="fieldItems">
                        <h3>First Name</h3>
                        <input type="text" />
                    </div>
                    <div className="fieldItems">
                        <h3>Last Name</h3>
                        <input type="text" />
                    </div>
                    <div className="fieldItems">
                        <h3>Phone Number</h3>
                        <input type="tel" name="" id="" />
                    </div>
                    <div className="fieldItems">
                        <h3>Whatsapp Number</h3>
                        <input type="tel" name="" id="" />
                    </div>
                    <div className="fieldItems">
                        <h3>Educational Level</h3>
                        <select name="education" id="education">
                            <option value="Select">Select</option>
                            <option value="Secondary School Student">Secondary School Student</option>
                            <option value="Post Secondary School Student">Post Secondary School Student</option>
                            <option value="Parent / Guidance">Parent / Guidance</option>
                        </select>
                    </div>
                    <div className="fieldItems">
                        <h3>Email</h3>
                        <input type="email" name="" id="" />
                    </div>
                </div>
                <div className="optionals">
                    <div className="check">
                        <input type="checkbox" name="" id="registered" />
                        <label htmlFor="registered"><h3>I want to be automatically registered on VersityEdge platform</h3></label>
                    </div>
                    <div className="check">
                        <input type="checkbox" name="" id="suscribe" />
                        <label htmlFor="suscribe"><h3>Subscribe to our Newsletter to stay updated </h3></label>
                    </div>
                    <div className="check">
                        <input type="checkbox" name="" id="privacy" />
                        <label htmlFor="privacy"><h3>Privacy policy</h3></label>
                    </div>
                    <div className="check">
                        <input type="checkbox" name="" id="terms" />
                        <label htmlFor="terms"><h3>Term of use</h3></label>
                    </div>
                </div>

                <input type="submit" value="Submit" className='button'/>
            </div>
        </div>
    </div>
  )
}

export default Registeration