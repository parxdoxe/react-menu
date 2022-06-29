import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1>Découvrez notre <div className='skew'>menu.</div></h1>
            <div className="onglet">
                <button className='active'>Tout</button>
                <button>Viandes</button>
                <button>Legumes</button>
            </div>
        </header>
    );
};

export default Header;