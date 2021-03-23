import React from 'react';

import { useProduct } from '../contexts/ProductsContext';

const Test = () => {
    const {loading, products} = useProduct();
    console.log(loading, products);
    return(<div>hello</div>)
}

export default Test;
