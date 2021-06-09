import React, { Component } from 'react';
import {
  Collapse,
  Container,
  Row,
  Col,
  List,
  Navbar,
  Jumbotron,
  Lead,
  Button,
  ButtonGroup,
  Card,
  BH1,
  BH4,
  BP,
  BA,
  BDiv,
  BSmall,
  BFooter
} from 'bootstrap-4-react';
import { Link } from 'react-router-dom'
import GallleryImage from '../components/galleryImage'

const thumbnailSrc = 'http://vivaworkers.org/sites/default/files/slideshow/Ramatex-Strike-8-1024x768.png'
const AlbumCard = (props) => {
  return (
    <Col md="4">
      <GallleryImage src={thumbnailSrc}/>
    </Col>
  )
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main role="main">
          <BDiv py="5" bg="light">
            <Container>
              <Row>
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
              </Row>
            </Container>
          </BDiv>
        </main>
      </React.Fragment>
    );
  }
}

export default App;