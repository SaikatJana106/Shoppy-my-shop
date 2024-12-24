import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';
import Productdisplay from '../productDisplay/Productdisplay';
const Product = () => {
    const {all_product} = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id.toString() === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
             <Productdisplay product={product} />
        </div>
    );
};

export default Product;
