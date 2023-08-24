// import './cartContainer.css'
import { useState, useEffect, useContext } from 'react'
import { cartContext } from '../../context/context.cart'
import { Link } from 'react-router-dom'
import "./CartItem.css"

function CartContainer (props) {
    const {cart,removeItem,clearCart} = useContext(cartContext)
    const item=props.item
    return (
        <>
            <div className="CartContainer">
                <div className="Cart">
                <div className="CartItem">
                    <img className="item-image" src={item.img} alt="imagen" />
                    <h1 className="item-title">{item.title}</h1>
                    <h2 className="item-price">S/.{item.price}</h2>
                    <p className="item-count">Cantidad: {item.count}</p>
                    <button className="remove-button" onClick={() => removeItem(item.id)}>
                    Eliminar
                    </button>
                </div>
                </div>
            </div>
        </>

    );
}

export default CartContainer;