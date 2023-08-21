//item list container component for the item list 
import './ItemDetails.css'
import ItemCount from '../ItemCount/itemCount'
import { Link } from 'react-router-dom'
function ItemDetails (props) {
    
    const {id, title, img, price, description,stock } = props;

    return (
        <>
        <div className='Card'>
            <img width={500} src={img} alt="imagen" />
            <h1>{title}</h1>
            <h2>S/.{price} </h2>
            <p>{description}</p>
            <ItemCount stock={stock}/>
            <Link className='BuyBtn' to={`/item/${id}`}>Ver producto</Link>
        </div>
        </>
    );
}

export default ItemDetails;