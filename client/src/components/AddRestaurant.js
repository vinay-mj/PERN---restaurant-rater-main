import React, { useContext, useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantContexts';

const AddRestaurant = () => {
  const {addRestaurants} = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange
      });
      addRestaurants(response.data.data.restaurant); 
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='mb-4 container'>
  <form action="" className="row">
    <div className="col">
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='form-control' placeholder='Name' />
    </div>
    <div className="col">
      <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className='form-control' placeholder='Location' />
    </div>
    <div className="col">
      <select value={priceRange} onChange={e => setPriceRange(e.target.value)} className='form-control custom-select my-1 mr-sm-2'>
        <option disabled>Price Range</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
        <option value="5">$$$$$</option>
      </select>
    </div>
    <div className="col-auto">
      <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add</button>
    </div>
  </form>
</div>

  )
}

export default AddRestaurant