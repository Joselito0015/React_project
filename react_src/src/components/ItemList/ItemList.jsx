import React from "react";
import Item from "../Item/Item";

/* Componente de Presentación
- Recibe como parámetro un array de productos
- Muestra un listado de productos
*/

function ItemList(props) {
  const { products } = props;

  return (
    <div>
      <p>1</p>
      <h1>Listado de Productossssss</h1>
      <div className="flex-container">
        {products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
