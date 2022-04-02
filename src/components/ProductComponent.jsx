import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
   const products = useSelector((state) => state.allProducts.products);

   const renderList = products.map((product) => {
      //{ id, category, name, price, show, url, description }
      const { id, category, name, price, show, url, description } = product;
      return (
         <div className="four wide column" key={id}>
            <Link to={`/app/products/${id}`}>
               <div className="ui link  cards">
                  <div className="card">
                     <div className="image">
                        <img src={url} alt={name} />
                     </div>
                     <div className="content">
                        <div className="header">{name}</div>
                        <div className="meta">
                           <span>{category}</span>
                        </div>
                        <div className="description">{description}</div>
                     </div>
                     <div className="extra content">
                        {show ? (
                           <span className="right floated">Visible</span>
                        ) : (
                           ""
                        )}

                        <span>
                           <i className="dollar sign icon"></i>
                           {price}
                        </span>
                     </div>
                  </div>
               </div>
            </Link>
         </div>
      );
   });
   return <>{renderList}</>;
};

export default ProductComponent;
