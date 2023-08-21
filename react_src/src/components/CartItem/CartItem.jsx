
function CartItem({ item, onRemove }) {
    const totalPrice = item.price * item.count;
  
    return (
      <div className="cart-item">
        <h2>{item.title}</h2>
        <p>Precio por unidad: S/.{item.price}</p>
        <p>Cantidad de unidades: {item.count}</p>
        <p>Precio total: S/.{totalPrice}</p>
        <button onClick={() => onRemove(item.id)}>Eliminar</button>
      </div>
    );
  }

  export default CartItem;
