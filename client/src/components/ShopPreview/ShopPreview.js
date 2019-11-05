import React from 'react'
import Container from 'react-bootstrap/Container'

import './ShopPreview.css'

export const ShopPreview = () => {
    return (
        <Container className='shop-container'>
            This will be the preview for the shop, highlighted items will be
            displayed here in a similar, slider fashion. Query the shop for specific, 
            highlighted shop items. (implement database)
        </Container>
    )
}

//https://codepen.io/cody123anderson/pen/WwZjoE