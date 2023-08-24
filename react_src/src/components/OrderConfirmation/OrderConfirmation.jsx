import { useParams } from "react-router-dom"
import './OrderConfirmation.css'
function OrderConfirmation(props){

    const {id} = useParams()

    return(
        <div className="container-order-confirmation">
            <h1 className="thank-you-heading">¡Gracias por tu compra!</h1>
            <p className="thank-you-message">
                En breve recibirás un correo con los detalles de tu compra.
            </p>
            <p className="order-id">El número de tu orden es: {id}</p>
        </div>

    )
}

export default OrderConfirmation