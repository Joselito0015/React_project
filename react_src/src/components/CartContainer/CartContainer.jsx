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
        <h1>Carrito de Compra</h1>
        {cart.map((item) => {
          console.log(`item: ${item}`)
          return (<CartItem key={item.id} item={item} onRemove={() => removeItem(item.id)} />)
        })}
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <div className="total-amount">Total de la compra: ${totalPurchase}</div>
            <Link to="/checkout" className="checkout-link BuyBtn" >
              Ir a la Compra
            </Link>
          </>
        )}
      </div>
    </section>
  );
}

export default CartContainer;
