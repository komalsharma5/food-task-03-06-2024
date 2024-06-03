import React from 'react'
import Slider from 'react-slick'

 function TestimonialSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
      <Slider {...settings}>
      <div>
        <p>There are many variants of passage of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
        <div className='align-items-center gap-3 d-flex'>
            <img alt='' src='Assets/img/ava-1.jpg' className='img-fluid w-25'></img>
            <h6>Jone Doe</h6>
        </div>
      </div>
      <div>
        <p>There are many variants of passage of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
            <div className='align-items-center gap-3 d-flex'>
                <img alt='' src='Assets/img/ava-2.jpg' className='img-fluid w-25'></img>
                <h6>Christin V.</h6>
            </div>
      </div>
      <div>
      <p>There are many variants of passage of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
            <div className='align-items-center gap-3 d-flex'>
                <img alt='' src='Assets/img/ava-3.jpg' className='img-fluid w-25'></img>
                <h6>Brent R.</h6>
            </div>
      </div>
      <div>
      <p>There are many variants of passage of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
            <div className='align-items-center gap-3 d-flex'>
                <img alt='' src='Assets/img/ava-4.jpg' className='img-fluid w-25'></img>
                <h6>Jenn W.</h6>
            </div>
      </div>
    </Slider>
    </div>
  )
}

export default TestimonialSlider