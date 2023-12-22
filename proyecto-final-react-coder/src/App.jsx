import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Form, ItemListContainer, NavBar } from "./components";
import { CartContextProvider } from "./context/CartContext";
import { FirebaseContextProvider } from "./context/FirebaseContext";

export const App = () => {
    return (
        <BrowserRouter>
                    <CartContextProvider>
                    <NavBar/>
                <FirebaseContextProvider>
                    <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:category" element={<ItemListContainer />} />
                    <Route path="/cart" element={
                        <>
                        <Cart />
                        <Form/>
                        </>
                    }/>
                    </Routes>
                </FirebaseContextProvider>
                </CartContextProvider>
            </BrowserRouter>
    );
};