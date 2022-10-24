import React from 'react';

const Form = () =>{
    return(
        <div className='Form-container'>
              <div className='Form-detail'>
                <h1>
                Subscribe to our <br/> newsletter today!
                </h1>
                <p>Doctall aims at bringing the best of health information that are really importan to you easily.</p>
                <p>Also, helps to keep you abrest emerging health processes that will keep your body and mind in a better shape</p>
              </div>

              <div className='form-filling-area'>
                <label>Full Name*</label><br/>
                <input placeholder="Enter Your Name"></input><br/><br/>
                <label>Email*</label><br/>
                <input placeholder="Enter Your Email"></input><br/><br/>
                <p>*By subscribing, you are agreeing to receive emails from Doctall, in line with our Privacy Policy.Your details are safe with us. You can unsubscribe at any time.</p><br/><br/>

                <button>Subscribe to Newsletter</button>
              </div>
        </div>
    )
};
export default Form;