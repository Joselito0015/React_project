//item list container component for the item list 
import './ItemDetails.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function ItemDetails (props) {
    const [count,setCount] = useState(0)
    
    const {id, title, img, price, description,stock } = props;

    function increment(){
        if (count < stock){
        setCount(count+1)
        }
    }

    function decrement(){
        if (count > 0){
        setCount(count-1)
        }
    }


    return (
        <>
        <div className='Card'>
            <div>
                <img width={500} src={img} alt="imagen" />
            </div>        
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <h2>S/.{price} </h2>
            </div>

            <div>
                <p>{description}</p>
            </div>
            
            <div className='counter-bar'>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>               
            </div>

            <div >
               
                    <Link className='BuyBtn' to={`/item/${id}`}>Ver producto</Link>
              
            </div>
        </div>
        </>
    );
}

export default ItemDetails;