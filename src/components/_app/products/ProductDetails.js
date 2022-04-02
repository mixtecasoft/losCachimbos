import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PRODUCT } from "../../../graphql/queries";
import Loading from "../../Loading";
import NotFoundProduct from "../../NotFoundProduct";
import {
   selectedProduct,
   removeSelectedProduct,
} from "../../../redux/actions/productActions";

const ProductDetails = () => {
   const productId = useParams();
   let product = useSelector((state) => state.product);
   const { category, name, price, url, description } = product;
   const dispatch = useDispatch();
   const { loading, error, data } = useQuery(GET_PRODUCT, {
      variables: { productId: productId.productId },
      context: {
         headers: {
            "x-hasura-admin-secret":
               "LqyiUgx540Bm1P1BbU8yPUl23qbRbt6oiYoiLbcJMc3YbTvMvtRNe2K28k1PWbqm",
         },
      },
   });

   useEffect(() => {
      if (data) {
         dispatch(selectedProduct(data.restaurant_food[0]));
      }
      return () => {
         dispatch(removeSelectedProduct());
      };
   }, [data, dispatch]);

   if (loading) {
      return <Loading />;
   }
   if (error) {
      return <div className="ui grid container">Error!</div>;
   }
   return (
      <div className="ui grid container">
         {Object.keys(product).length === 0 ? (
            <NotFoundProduct />
         ) : (
            <div className="ui placeholder segment">
               <div className="ui two column stackable center aligned grid">
                  <div className="ui vertical divider">AND</div>
                  <div className="middle aligned row">
                     <div className="column lp">
                        <img className="ui fluid image" src={url} alt={name} />
                     </div>
                     <div className="column rp">
                        <h1>{name}</h1>
                        <h2>
                           <span className="ui teal tag label">${price}</span>
                        </h2>
                        <h3 className="ui brown block header">{category}</h3>
                        <p>{description}</p>
                        <div
                           className="ui vertical animated button"
                           tabIndex="0"
                        >
                           <div className="hidden content">
                              <i className="shop icon"></i>
                           </div>
                           <div className="visible content">Add to Cart</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default ProductDetails;
