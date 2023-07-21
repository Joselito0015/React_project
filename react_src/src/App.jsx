import Navbar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CarWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    
    <>
      <Navbar> 
           <CartWidget/>
      </Navbar>      
      <ItemListContainer greeting="Welcome to Mouse Store"/>
    </>
  )
}

export default App
