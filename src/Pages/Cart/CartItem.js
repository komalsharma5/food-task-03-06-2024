import React from 'react'
import { useDispatch } from 'react-redux'
import { ListGroupItem } from 'reactstrap'
import { cartAction } from '../../Store/Slice/CartSlice'
// import image01 from '../../Fake-data/Images/product_01.1.jpg'


export default function CartItem(props) {

    const { id, title, image01,price, totalprice, totalQuantity } = props.item

    const dispatch = useDispatch()
    
    const addItem = () => {
        // alert('vhg')
        dispatch(cartAction.addItem({
          id,title,image01,price
        }))
    }

    const removeItem = () => {
        // alert('hg')
        dispatch(cartAction.removeItem({ id }))
    }

    const deletItem = () => {
      // alert('hjg')
      dispatch(cartAction.deleteItem({ id }))
    }
  return (
    <div >
    <ListGroupItem className='border-0 cart_item'>
      <div className='cart_item-info d-flex gap-2'>
        <img src={image01} alt=''></img>

        <div className='cart_product-info w-100 d-flex align-items-center justyfy-content-between'>
          <div>
            <h6 className='cart_product-title'>{title}</h6>
            <p className='d-flex align-item-center gap-5 cart_product-price'>{totalQuantity}x <span>${totalprice} </span></p>

            <div className='d-flex align-items-center gap-5 justyfy-content-between increse_decrease-btn'>
              {/* increase + nu btn */}
                <span className='increse-btn' onClick={addItem}><i className='ri-add-line'></i></span>
                <span className='quantity'>{totalQuantity}</span>
                <span className='decrese-btn' onClick={removeItem}><i className='ri-subtract-line'></i></span>
            </div>
          </div>
        <span className='delete_btn' onClick={deletItem}><i className='ri-close-circle-fill'></i></span>
        </div>
      </div>
    </ListGroupItem>
  </div>
  )
}
