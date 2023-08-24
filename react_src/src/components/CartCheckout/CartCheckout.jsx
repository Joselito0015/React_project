import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/context.cart";
import { createOrder } from "../../services/firebase";
import { useContext, useState } from "react";
import "./CartCheckout.css";


function CartCheckout() {
  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const navigate = useNavigate();
  const { cart, getTotalPriceInCart } = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: getTotalPriceInCart(),
    };

    try {
      const idOrder = await createOrder(orderData);
      console.log(`Gracias por tu compra, tu numero de orden es ${idOrder}`);
      navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }
  }

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    //buyer["firstname"] -> buyer.firstname
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      age: "",
    });
  }

  return (
    <form className="checkout-form">
      <h2 className="form-heading">🛍️ ¡Prepárate para completar tu compra! </h2>
      <p> 🛒 Ingresa tus datos aquí para finalizar el proceso de compra.</p>
      <div className="form-row">
        <label className="form-label" htmlFor="firstname">
          Nombre
        </label>
        <input
          className="form-input"
          value={buyer.firstname}
          name="firstname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div className="form-row">
        <label className="form-label" htmlFor="lastname">
          Apellido
        </label>
        <input
          className="form-input"
          value={buyer.lastname}
          name="lastname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div className="form-row">
        <label className="form-label" htmlFor="age">
          Edad
        </label>
        <input
          className="form-input"
          value={buyer.age}
          name="age"
          type="number"
          onChange={onInputChange}
        />
      </div>

      <button
        className="form-button"
        disabled={!(buyer.firstname !== "" && buyer.lastname !== "" && buyer.age !== "")}
        onClick={handleCheckout}
      >
        Confirmar Compra
      </button>
      <button className="form-button cancel-button" onClick={resetForm}>
        Cancelar
      </button>
    </form>

  );
}

export default CartCheckout;
