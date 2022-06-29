import './Commande.css'
import Header from './Header';

const Commande = () => {

    
    var url = window.localStorage.meal.split(",",2);
    

    return (
        
        <div className='container'>
            <Header></Header>
            <p className='text-commande'>Vous avez commandé le repas {window.localStorage.meal.split(",",1)}</p>
            <img className='image-commande' src={url[1]} alt="" />
        </div>
    );
};

export default Commande;