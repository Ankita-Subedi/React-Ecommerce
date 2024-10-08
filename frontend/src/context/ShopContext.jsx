import { products } from "../assets/assets.js";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (!size) {
      toast.error("Select size");
      return;
    }

    if(cartData[itemId]){
        if(cartData[itemId][size]){
            // Increment the quantity for existing size
            cartData[itemId][size] += 1;
        } else {
            // If size does not exist, set quantity to 1
            cartData[itemId][size] = 1;
        }
    } else {
        // If item does not exist, create a new object and set size to 1
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
    } 
    setCartItems(cartData)
};

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );

}
export default ShopContextProvider;