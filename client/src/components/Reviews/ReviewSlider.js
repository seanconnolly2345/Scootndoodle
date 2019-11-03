import React from 'react'
import ReviewCard from './ReviewCard'
import Slider from "react-slick";
import Containter from 'react-bootstrap/Container'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//class SliderLeftArrow extends React.Component {
//    render() {
//        return (
//            <a
//                href="#"
//                className="carousel__arrow carousel__arrow--left"
//                onClick={this.props.onClick}
//            >
//            <span className="fa fa-2x fa-angle-left" />
//            </a>
//        )
//    }
//}

//class SliderRightArrow extends React.Component {
//    render() {
//        return (
//            <a
//                href="#"
//                className="carousel__arrow carousel__arrow--right"
//                onClick={this.props.onClick}
//            >
//            <span className="fa fa-2x fa-angle-right" />
//            </a>
//        )
//    }
//}

export default ({data}) => {
    const reviewList = data.map(review => {
        return <ReviewCard reviewData={review} />
    })

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Containter>
            <Slider {...settings}>
                {reviewList}
            </Slider>
        </Containter>
        
    )
}



// https://codepen.io/Thunderboy/pen/LxjrgB
// https://codepen.io/doreentseng/pen/VzbXRg
// https://codepen.io/kreigd/pen/ybYNoN