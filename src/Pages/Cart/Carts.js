import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiAction } from '../../Store/Slice/CartSliceUi'

export default function Carts() {

    const dispatch = useDispatch()

    const cartToggle = () => {
        dispatch(cartUiAction.toggle())
    }

    const CartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    console.log(CartItems);

  return (
    <div className='cart_container'>
        <ListGroup className='cart'>
            <div className='cart_close' onClick={cartToggle}>
                <span><i className='ri-close-fill'></i></span>
            </div>
            <div className='cart_item-list'>

                {
                    CartItems.map((items) => {
                        return <CartItem item={items}></CartItem>
                    })
                }
                
            </div>
            <div className='cart_bottom d-flex align-item-center justify-content-between'>
                <h6 className='py-3'>Subtotal amount: <span>${totalAmount}</span></h6>
                <button><Link to='/checkout' className='px-3 py-0 text text-decoration-none'>Checkout</Link></button>
            </div>
        </ListGroup>
    </div>
  )
}
