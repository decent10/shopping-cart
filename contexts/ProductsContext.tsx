import React, { useContext, createContext, useState, useEffect } from "react";
import {Product as ProductType} from "../types";
 type PropTypes = {
   products:ProductType[];
   addToCart:(product:ProductType)=> void;
   loading:boolean;
   setProducts:(products:ProductType[])=> void;
 }
const ProductContext = createContext<PropTypes>({
   products:[],
    loading:true,
    addToCart:(product:ProductType)=>{},
    setProducts:(products:ProductType[])=>{ },


});

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const cart = [];

  function addToCart(product:ProductType) {
    cart.push(product);
  }



  useEffect(() => {


console.log(products);

  }, [products]);

  const value = {
    products,
    loading,
    setProducts,
    addToCart

  };

  return (
    <ProductContext.Provider value={value}>
      { children}
    </ProductContext.Provider>
  );
}