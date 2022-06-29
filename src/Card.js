import React, { useEffect, useState } from 'react';

import './Card.css'
import { NavLink } from 'react-router-dom';

const Card = ({meal}) => {
    const [hover, setHover] = useState()

   const ajoutButton = () => {
        setHover(true)
    }

    const removeButton = () => {
        setHover(false)
    }

    const addToStorage = () => {
        let storedData = window.localStorage.meals ? window.localStorage.meals.split(",") : []

        
            storedData.push(meal.title, meal.imageSrc)
            window.localStorage.meal = storedData
           
    }

    return (
        <div className='card' onMouseOver={ajoutButton} onMouseOut={removeButton}>
            
            <div className='image'>
                <div className='filter'></div>
                <img className='image' src={meal.imageSrc} alt="" />
                {hover ? <NavLink to="/commande"><button className='commander' onClick={() => addToStorage()} >Commander</button></NavLink> : ""}
                <div className='avis'><span className='star'>&#9733;</span>{meal.rating} <span>({meal.reviews})</span></div>
            </div>
            

            
            <h4>{meal.title}</h4>

            <p className='description'>{meal.content}</p>

            <p className='price'>{meal.price}</p>
        </div>
    );
};

export default Card;