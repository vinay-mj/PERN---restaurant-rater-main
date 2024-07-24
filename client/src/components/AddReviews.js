import React, { useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const AddReviews = () => {
  const {id} = useParams();
  const history = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating
      });
      history('/');
      history(location.pathname);
    } catch (err) {
      console.error(err);
    }
    
  }

  return (
    <div className="mb-2">
      <form action="/">
        <div className="form-row">
          <div className="form-group col-5 mb-4">
            <label htmlFor='name'>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' className='form-control mt-1 border border-dark' placeholder='name'/>
          </div>
          </div>

          <div className="form-group col-3 mb-4">
          <label htmlFor='rating'>Rating</label>
            <select value={rating} onChange={(e) => setRating(e.target.value)} id="rating" className='custom-select form-control mt-1 border border-dark'>
              <option disabled>select rating</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        
        <div className="form-group mb-4">
          <label htmlFor='review'>review</label>
          <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} id="review" className="form-control mt-1 border border-dark" placeholder='write your review'></textarea>
        </div>
        <button type="submit" onClick={handleSubmitReview} className="btn btn-primary">Add review</button>
      </form>
    </div>
  )
}

export default AddReviews