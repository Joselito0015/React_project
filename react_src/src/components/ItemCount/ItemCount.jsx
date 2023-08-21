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
    }

    function decrement(){
        if (count > 0){
        setCount(count-1)
        }
    }

    return (
        <div className='counter-bar'>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>               
        </div>
    );
}

export default ItemCount;