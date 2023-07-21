//item list container component for the item list 
import './ItemListContainer.css'

function ItemListContainer (props) {

    return (
        <div className="item-list-container">
            <h1>{props.greeting}</h1>
        </div>
    );
}

export default ItemListContainer;