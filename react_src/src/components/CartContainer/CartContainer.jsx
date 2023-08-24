import { useContext,useEffect,useState } from "react";
import { cartContext } from "../../context/context.cart";
// import { createOrder } from "../../services/firebase";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";

function CartContainer() {
  
  const { cart, removeItem,getTotalPriceInCart } = useContext(cartContext);
  const [totalPurchase, setTotalPurchase] = useState(0);

  useEffect(() => {
    setTotalPurchase(getTotalPriceInCart())
    console.log(totalPurchase);
    console.log(cart);
    
  }, [cart]);

  return (
    <section className="cart-section">
      <div className="cart-container">
        <h1 className="cart-heading">Carrito de Compra</h1>
        {cart.length === 0 ? (
          <p className="empty-cart-message">
            🛒 Tu carrito de compra está tan ligero como una pluma. ¡Añade algo a tu carrito para llenarlo de emoción! 🛍️😊
          </p>
        ) : (
          <>
            {cart.map(item => (
              <CartItem key={item.id} item={item} onRemove={() => removeItem(item.id)} />
            ))}
            <div className="total-amount">Total de la compra: ${totalPurchase}</div>
            <Link to="/checkout" className="checkout-link BuyBtn">
              Ir a la Compra
            </Link>
          </>
        )}
      </div>
    </section>
  );
}

export default CartContainer;
