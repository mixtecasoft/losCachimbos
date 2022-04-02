import React from "react";

const NotFoundProduct = () => {
   return (
      <div className="ui placeholder segment ">
         <div className="ui icon header">
            <i className="search icon"></i>
            No tenemos ningún documento que coincida con su consulta
         </div>
         <div className="inline">
            <div className="ui primary button">Borrar Consulta</div>
            <div className="ui button">Agregar Producto</div>
         </div>
      </div>
   );
};

export default NotFoundProduct;
