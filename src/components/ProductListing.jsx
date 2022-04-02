import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import Loading from "./Loading";

const ProductListing = () => {
   const dispatch = useDispatch();
   const { loading, error, data } = useQuery(GET_PRODUCTS, {
      context: {
         headers: {
            "x-hasura-admin-secret":
               "LqyiUgx540Bm1P1BbU8yPUl23qbRbt6oiYoiLbcJMc3YbTvMvtRNe2K28k1PWbqm",
         },
      },
   });

   useEffect(() => {
      if (data) {
         dispatch(setProducts(data.restaurant_food));
      }
   }, [data, dispatch]);

   if (loading) {
      return <Loading />;
   }
   if (error) {
      return <div>Error!</div>;
   }

   return (
      <div className="ui grid container">
         <ProductComponent />
      </div>
   );
};

export default ProductListing;
