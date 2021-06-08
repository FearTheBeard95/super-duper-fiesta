import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            top
            src={props.image}
            overlay='white-slight'
            hover
            waves
            alt='Image'
          />
          <MDBCardBody className='elegant-color white-text'>
            <MDBCardTitle className='white-text'>{props.title}</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
              {props.subtitle}
            </MDBCardText>
            <Link to={props.link}><h5 className='white-text'>
            View
            <MDBIcon icon='angle-double-right' className='ml-2' />
          </h5></Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  )
}

export default Card;