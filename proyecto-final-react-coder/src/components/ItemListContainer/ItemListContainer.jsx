import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CardItem } from "../CardItem/CardItem";

export const ItemListContainer = () => {
    const {category} = useParams();
    const { products, isLoading, getProductsDB} = useContext(FirebaseContext);

    useEffect(() => {
        getProductsDB(category);
    }, [category]);

    return (
        <>
        <Box component="div" display="flex" flexWrap="wrap">
        {isLoading ? <><Spinner/><h2>Loading...</h2></> : products.map((product) =>(
            <CardItem key={product.id}{...product}/>
        ))}
        </Box>
        </>
    );
};