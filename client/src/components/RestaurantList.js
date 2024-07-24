import React, { useContext, useEffect } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantContexts';
import { useNavigate } from 'react-router-dom'
import StarRating from './StarRating';

const RestaurantList = (props) => {
  const {restaurants, setRestaurants} = useContext(RestaurantsContext);
  let history = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get('/');
        setRestaurants(response.data.data.restaurants);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => {
        return restaurant.id !== id;
      }));
    } catch (err) {
      console.error(err);
    }
}

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history(`/restaurants/${id}/update`);
  }

  const handleRestaurantselect = (id) => {
    history(`/restaurants/${id}`);
  }

  const renderRating = (restaurant) => {
    if(!restaurant.count) {
      return(
        <span className="text-warning">No reviews yet</span>
      )
    }
    return (
    <>
    <StarRating rating={restaurant.average_rating}/>
    <span className="text-warning ml-1">({restaurant.count})</span>
    </>
    )
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <table className="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col" className='bg-primary'>Restaurant</th>
                <th scope="col" className='bg-primary'>Location</th>
                <th scope="col" className='bg-primary'>Price Range</th>
                <th scope="col" className='bg-primary'>Ratings</th>
                <th scope="col" className='bg-primary'>Edit</th>
                <th scope="col" className='bg-primary'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {restaurants && restaurants.map(restaurant => {
                return(
                  <tr onClick = {() => handleRestaurantselect(restaurant.id)} key={restaurant.id}>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.location}</td>
                    <td>{"$".repeat(restaurant.price_range)}</td>
                    <td>{renderRating(restaurant)}</td>
                    <td><button onClick={(e) => handleUpdate(e, restaurant.id)} className="btn btn-warning">Edit</button></td>
                    <td><button onClick={(e) => handleDelete(e, restaurant.id)} className="btn btn-danger">Delete</button></td>
                  </tr>
                );
              })}
              {/* <tr>
                <th scope="row">1</th>
                <td>McDonald</td>
                <td>New York</td>
                <td>$$$</td>
                <td><button className="btn btn-warning">Edit</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Burger King</td>
                <td>Los Angeles</td>
                <td>$$</td>
                <td><button className="btn btn-warning">Edit</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
