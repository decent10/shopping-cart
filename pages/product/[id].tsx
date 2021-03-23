import React from 'react';
import Navbar from '../../components/Navbar';
import DetailCard from '../../components/DetailCard';
import { useProduct } from '../../contexts/ProductsContext';

const ProductDetail = () => {
  const { selectedProduct, addToCart } = useProduct();

  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-5">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-indigo-200 sm:rounded-lg">
              <DetailCard
                title={selectedProduct.metadata.accentuate.mainTitle}
                subTitle={selectedProduct.metadata.accentuate.subTitle}
                image={selectedProduct.variants[0].image.src}
                price={selectedProduct.variants[0].priceV2.amount}
                tags={selectedProduct.tags}
                onAddToCart={() => {
                  addToCart(selectedProduct);
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
