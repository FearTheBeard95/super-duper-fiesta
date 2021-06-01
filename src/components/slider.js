import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';

function onChange(a, b, c) {
    console.log(a, b, c);
}

const contentStyle = {
    height: '100%',
    display: 'block',
    'margin-left': 'auto',
    'margin-right': 'auto',
    align: 'center'
};

function Slider() {
    return (
        <Carousel w="100" id="carouselExample">
            <Carousel.Inner>
                <Carousel.Item active><BImg display="block" w="100" src={"http://vivaworkers.org/sites/default/files/slideshow/OP.jpg"} /></Carousel.Item>
                <Carousel.Item><BImg display="block" w="100" src={"http://vivaworkers.org/sites/default/files/slideshow/OP.jpg"} /></Carousel.Item>
                <Carousel.Item><BImg display="block" w="100" src={"http://vivaworkers.org/sites/default/files/slideshow/OP.jpg"} /></Carousel.Item>
            </Carousel.Inner>
        </Carousel>
    )
}

export default Slider