import React from 'react'
import './Card.css'

const Card = props => {
    const { title, urlToImage, description, author, url } = props.article;
    return (
        <div className='card-wrapper'>
            <div className='card-main'>
                <div className='card-title'>
                    <p>{title}</p>
                </div>
                <div className='card-image'>
                    <img src={urlToImage} alt={title}></img>
                </div>
                <div className='card-description'>
                    <p>{description}</p>
                    <h5>{author}</h5>
                </div>
            </div>

            <div className='card-btn-link'>
                <a href={url} target='_blank' rel="noopener noreferrer">Seguir leyendo</a>
            </div>
        </div>
    )
}

export default Card
