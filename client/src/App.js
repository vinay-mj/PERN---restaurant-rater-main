import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from './routes/HomePage';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetail from './routes/RestaurantDetail';
import { RestaurantsContextProvider } from './context/RestaurantContexts';


function App() {
  return (
    <RestaurantsContextProvider>
      <div className='container'>
      <Router> 
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/restaurants/:id/update" element={<UpdatePage/>}/>
          <Route path="/restaurants/:id" element={<RestaurantDetail/>}/>
        </Routes>
      </Router>
    </div>
    </RestaurantsContextProvider>
    
  );
}

export default App;
