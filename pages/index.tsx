import { useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import Link from 'next/link';
import { Product } from '../types';
import Card from '../components/Card';
import { useProduct } from '../contexts/ProductsContext';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

type PropsType = {
  products: Product[];
};

export default function Home({ products }: PropsType) {
  const { setProducts, addToCart } = useProduct();

  useEffect(() => {
    setProducts(products);
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto mt-5">
        <Hero />
        <div className="flex  flex-wrap grid grid-gap-4 md:grid-cols-4 lg:grid-cols-4  sm:grid-cols-2 gap-8 xs:gap-4 sm:gap-4 xs:grid-cols-1">
          {products.map((product, index) => (
            <Card
              key={`${product.id}-${index}`}
              title={product.metadata.accentuate.mainTitle}
              image={product.variants[0].image.src}
              text={product.metadata.accentuate.ribbonText1}
              onAddToCart={() => {
                console.log(product);
                addToCart(product);
              }}
            />
          ))}
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  try {
    const { data } = await axios.get(
      'https://pt-productfeed.s3.eu-central-1.amazonaws.com/products.json',
      {}
    );
    return {
      props: {
        products: data.products,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);
  }
};
