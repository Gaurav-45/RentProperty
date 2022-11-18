import React from 'react'
import './Card.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Card = ({item}) => {
  return (
    <div className='card'>
        <div className="image">
            <img src={item.image} alt="" />
        </div>
        <div className='info'>
            <h3 className='houseName'>{item.name}</h3>
            <p className='street'>{item.address}</p>
            <div className="city">
                <LocationOnIcon/>
                <p>{item.city}</p>
            </div>
            <h2 className='price'>Rs. {item.price} <span>/night</span></h2>
        </div>
    </div>
  )
}

export default Card