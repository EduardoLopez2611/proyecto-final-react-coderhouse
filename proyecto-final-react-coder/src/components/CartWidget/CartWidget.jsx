import { Badge, IconButton } from "@mui/material";
import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext);

    return (
        <IconButton aria-label="cart">
            <Badge badgeContent={totalQuantity} color="error">
                <BsFillCartFill />
            </Badge>
        </IconButton>
    );
};
