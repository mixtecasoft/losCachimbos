import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
   query products {
      restaurant_food {
         id
         category
         name
         price
         show
         range_
         url
         description
      }
   }
`;

export const GET_PRODUCT = gql`
   query product($productId: String!) {
      restaurant_food(where: { id: { _eq: $productId } }) {
         category
         description
         name
         id
         price
         promotion
         recipe
         show
         url
      }
   }
`;
