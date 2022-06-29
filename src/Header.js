import React, { useState } from 'react';
import './Header.css'

const Header = () => {


    const [isActive, setIsActive] = useState(1)

     const handleChange = (index) => {
        setIsActive(index)
    }

    return (
        <header>
            <h1>Découvrez notre <div className='skew'>menu.</div></h1>
            <div className="onglet">
                <button value="all" onClick={() => handleChange(1)} className={isActive === 1 ? "active" : ""}>Tout</button>
                <button value="meat" onClick={() => handleChange(2)} className={isActive === 2 ? "active" : ""}>Viandes</button>
                <button value="flower" onClick={() => handleChange(3)} className={isActive === 3 ? "active" : ""}>Legumes</button>
            </div>
        </header>
    );
};

export default Header;