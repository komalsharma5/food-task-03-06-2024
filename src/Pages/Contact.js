import React from 'react'
import Helmet from '../Components/Helmet'

export default function Contact() {
  return ( <Helmet title='Contact'>
   
     
    <section className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img src="/Assets/Img/contact.jpg" alt="notfound" className="img-fluid"></img>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12"> 
               
                    <form>
                        <input type="text" className="form-control my-4" placeholder="Your Name"></input>

                        <input type="email" className="form-control my-4" placeholder="Your Email"></input>

                        <input type="number" className="form-control my-4" placeholder="Your Number"></input>

                        <input type='text' className="form-control my-4" placeholder='your Country'></input>

                        <input type='text' className="form-control my-4" placeholder='your City'></input>
                          
                        <button type="button" className="btn btn-primary p-2 d-inline-block w-100 my-2">Submit</button>
                    </form>
               
            </div>
          </div>
    </section>
    </Helmet>
  )
}
