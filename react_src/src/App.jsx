import './App.css'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartContainer from './components/CartContainer/CartContainer'
import {CartContextProvider} from './context/context.cart'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    
    <>
      <div className="body">
        <CartContextProvider>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/category/:category" element={<ItemListContainer />}/>
                <Route path="/item/:id" element={<ItemListContainer/>}/>
                <Route path="/cart" element={<CartContainer/>} />
                <Route path="*" element={404}/>
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </div>
    </>
  )
}

export default App
