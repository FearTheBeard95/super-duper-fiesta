import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import MyCard from '../components/card'

const Card = (props) => {
  return (
    <MDBRow>
        <MyCard 
            image='http://vivaworkers.org/sites/default/files/styles/RAMATEX-91.png' 
            title='Research Reports' 
            subtitle='This column contains various research reports authored and co-authored by Herbert Jauch since 1998.  Most deal with socio-economic issues in Namibia while others address regional, continental or global challenges.' 
            link='/researchreports'
        />
        <MyCard 
            image='http://vivaworkers.org/sites/default/files/styles/OP.jpg' 
            title='Opinion Pieces' 
            subtitle='Here you will find a variety of Herbert’s commentaries written since 2002.  They cover a range of social, political and economic issues and were published in various newspapers and magazines' 
            link='/opinionpieces'
        />
        <MyCard 
            image='http://vivaworkers.org/sites/default/files/styles/AWP.jpg' 
            title='Articles and Workshop Papers' 
            subtitle='This column contains a range of Herbert"s articles that were published in various journals, newspapers and books.  You will also find several papers presented at workshops, seminars and panel discussions.' 
            link='/articlesreports'
        />
    </MDBRow>
  )
}

export default Card;