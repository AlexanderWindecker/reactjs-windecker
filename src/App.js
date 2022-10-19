import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetails/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartView from "./components/CartView/CartView";
import MyProvider from "./components/context/CartContext";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:cat" element={<ItemListContainer />} />
          <Route path="/pasteles/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout/:orderid" element={<Checkout/>} />
          <Route path="/404" element={<h1>te perdiste</h1>} />
          <Route path="/Cart" element={<CartView />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
