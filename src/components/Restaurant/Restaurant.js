import React, { useEffect, useState, useRef } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Restaurant.module.css"; // Import the CSS Module
import Offer from "../Offer/Offer";
import PopularMeals from "../PopularMeals/PopularMeals";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
  const containerRef = useRef();
  const initialDisplayCount = 3; // Adjust as needed
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const getAllRestaurant = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get(
        "https://staging.fastor.in/v1/m/restaurant?city_id=118",
        { headers: { Authorization: token } }
      );
      setRestaurants(response.data);
      // Initially, display the first 3 restaurants
      setDisplayedRestaurants(response.data.slice(0, initialDisplayCount));
    }
  };

  useEffect(() => {
    getAllRestaurant();
  }, []);

  

  const handleSeeAll = () => {
    // When "See All" is clicked, show the next 3 restaurants
    const newDisplayCount = displayCount + initialDisplayCount;
    setDisplayCount(newDisplayCount);
    setDisplayedRestaurants(restaurants.slice(0, newDisplayCount));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
         margin:'40px'
         
        }}
      >
        <h1>Your Taste</h1>
        <p onClick={handleSeeAll}>
          See All <BiRightArrowCircle />
        </p>
      </div>
      <div ref={containerRef} className={styles.gridContainer}>
  {console.log(displayedRestaurants)}
  {displayedRestaurants.map((restaurant) => (
    <Card
      key={restaurant.restaurant_id}
      url={restaurant.images[0]?.url}
      restaurant_name={restaurant.restaurant_name}
      location_locality={restaurant.location?.location_locality}
      city_name={restaurant.location?.city_name}
      color={restaurant.cuisines[0]?.color}
    />
  ))}
</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px",
        }}
      >
       
      </div>
      <Offer />
      <h1 style={{ marginLeft: "30px" }}>Popular Ones</h1>
      {console.log(displayedRestaurants)}
      {displayedRestaurants.map((restaurant) => (
        <PopularMeals
          key={restaurant.restaurant_id}
          id={restaurant.restaurant_id}
          image={restaurant.images[0]?.url}
          title={restaurant.restaurant_name}
          location={restaurant.location?.location_locality}
          rating={restaurant.rating?.restaurant_avg_rating}
          price={restaurant.avg_cost_for_two}
        />
      ))}
    </div>
  );
};

export default Restaurant;