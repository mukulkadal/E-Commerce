import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart_ from "./Pages/Cart_";
import Categary from "./Pages/Categary";
import Products from './Pages/Products'
import Card_component from "./components/Card_component";
import Home from "./Pages/Home";
import Login_form from "./Pages/Login_form";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Forms from "./Pages/Forms";

// import Common_cumponent from "./components/Common_cumponent";

function App() {
  return (
    <>
      {/* <Products/> */}
      {/* <Common_cumponent/> */}
      {/* <Categary/> */}
      {/* <Cart_/> */}
   

      <ToastContainer />

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Form" element={<Forms/>}/>
        <Route path="/Login_form" element={<Login_form/>}/>
        <Route path="/Card_component" element={<Card_component/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Cart_" element={<Cart_/>}/>
        <Route path="/Categary" element={<Categary/>}/>

  
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
