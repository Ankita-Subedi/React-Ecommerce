import {Routes, Route} from "react-router-dom"
import Navbar from "./components/frontend/layouts/Navbar"
import Footer from "./components/frontend/layouts/Footer"
import Home from "./components/frontend/pages/Home"
import Collection from "./components/frontend/pages/Collection"
import About from "./components/frontend/pages/About"
import Contact from "./components/frontend/pages/Contact"
import Product from "./components/frontend/pages/Product"
import Cart from "./components/frontend/pages/Cart"
import Login from "./components/frontend/pages/Login"
import PlaceOrder from "./components/frontend/pages/PlaceOrder"
import Orders from "./components/frontend/pages/Orders"
import SearchBar from "./components/frontend/layouts/SearchBar"

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/log-in" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App