import React from 'react'
import logo from "../Fake-data/Images/res-logo.png";

export default function Footer() {
  return (
    <div>
       {/* footer section */}

       <div className='bg_color'>
        <footer className='mt-5 pt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <img alt="logo" src={logo} className="img-fluid " width={64} height={64}></img>
                <p className=" font- fs-5">Testy Treat</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>

              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5>Delivery Time</h5>
                <p>sunday-Thursday</p>
                <p>10:00am - 11:00pm</p>
                <p>Friday-Saturday</p>
                <p>Off Day</p>
              </div>

              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5>Contact</h5>
                <p>Location: Xyz, Varachha-395006,Surat.</p>
                <p>Phone:874653987</p>
                <p>Email:demo.xyz@gamil.com</p>
              </div>

              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5>Newsletter</h5>
                <p>Subscribe our newsletter</p>
                <div className="form-outline mb-4 position-relative">
                  <input type="email" placeholder='Enter your name' ></input>
                  <span className='position-absolute footer_icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(248,0,0,1)"><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path></svg>

                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-3">
            Copyright  :  2022,website made by muhibur rahman, All Rights Reserved.
          </div>
        </footer>
      </div>
      
      {/* footer section end */}
    </div>
  )
}
