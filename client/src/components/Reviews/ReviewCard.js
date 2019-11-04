import React from 'react'
import './ReviewCard.css'

export default ({reviewData}) => {
    return (
        <React.Fragment>
            <p>"{reviewData.content}"</p>
            <strong style={{fontSize: '0.9em'}}>{reviewData.name}</strong>,
            {' '}
            <small className='rev-source'>{reviewData.position}</small>
        </React.Fragment>
    )
}