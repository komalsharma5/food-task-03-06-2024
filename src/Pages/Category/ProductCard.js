import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartAction } from '../../Store/Slice/CartSlice';

export default function ProductCard(props) {
    const { id, title, price, image01 } = props.productsitem;

    const dispatch = useDispatch()

    const addToCart = () => {
      // alert('hjhhj')
      dispatch(cartAction.addItem({
        id,title,image01,price
      }))
    }
  return (
   
    <div>
     <div className="card">
      <div>
        <Link to={`/food/${id}`}>
        <img src={image01} className="card-img-top mt-3 w-50 d-block mx-auto" alt="..." />
        </Link>
        <div className="card-body text-center">
          <Link to={`/food/${id}`}>
          <h5 className="card-title fs-6 text-center text-dark">{title}</h5>
          </Link>
          <div>
           <span className='text-danger mx-4'>${price}</span>
          <button className="btn btn-danger p-1 px-3" cursor='pointer' onClick={addToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
