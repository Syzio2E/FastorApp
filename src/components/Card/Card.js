import React from 'react';
import styles from './Card.module.css'; // Import the CSS Module

const Card = (props) => {
  return (
    <div className={styles.card} style={{backgroundColor:props.color}}> 
      <div>
        <img src={props.url} alt={props.restaurant_name} />
      </div>
      <div className={styles.details} style={{backgroundColor:props.color}}>
        <h1>{props.restaurant_name}</h1>
        <p>{props.location_locality}</p>
        <p>{props.city_name}</p>
      </div>
    </div>
  );
};

export default Card;






