import React from 'react';

const Product = ({name, price}) => {
    return (
        <div>
            <li>{name}, {price}</li>
        </div>
    );
};

export default Product;