import React,{useContext} from "react";
import {Link,useParams} from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import {CartContext} from "../context/CartContext";
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography,makeStyles} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media:{
    height:345
  },
});

function Product() {
  const classes = useStyles();
  const {slug} = useParams();
  const products =  useContext(ProductContext);
  const shoe = products.find(obj => obj.slug === slug);
  const {AddToCart} = useContext(CartContext);
  return (
    <div>
      <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={shoe.img}
                title={shoe.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {shoe.name}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="h6">
                  {`$${shoe.price}`}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" size="large" color="primary" component={Link} to={`/cart`} onClick={()=>AddToCart(shoe)}>
                <AddShoppingCartIcon/>
              </Button>
              <Button variant="outlined" size="large" color="primary" component={Link} to={`/shop`}>
                <KeyboardBackspaceIcon/>
              </Button>
            </CardActions>
          </Card>
    </div>
  );
}
export default Product;
