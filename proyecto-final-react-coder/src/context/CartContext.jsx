import { createContext, useEffect, useState } from "react";

export const CartContext = createContext("");

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {
        setCartItems((prevItems) => {
            const { id, name, price } = item;
            const index = prevItems.findIndex((product) => product.id === id);

            if (index !== -1) {
                const cartItemsCopy = [...prevItems];
                cartItemsCopy[index].quantity += quantity;
                cartItemsCopy[index].subTotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price;
                return cartItemsCopy;
            } else {
                const newItem = {
                    id,
                    name,
                    price,
                    quantity,
                    subTotal: quantity * price,
                };
                return [...prevItems, newItem];
            }
        });
    };

    const removeItem = (id) => {
        const arrayFilter = cartItems.filter((item) => item.id !== id);
        setCartItems(arrayFilter);
    };

    const clearCartItems = () => {
        setCartItems([]);
    };

    useEffect(() => {
        const newTotalQuantity = cartItems.reduce((acum, item) => acum + item.quantity, 0);
        setTotalQuantity(newTotalQuantity);
        setTotalCartItems(cartItems.length);
    }, [cartItems]);

    const objectValue = {
        cartItems,
        totalCartItems,
        totalQuantity,
        addItem,
        removeItem,
        clearCartItems,
    };

    return <CartContext.Provider value={objectValue}>{children}</CartContext.Provider>;
};
