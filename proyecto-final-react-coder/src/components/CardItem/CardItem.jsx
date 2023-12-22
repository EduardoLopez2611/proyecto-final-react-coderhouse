import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useCount } from "../../hooks";

export const CardItem = ({ id, name, img, price, description, stock }) => {
  const { addItem } = useContext(CartContext);
  const { increment, decrement, count } = useCount(0, stock);

  return (
    <div className="d-flex flex-wrap justify-content-center">
    <div className="border m-2">
        <div className="card ">
        <div className="card-body ">
            <h4 className="card-title">{name}</h4>
            <img src={img} alt="" />
            <p className="card-text"> {description} </p>
            <p className="card-price">${price}</p>
    <Box display="flex" alignContent="center">
      <Button variant="contained" color="secondary" sx={{ margin: 2 }} onClick={decrement}>
        -
      </Button>
      <Typography fontSize={25}> {count} </Typography>
      <Button variant="contained" color="secondary" sx={{ margin: 2 }} onClick={increment}>
        +
      </Button>
    </Box>
    <Button
      size="small"
      color="primary"
      variant="contained"
      onClick={() => addItem({ id, name, price }, count)}
    >
      Add to cart
    </Button>
        </div>
        </div>
    </div>
</div>
  )};