import React, { useState,useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({product}) => {
  // Note: this id should come from api
   const [counter,setCounter]=useState(0);
   const {addCart,removeCart}=useContext(CartContext);
   const handleCart=()=>{
     const productId=product.id;
     const count=1;
      setCounter(1);
      addCart({"productId":product.id,
        "count":1
      })
   }
   const handleDelete=()=>{
     const id=product.id;
     setCounter(0);
     removeCart(id);
   }
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>


    
      

    {counter<1 ? <button data-cy="product-add-item-to-cart-button"
     onClick={handleCart}>Add To Cart</button>:
    
          <div>
        <button data-cy="product-increment-cart-item-count-button"
        onClick={()=>{setCounter(counter+1)}}>+</button>
        <span data-cy="product-count">
           {counter}
        </span>
        <button data-cy="product-decrement-cart-item-count-button"
        onClick={()=>{setCounter(counter-1)}}>-</button>
        <button data-cy="product-remove-cart-item-button"
        onClick={handleDelete}>Remove from Cart</button>
      </div>
    
    
    
    }

    </div>
  );
};

export default Product;
