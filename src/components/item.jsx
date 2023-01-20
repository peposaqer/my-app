import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img from "./img/Group 333.png"
import img1 from "./img/Group 335.png"
import img2 from "./img/Group 331.png"
import img3 from "./img/Group 329.png"

export default () => (
    <Carousel autoPlay transitionTime="1000" infiniteLoop showArrows={true} dots={false}>
        <div>
            <img alt="" src={img} />
        </div>
        <div>
            <img alt="" src={img1} />
        </div>
        <div>
            <img alt="" src={img2} />
        </div>
        <div>
            <img alt="" src={img3} />
        </div>
    </Carousel>
);
