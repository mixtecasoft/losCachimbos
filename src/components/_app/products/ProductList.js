import React from "react";
import { useSelector } from "react-redux";
// material
import { Grid } from "@mui/material";
import ShopProductCard from "./ProductCard";

// ----------------------------------------------------------------------

// ProductList.propTypes = {
//    products: PropTypes.array.isRequired,
// };

export default function ProductList({ ...other }) {
   const product = useSelector((state) => state.allProducts.products);
   return (
      <Grid container spacing={3} {...other}>
         {product.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={3}>
               <ShopProductCard product={product} />
            </Grid>
         ))}
      </Grid>
   );
}
