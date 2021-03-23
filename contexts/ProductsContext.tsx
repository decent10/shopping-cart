import React, { useContext, createContext, useState, useEffect } from 'react';
import { Product as ProductType } from '../types';
type PropTypes = {
  products: ProductType[];
  selectedProduct: ProductType | null;
  selectProduct: (product: ProductType) => void;
  addToCart: (product: ProductType) => void;
  loading: boolean;
  cart: ProductType[];
  addProducts: (products: ProductType[]) => void;
};
const ProductContext = createContext<PropTypes>({
  products: [],
  cart: [],
  selectedProduct: null,
  loading: true,
  addToCart: (product: ProductType) => {},
  selectProduct: (product: ProductType) => {},
  addProducts: (products: ProductType[]) => {},
});

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

  const addToCart = (product: ProductType) => {
    setCart([...cart, product]);
  };
  const selectProduct = (product: ProductType) => {
    setSelectedProduct(product);
  };
  const addProducts = (products: ProductType[]) => {
    setProducts(products);
  };
  const value = {
    products,
    selectedProduct,
    loading,
    cart,
    addProducts,
    addToCart,
    selectProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
