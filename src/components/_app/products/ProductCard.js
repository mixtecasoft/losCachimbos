import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// material
import { Box, Card, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
import { fCurrency } from "../../../utils/formatNumber";
//
import Label from "../../Label";
import InfoPreview from "../../InfoPreview";

// ----------------------------------------------------------------------

const ProductImgStyle = styled("img")({
   top: 0,
   width: "100%",
   height: "100%",
   objectFit: "cover",
   position: "absolute",
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
   product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
   const { id, category, name, price, show, url, range_, priceSale } = product;
   //{ id, category, name, price, show, url, description, priceSale }

   return (
      <Link to={`/app/products/${id}`}>
         <Card>
            <Box sx={{ pt: "100%", position: "relative" }}>
               <Label
                  variant="filled"
                  color={show ? "info" : "error"}
                  sx={{
                     zIndex: 9,
                     top: 16,
                     right: 16,
                     position: "absolute",
                     textTransform: "uppercase",
                  }}
               >
                  {show === true ? "VISIBLE" : "OCULTO"}
               </Label>

               <ProductImgStyle alt={name} src={url} />
            </Box>

            <Stack spacing={2} sx={{ p: 3 }}>
               <Typography variant="subtitle2" noWrap>
                  {name}
               </Typography>

               <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
               >
                  <InfoPreview category={category} range_={range_} />
                  <Typography variant="subtitle1">
                     <Typography
                        component="span"
                        variant="body1"
                        sx={{
                           color: "text.disabled",
                           textDecoration: "line-through",
                        }}
                     >
                        {priceSale && fCurrency(priceSale)}
                     </Typography>
                     &nbsp;
                     {fCurrency(price)}
                  </Typography>
               </Stack>
            </Stack>
         </Card>
      </Link>
   );
}
