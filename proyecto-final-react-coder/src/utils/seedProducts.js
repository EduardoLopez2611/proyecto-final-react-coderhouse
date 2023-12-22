import {addDoc, collection} from "firebase/firestore"; 
import {db} from "../config/firebaseConfig";

const products = [
    {
    name:"Remera 01", 
    img:"url-image", 
    price:5000, 
    category:"ropa", 
    description:"remera-01", 
    stock:25,
},
    {
    name:"Bermuda 01", 
    img:"url-image", 
    price:9000, 
    category:"ropa", 
    description:"bermuda-01", 
    stock:25,
},
    {
    name:"Short 01", 
    img:"url-image", 
    price:7200, 
    category:"ropa", 
    description:"short-01", 
    stock:25,
},
    {
    name:"Short 02", 
    img:"url-image", 
    price:8600, 
    category:"ropa", 
    description:"short-02", 
    stock:25,
},
    {
    name:"Camiseta 01", 
    img:"url-image", 
    price:11000, 
    category:"ropa", 
    description:"camiseta-01", 
    stock:25,
},
    {
    name:"Camiseta 02", 
    img:"url-image", 
    price:10000, 
    category:"ropa", 
    description:"camiseta-02", 
    stock:25,
},
    {
    name:"Zapatilla 01", 
    img:"url-image", 
    price:20000, 
    category:"calzados", 
    description:"zapatilla-01", 
    stock:25,
},
    {
    name:"Zapatilla 02", 
    img:"url-image", 
    price:35000, 
    category:"calzados", 
    description:"zapatilla-02", 
    stock:25,
},
    {
    name:"Medias 01", 
    img:"url-image", 
    price:2500, 
    category:"calzados", 
    description:"medias-01", 
    stock:25,
},
    {
    name:"Medias 02", 
    img:"url-image", 
    price:3700, 
    category:"calzados", 
    description:"medias-02", 
    stock:25,
},
    {
    name:"Pantalón 01", 
    img:"url-image", 
    price:14000, 
    category:"ropa", 
    description:"pantalon-01", 
    stock:25,
},
    {
    name:"Ojotas 01", 
    img:"url-image", 
    price:6000, 
    category:"calzados", 
    description:"ojotas-01", 
    stock:25,
},
];

export const seedProducts = () => {
    products.forEach(product => {
        addDoc(collection(db, "products", product))
    });
};