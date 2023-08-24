import { Link } from "react-router-dom";
import "./item.css";

function Item (props) {
  const {id, title, img, price, description,stock } = props;
  
  return (
    <>
      <div className="ProductCard">
        <div className="product-image-container">
          <img className="product-image" src={img} alt="Imagen del producto" />
        </div>
        <div className="product-details">
          <h2 className="product-title">{title}</h2>
          <h3 className="product-price">S/.{price}</h3>
          <p className="product-description">{description}</p>
          <Link className="product-link" to={`/item/${id}`}>
            Ver Producto
          </Link>
        </div>
      </div>
    </>
  );
}

export default Item;
