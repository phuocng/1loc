import * as React from 'react';

import ProductModel from '../models/ProductModel';
import './product.css';

interface ProductProps {
    product: ProductModel;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="product" style={{ backgroundColor: product.themeColor }}>
            <a href={product.url} className="product__link">
                <img className="product__logo" src={`/assets/${product.name.toLowerCase().split(' ').join('-')}.png`} alt={product.description} />
                <h3 className="product__name">{product.name}</h3>
                <div className="product__description">{product.description}</div>
            </a>
        </div>
    );
};

export default Product;
