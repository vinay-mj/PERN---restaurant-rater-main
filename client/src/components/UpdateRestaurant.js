import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantContexts';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = () => {
  const { id } = useParams();
  let history = useNavigate();
  const { restaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range : priceRange 
    });
    history('/');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        const { name, location, priceRange } = response.data.data.restaurant;
        setName(name);
        setLocation(location);
        setPriceRange(priceRange);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <form action=''>
        <div className="form-group mb-4">
          <label htmlFor='name' className='mb-2'>Name</label>
          <input value={name || ''} onChange={e => setName(e.target.value)} type="text" id="name" className="form-control"></input>
        </div>
        <div className="form-group mb-4">
          <label htmlFor='location' className='mb-2'>Location</label>
          <input value={location || ''} onChange={e => setLocation(e.target.value)} type="text" id="location" className="form-control"></input>
        </div>
        <div className="form-group mb-4">
          <label htmlFor='price_range' className='mb-2'>Price Range</label>
          <input value={priceRange || ''} onChange={e => setPriceRange(e.target.value)} type="number" id="price_range" className="form-control"></input>
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
