
import {Routes,Route} from "react-router-dom"
import CartPage from "./components/CartPage";
import Header from "./components/Header";
import HomePage from './components/HomePage';
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="cart" element={<CartPage/>}/>
      <Route path="cart/:id" element={<ProductDetails/>}/>
      <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>
    </>
   
  );
}

export default App;
