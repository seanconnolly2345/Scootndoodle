import React from 'react'

export default ({reviewData}) => {
    return (
        <React.Fragment>
            <p>{reviewData.content}</p>
            <strong>{reviewData.name}</strong>,
            {' '}
            <small>{reviewData.position}</small>
        </React.Fragment>
    )
}