//Cart component conteiner for the cart 


// import './cartContainer.css'
import { useState, useEffect, useContext } from 'react'
import { cartContext } from '../../context/context.cart'
import { Link } from 'react-router-dom'

function CartContainer () {
    const {cart,removeItem,clearCart} = useContext(cartContext)
    const [total,setTotal] = useState(0)

    useEffect(()=>{
        let total = 0
        cart.forEach((item)=>{
            total += item.price * item.quantity
        })
        setTotal(total)
    },[cart])

    return (
        <>
        <div className='CartContainer'>
            <div className='Cart'>
                {cart.map((item)=>{
                    return (
                        <div className='CartItem'>
                            <img width={100} src={item.img} alt="imagen" />
                            <h1>{item.title}</h1>
                            <h2>S/.{item.price} </h2>
                            <p>Cantidad: {item.quantity}</p>
                            <button onClick={()=>removeItem(item.id)}>Eliminar</button>
                        </div>
                    )
                })}
            </div>
            <h2>Total: S/.{total}</h2>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link className='BuyBtn' to={`/`}>Seguir Comprando</Link>
        </div>
        </>
    );
}

export default CartContainer;