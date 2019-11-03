import React from 'react'
import ReviewCard from './ReviewCard'
import Slider from "react-slick";
import Containter from 'react-bootstrap/Container'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ReviewSlider.css'

export default ({data}) => {
    const reviewList = data.map(review => {
        return <ReviewCard reviewData={review} />
    })

    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    return (
        <Containter className='slider-container'>
            <Slider {...settings}>
                {reviewList}
            </Slider>
        </Containter>
        
    )
}



// https://codepen.io/Thunderboy/pen/LxjrgB
// https://codepen.io/doreentseng/pen/VzbXRg
// https://codepen.io/kreigd/pen/ybYNoN