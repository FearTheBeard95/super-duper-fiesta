import { Card as BCard, Space } from 'antd';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import MyCards from '../components/cardGroup'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'

function HomePage() {
    return (
        <div>
            <Space direction='vertical'>
                <Header location='/'/>
                <MDBContainer>
                    <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1"
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="http://vivaworkers.org/sites/default/files/slideshow/Ramatex-Strike-8-1024x768.png"
                                        alt="First slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="http://vivaworkers.org/sites/default/files/slideshow/A.jpg"
                                        alt="Second slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="http://vivaworkers.org/sites/default/files/slideshow/OP.jpg"
                                        alt="Third slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
                <BCard title="About Viva Workers">
                    <p>Vivaworkers.org is the website of Herbert Jauch and provides articles, commentaries and research reports primarily on labour issues but also on politics and economics in Namibia and Southern Africa.  The purpose of this website is to make information  easily available and to share it with anybody who is interested in the questions of labour, development and social justice.</p>
                    <p>Herbert Jauch has been with the labour movement in Southern Africa for 30 years.  He served as executive member of the Namibian National Teachers Union (NANTU) as well as on various committees of the National Union of Namibian Workers (NUNW).  Since 1995 Herbert worked as labour researcher, carrying out research projects for the Southern African Trade Union Co-ordination Council (SATUCC) as well as Namibian and South African trade unions.  Herbert was instrumental in developing a labour diploma course for Namibian trade unions and served as director of the Labour Resource and Research Institute (LARRI) in Katutura, Windhoek from 1998 until 2007.  He was LaRRI's senior researcher until January 2010 and established the education centre of the Metal and Allied Namibian Workers Union (MANWU) from 2015-2017. He now works as freelance labour researcher and educator with various organisations in Southern Africa.</p>
                </BCard>
                <MyCards />
                <Footer />
            </Space>
        </div>
    )
}

export default HomePage