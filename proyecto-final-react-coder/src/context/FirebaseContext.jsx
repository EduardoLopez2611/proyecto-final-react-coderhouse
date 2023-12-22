import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/firebaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getProductsDB = async (category) => {
    try {
      const myProducts = category
        ? query(collection(db, "products"), where("category", "==", category))
        : query(collection(db, "products"));
      const resp = await getDocs(myProducts);
  
      if (resp.size === 0) {
        console.log("No hay stock de productos en la base de datos");
      } else {
        const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productList);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const getProductById = async (id) => {
    try{ 
    const productRef = doc(db, "products", id);
    const resp = await getDoc(productRef);
      if (resp.exists()) {
        const prod = {
          id: resp.id,
          ...resp.data(),
        };
        setProduct(prod);
      } else {
        console.log("No se encontró el producto por ID.", id);
    }
  }catch(error){
      console.error("Error al obtener producto por ID", error);
    }
  };

  const discountStock = async (product) => { 
    const productRef = doc(db, "products", product.id);
    const newStock = product.stock - 1;
    await updateDoc(productRef, { stock: newStock });
  };

  const addOrderDB = (cartProducts, userData, total) => {
    const newOrder = {
      buyer: userData,
      items: cartProducts,
      data: serverTimestamp(),
      total
    };

    addDoc(collection(db, "orders"), newOrder)
      .then((docRef) => {
        console.log("Orden agregada con ID:", docRef.id);
      })
      .catch((error) => {
        console.error("Error al agregar la orden:", error);
      });
  };

  const objectValue = {
    products,
    product,
    isLoading,
    getProductsDB,
    getProductById,
    discountStock,
    addOrderDB
  };

  return <FirebaseContext.Provider value={objectValue}>{children}</FirebaseContext.Provider>;
};
