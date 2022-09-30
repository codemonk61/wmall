
import {Routes,Route} from "react-router-dom"
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import Header from "./components/Header";
import HomePage from './components/HomePage';
import OrderPreview from "./components/OrderPreview";
import ProductDetails from "./components/ProductDetails";
import Success from "./components/Success";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="cart" element={<CartPage/>}/>
      <Route path="cart/:id" element={<ProductDetails/>}/>
      <Route path="cart/checkout/:id" element={<CheckoutPage/>}/>
      <Route path="cart/checkout/:id/orderpreview/:id" element={<OrderPreview/>}/>
      <Route path="cart/checkout/:id/orderpreview/:id/success" element={<Success/>}/>
      <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>
    
    </>
   
  );
}

export default App;
