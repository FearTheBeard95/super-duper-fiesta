import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const Jumbotron = (props) => {
  return (
    <MDBJumbotron fluid>
      <MDBContainer>
        <h2 className="display-4">{props.title}</h2>
        <p className="lead">{props.subtitle}</p>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default Jumbotron;