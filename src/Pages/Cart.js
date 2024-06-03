import React from 'react'
import Helmet from '../Components/Helmet'
import CommonSection from '../Components/CommonSection'
import { Button, Col, Container, Row } from 'reactstrap'
import { useSelector,useDispatch } from 'react-redux'
import { cartAction } from '../Store/Slice/CartSlice'
import { Link } from 'react-router-dom'


export default function Cart() {

  const CartItem = useSelector(state => state.cart.cartItems)

  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(cartAction.deleteItem ({ id }))
  }
 //totalAmount code
  const totalAmount = useSelector(state=> state.cart.totalAmount)
  return ( <Helmet title='Cart'>
    
      <div>
        <CommonSection title='Your Cart'></CommonSection>
      </div>

      <section>
        <Container>
            <Row>
              {
                CartItem.length === 0 ? (
                  <h4 className='text-center mt-5'> Youre Cart is Empty</h4>
                ) : (
                  <Col lg='12'>
                <table className="table table-bordered mt-5 text-center">
                    <thead>
                      <tr>
                         <th >Image</th>
                         <th >Product Title</th>
                         <th >Total Price</th>
                         <th >totalQuantity</th>
                         <th >Delete</th>
                     </tr>
                    </thead>
                    <tbody>

                     {
                       CartItem.map((item) => {
                          return <Tr key={item.id} items={item} delete={deleteItem}></Tr>
                       })
                       
                     }

                  </tbody>
                </table>

                </Col>
              )}
                
          <h4 className='fw-bold py-2'>TotalAmount = ${totalAmount}</h4>
            <div className="align-item-center">
              <Link to="/food">
                <Button className="bg-danger pt-2 pb-2 ps-4 pe-4 me-3 fw-bold">
                  Countinue to shopping
                </Button>
              </Link>
              <Link to="/checkout">
                <Button className="bg-danger py-2 x-4 fw-bold">
                  CheckOut
                </Button>
              </Link>
              </div>

              
            </Row>
        </Container>
      </section>
      </Helmet>
  )
}

const Tr = (props) => {
  //   console.log(props.items);

    const { image01, title, totalprice, totalQuantity, id } = props.items

    return(
        <tr>
            <td className='text-center'><img src={image01} style={{width:"40px"}} alt=''></img></td>
            <td className='text-center'>{title}</td>
            <td className='text-center'>${totalprice}</td>
            <td className='text-center'>{totalQuantity}</td>
            <td className='text-center' onClick={() => props.delete(id) }>
                <i class="ri-delete-bin-line"></i>
            </td>
        </tr>
    )
}
