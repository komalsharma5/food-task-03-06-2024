import React from 'react'
import { Container } from 'reactstrap'

export default function CommonSection(props) {
  return (
    <div>
      <section className='common-section'>
        <Container>
            <h2 className='text-white'>{props.title}</h2>
        </Container>
      </section>
    </div>
  )
}
