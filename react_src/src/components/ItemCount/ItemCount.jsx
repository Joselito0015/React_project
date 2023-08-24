//item list container component for the item list 
import './ItemCount.css'
import { useState } from 'react'

function ItemCount (props) {
    const [count,setCount] = useState(0)    
    const {stock } = props;

    function increment(){
        if (count < stock){
        setCount(count+1)
        }
        props.handleCount(count)
    }

    function decrement(){
        if (count > 0){
        setCount(count-1)
        }
        props.handleCount(count)
    }

    return (
        <>
            <div className='counter-bar'>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>               
            </div>
            <button  onClick={()=>{props.handleCount(count)}} className='BuyBtn'> Comprar producto</button>
        </>
        );
}

export default ItemCount;