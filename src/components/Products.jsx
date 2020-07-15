import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import {CartContext} from "../context/CartContext";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 300
  },
  widths:{
    maxWidth: 345
  }
});

function Products() {
  const classes = useStyles();
  const products = useContext(ProductContext);
  const {AddToCart} = useContext(CartContext);
  console.log(products);


  return (
    <div className={classes.root}>
      <Grid 
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
        >
      {products.map(shoe => (
         <Grid item xs={12} sm={6} md={3} key={shoe.id}>
            <Card className={classes.widths}>
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
              <Button variant="outlined"  color="primary" onClick={()=>AddToCart(shoe)}>
                <AddShoppingCartIcon/>
              </Button>
              <Button variant="outlined"  color="primary" component={Link} to={`/shop/${shoe.slug}`}>
                <DescriptionIcon/>
              </Button>
            </CardActions>
          </Card>
        </Grid>

      ))}
      </Grid>
    </div>
  );
}
export default Products;
