import React from 'react'
import Helmet from '../Components/Helmet'
import CommonSection from '../Components/CommonSection'

export default function CheckOut() {
  return ( <Helmet title='CheckOut'>
    <CommonSection title='CheckOut'></CommonSection>
    
    <h3 className='text-center mt-5'>Shipping Address</h3>
       <form className='w-50 mx-auto d-block ' >
              <div className="form-group  ">
                    <input type="text" className="form-control"  placeholder='Enter Your Name'></input>
              </div>
            
              <div className="form-group   mb-3">
                <label  className=' '></label>
                <input type="email" className="form-control" placeholder='Enter Your Email '></input>
                
              </div>
              <div className="form-group  mt-2 mb-3">
                
                <input type="number" className="form-control" placeholder='Phone Number '></input>
              </div>
              <div className="form-group  mt-2 mb-3">
                
                <input type="text" className="form-control" placeholder='Country'></input>
              </div>
              <div className="form-group  mt-2 mb-3">
                
                <input type="text" className="form-control" placeholder='City '></input>
              </div>
              <div className="form-group  mt-2 mb-3">
                
                <input type="text" className="form-control" placeholder='Postal Code '></input>
              </div>
            
              <button type="submit" className="btn btn-danger">Payment</button>
    </form>

 
  </Helmet>
   
  )
}
