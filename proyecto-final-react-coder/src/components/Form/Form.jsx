import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FirebaseContext } from "../../context/FirebaseContext";
import { Box, Stack, TextField, Button } from "@mui/material";


export const Form = () => {
    const {addOrderDB} = useContext(FirebaseContext);
    const {cartItems, totalCartItems} = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleForm = (e) => { 
        e.preventDefault();

        const productInfo = cartItems.map((item) => `${item.name} - Quantity: ${item.quantity}`).join('\n');
        const alertMessage = `Muchas gracias por su compra!\n Customer Information:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nProducts in Cart:\n${productInfo}\n\nTotal Quantity: ${totalCartItems}`;
        alert(alertMessage);


        addOrderDB(cartItems, {name, email, phone}, totalCartItems);

        setName("");
        setEmail("");
        setPhone("");
    };


return (
    <Box display={"flex"} flexDirection={"column"} width={400} component="form" onSubmit={handleForm}>
        <Stack spacing={3}>
        <TextField label={"Name"} value={name} onChange={(e) => setName(e.target.value)}/>
        <TextField label={"Email"} value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextField label={"Phone"} value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <Button type="submit" variant="contained" color="success">
            Comprar
        </Button>
        </Stack>
    </Box>
    
);
};