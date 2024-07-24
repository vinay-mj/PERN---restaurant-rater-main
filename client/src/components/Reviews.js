import React from 'react'
import StarRating from './StarRating'

const Reviews = ({reviews}) => {
  return (
    <div className='className= row row-cols-3 mb-2'>
      {reviews.map((review) => {
        return(
          <div key={review.id} className="card text-white bg-primary mb-3 mr-4" style={{maxWidth:'30%', margin: '0 4px'}}>
          <div className="card-header d-flex justify-content-between">
            <span>{review.name}</span>
            <span><StarRating rating={review.rating}/></span>
          </div>
          <div className="card-body">
            <p className="card-text">{review.review}</p>
          </div>
        </div>
        );
      })}
      {/* <div className='row row-cols-3 mb-2'>
        <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth:'30%', margin: '0 4px'}}>
          <div className="card-header d-flex justify-content-between">
            <span>Joey</span>
            <span><StarRating rating={3}/></span>
          </div>
          <div className="card-body">
            <p className="card-text">This restaurant is awesome</p>
          </div>
        </div>

        <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth:'30%', margin: '0 4px'}}>
          <div className="card-header d-flex justify-content-between">
            <span>Joey</span>
            <span><StarRating rating={3}/></span>
          </div>
          <div className="card-body">
            <p className="card-text">This restaurant is awesome</p>
          </div>
        </div>

        <div className="card text-white bg-primary mb-3 ml-5" style={{maxWidth:'30%', margin: '0 4px'}}>
          <div className="card-header d-flex justify-content-between">
            <span>Joey</span>
            <span><StarRating rating={3}/></span>
          </div>
          <div className="card-body">
            <p className="card-text">This restaurant is awesome</p>
          </div>
        </div>

        <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth:'30%', margin: '0 4px'}}>
          <div className="card-header d-flex justify-content-between">
            <span>Joey</span>
            <span><StarRating rating={3}/></span>
          </div>
          <div className="card-body">
            <p className="card-text">This restaurant is awesome</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Reviews
