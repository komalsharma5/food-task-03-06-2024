import React, { useState } from 'react'
import Helmet from '../Components/Helmet'
import CommonSection from '../Components/CommonSection'
// import product from "../Fake-data/Images/product_01.1.jpg"
import { useParams } from 'react-router-dom'
import products from '../Fake-data/products'
import { useDispatch } from 'react-redux'
import { cartAction } from '../Store/Slice/CartSlice'


export default function FoodDetails() {

  const { id } = useParams()
  console.log(id);
  const Product = products.find (item => item.id === id)
 
  const { title, price, desc, category, image01, image02, image03 } = Product

  const [ preImage , setPreImage ] = useState(image01)

  const [ tab, setTab ] = useState('desc')

  const dispatch = useDispatch();

  const addToCart = () => {
    // alert('jhjh')
    dispatch(cartAction.addItem({
      id,title,price,image01
    }))
  }
  console.log(Product);
  return <Helmet title='Product Details'> 
    <CommonSection title={title}></CommonSection>
    
    <section>
        <div className='container pt-5'>
          <div className='row'>
            <div className='col-lg-1'>
              <div onClick={()=> setPreImage (image01)}>
                <img alt='' src={image01} className='img-fluid w-100 my-2'></img>
              </div>
              <div onClick={()=> setPreImage (image02)}>
                <img alt='' src={image02} className='img-fluid w-100 my-2'></img>
              </div>
              <div onClick={()=> setPreImage (image03)}>
                <img alt='' src={image03} className='img-fluid w-100 my-2'></img>
              </div>
            </div>

            <div className='col-lg-3'>
              <img alt='' src={preImage} className='img-fluid w-100 pt-1'></img>
            </div>
            <div className='col-lg-3'>
              <h1 className='mt-5'>{title}</h1>
              <h6 className='text-danger my-3'>{price}</h6>
              <h6>{category}</h6>
              <button className='btn btn-danger' onClick={addToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='row pt-5'>
          <div className='d-flex'> 
          <h4 className='text-danger pe-3' onClick={()=> setTab('desc')}>Description</h4> 
          <h4 className='text-danger' onClick={() => setTab('review')}>Review</h4>
          </div>
          </div>
      </section>
   
    {
      tab === 'desc' ? ( 
        <div className='tab_content container'> 
        <p className='pt-3'>{desc}
        </p>
        
        </div>) : (
          
          
          <section className='container border-01'>
          <div className='row'>

          <p>Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.</p>
          <h4>Komal</h4>
          <p>komal@gmail.com</p>
          <h6>Great Product</h6>
          <h4>Komal</h4>
          <p>komal@gmail.com</p>
          <h6>Great Product</h6>
          <h4>Komal</h4>
          <p>komal@gmail.com</p>
          <h6>Great Product</h6>

            <div className='bg_color w-50 mx-auto d-block'>
            <input type="text"  placeholder='Enter Name' className='my-2 mx-auto d-block w-75 mt-4' required></input><br></br>
            <input type="email"  placeholder='Enter Email' className='my-2 mx-auto d-block w-75' required></input><br></br>
            <input type="number"  placeholder='Number' className='my-2 mx-auto d-block w-75 mb-3' required></input>
             <button className='btn btn-danger my-4 mx-auto d-block w-75'>Submit</button>
            </div>
          </div>
     </section>
        )  
    }
          

        
      
  </Helmet>
}
