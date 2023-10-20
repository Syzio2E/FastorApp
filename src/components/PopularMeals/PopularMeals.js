import React from 'react'
import classes from './PopularMeals.module.css'
import { AiFillStar } from 'react-icons/ai';
import { BiSolidOffer } from 'react-icons/bi';
import {Link} from 'react-router-dom'


const PopularMeals = (props) => {
  return (
    <div className={classes.container}>
      <div>
      <Link to={`/homepage/${props.id}?title=${props.title}&image=${props.image}&location=${props.location}&rating=${props.rating}&description=${props.description}`} className={classes.link}>
          <img className={classes.image} src={props.image} alt={props.title} />
        </Link>
      </div>
      <div className={classes.description}>
      <h3 style={{margin: '0',}}>{props.title}</h3>
      <p style={{margin: '0',}}>Cakes,Pastry,Pastas</p>
      <p style={{margin: '0',}}>{props.location}</p>
      <p style={{color:'orange',margin:'5px',display:'flex',alignItems:'center'}}><BiSolidOffer/> 4 Offer Trending</p>
      <div style={{display:'flex', justifyContent:'space-between',marginRight:'0'}}>
        <div style={{marginRight:'30px'}}>
        <p style={{margin: '0',color:'black'}}><AiFillStar/>{props.rating}</p>
        <p style={{margin: '0',}}>Popularity</p>
        </div>
       <div>
       <p style={{margin: '0',color:'black'}}>$ {props.price}</p>
       <p style={{margin: '0',}}>Price for two</p>
       </div>
      </div>
      </div>
    </div>
  )
}

export default PopularMeals
