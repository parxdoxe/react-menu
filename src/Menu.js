import React, { useEffect, useState } from 'react';
import './Menu.css'
import Card from './Card'
import axios from 'axios';


const Menu = () => {

    const [meals, setMeals] = useState([])



   useEffect (() => {
    axios.get('http://localhost:3000/meals').then((response) => setMeals(response.data))
   },[])
    

    return (
        <div className='container-flex'>
            {meals.map((meal) => <Card key={meal.title} meal={meal}></Card>)}
        </div>
    );
};

export default Menu;