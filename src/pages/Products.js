import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries";
import { setProducts } from "../redux/actions/productActions";
// material
import { Container, Stack, Typography } from "@mui/material";

// components
import Page from "../components/Page";
import {
   ProductSort,
   ProductList,
   ProductCartWidget,
   ProductFilterSidebar,
} from "../components/_app/products";

import Loading from "../components/Loading";

// ----------------------------------------------------------------------

export default function EcommerceShop() {
   const [openFilter, setOpenFilter] = useState(false);
   const dispatch = useDispatch();
   const { loading, error, data } = useQuery(GET_PRODUCTS, {
      context: {
         headers: {
            "x-hasura-admin-secret":
               "LqyiUgx540Bm1P1BbU8yPUl23qbRbt6oiYoiLbcJMc3YbTvMvtRNe2K28k1PWbqm",
         },
      },
   });

   const formik = useFormik({
      initialValues: {
         gender: "",
         category: "",
         colors: "",
         priceRange: "",
         rating: "",
      },
      onSubmit: () => {
         setOpenFilter(false);
      },
   });

   const { resetForm, handleSubmit } = formik;

   const handleOpenFilter = () => {
      setOpenFilter(true);
   };

   const handleCloseFilter = () => {
      setOpenFilter(false);
   };

   const handleResetFilter = () => {
      handleSubmit();
      resetForm();
   };

   useEffect(() => {
      if (data) {
         dispatch(setProducts(data.restaurant_food));
      }
   }, [data, dispatch]);

   if (loading) {
      return <Loading />;
   }
   if (error) {
      console.log("Error");
   }

   return (
      <Page title="Dashboard: Products | Minimal-UI">
         <Container>
            <Typography variant="h4" sx={{ mb: 5 }}>
               Products
            </Typography>

            <Stack
               direction="row"
               flexWrap="wrap-reverse"
               alignItems="center"
               justifyContent="flex-end"
               sx={{ mb: 5 }}
            >
               <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                  <ProductFilterSidebar
                     formik={formik}
                     isOpenFilter={openFilter}
                     onResetFilter={handleResetFilter}
                     onOpenFilter={handleOpenFilter}
                     onCloseFilter={handleCloseFilter}
                  />
                  <ProductSort />
               </Stack>
            </Stack>

            <ProductList />
            <ProductCartWidget />
         </Container>
      </Page>
   );
}
