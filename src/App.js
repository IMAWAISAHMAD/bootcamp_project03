import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Shop from "./components/Shop";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { ProductProvider } from "./context/ProductContext";
import {CartProvider} from "./context/CartContext";
import "./styles.css";
import { makeStyles,AppBar,Toolbar,Typography,Button} from "@material-ui/core";
import Storefront from "@material-ui/icons/Shop";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <ProductProvider>
      <CartProvider>
        <div className={classes.root}>
          <Router>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Shoe Store
                </Typography>
                <Button startIcon={<Storefront />} component={Link} to="/shop" color="inherit">
                    SHOP
                </Button>
                <Button startIcon={<ShoppingCartIcon />} component={Link} to="/cart" color="inherit">
                    CART
                </Button>
              </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="shop" element={<Shop />}>
                <Route path="/" element={<Products />} />
                <Route path=":slug" element={<Product />} />
              </Route>
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </CartProvider>    
    </ProductProvider>
    
  );

}
