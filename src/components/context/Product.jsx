import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../productDisplay/Productdisplay';
import { ShopContext } from './Shopcontext';
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Debug: Log the context value
  console.log('Context Value:', all_product);

  const product = all_product.find((e) => e.id.toString() === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
