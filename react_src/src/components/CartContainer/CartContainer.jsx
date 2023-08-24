import { useContext } from "react";
import { cartContext } from "../../context/context.cart";
// import { createOrder } from "../../services/firebase";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  const totalPurchase = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <section className="cart-section">
      <div className="cart-container">
        <h1>Carrito de Compra</h1>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeItem} />
        ))}
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <div className="total-amount">Total de la compra: ${totalPurchase}</div>
            <Link to="/checkout" className="checkout-link">
              Ir a la Compra
            </Link>
          </>
        )}
      </div>
    </section>
  );
}

export default CartContainer;
