import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./scss/style.scss";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ShopContextProvider from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);