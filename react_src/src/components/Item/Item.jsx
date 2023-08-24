import { Link } from "react-router-dom";
import "./item.css";

function Item (props) {
  const {id, title, img, price, description,stock } = props;
  
  return (
      <>
      <div className='Card'>
          <img width={500} src={img} alt="imagen" />
          <h1>{title}</h1>
          <h2>S/.{price} </h2>
          <p>{description}</p>
          <Link className='BuyBtn' to={`/item/${id}`}>Ver Producto</Link>
      </div>
      </>
  );
}

export default Item;
