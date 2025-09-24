import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Componentes/Cart/CartSlice";
import clientReducer from "./pages/Client/clientSlice.js";
import userReducer from "./pages/User/userSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    client: clientReducer,
    user: userReducer,
  },
});
