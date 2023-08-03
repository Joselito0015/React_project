import Navbar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CarWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    
    <>
      <BrowserRouter>
        <Navbar> 
          <CartWidget/>
        </Navbar>      
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Welcome to Mouse Store"/>}/>
          <Route path="/category/:category" element={<ItemListContainer greeting="Welcome to Mouse Store item category"/>}/>
          <Route path="/item/:id" element={<ItemListContainer greeting="Welcome to Mouse Store item id"/>}/>
          <Route path="*" element={404}/>
        </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App
