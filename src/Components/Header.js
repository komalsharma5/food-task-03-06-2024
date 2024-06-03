import React from 'react'
import { Link } from "react-router-dom";
import logo from "../Fake-data/Images/res-logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { cartUiAction } from '../Store/Slice/CartSliceUi';

export default function Header() {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  
  const dispatch = useDispatch()

  const cartToggle = () => {
      dispatch(cartUiAction.toggle())
  }
  return (
    <div>
      {/* Header section */}

      <section className="mx-lg-5 py-2 ">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <div className="logo d-md-block mx-md-auto">
              <img alt="logo" src={logo} className="img-fluid d-block mx-auto mt-2" width={64} height={64}></img>
              <p className="text-center font- fs-5">Testy Treat</p>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse nav"
              id="navbarSupportedContent">
              <ul className="navbar-nav mt-2 d-block mx-auto">
                <li className="nav-item  d-inline-block">
                  <Link className="nav-link   mx-4" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item d-inline-block ">
                  <Link className="nav-link  mx-4" to="/food">
                    Food
                  </Link>
                </li>
                <li className="nav-item d-inline-block ">
                  <Link className="nav-link  mx-4" to="/cart">
                    Cart
                  </Link>
                </li>
                <li className="nav-item d-inline-block  ">
                  <Link className="nav-link  mx-4" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className=" float-end ">

              <button type="button" className="btn position-relative" onClick={cartToggle}>
              <i className="ri-shopping-basket-line" style= {{fontSize :'30px'}}></i>
                  <span className="position-absolute top-0 translate-middle p-2 text-white bg-danger border border-light rounded-circle" style= {{fontSize :'12px'}} on>
                 
                 {totalQuantity}
                 <span className="visually-hidden">unread messages</span>
                </span>
                </button>
                   <Link to='/cart' className="btn  border border-0 bg-transparent  fs-5">
                   <i className="ri-user-3-fill"></i>

                </Link>
                </div>
               
              </div>
            </div>
   
        </nav>
      </section>

      {/* Header section end */}
    </div>
  )
}
