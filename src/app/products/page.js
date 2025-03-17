import React from 'react'
import { GET } from '../api/product/route'
import './style.css';

async function Product() {
    const res = await GET();
    const products = await res.json();
    return (
    <div className="product-container">
        {products.map(product =>(
            <div className="product-card">
                <div className="product-title" key={product.id}>{product.title}</div>
                <div className="product-desc">{product.desc}</div>
                <div className="product-price">{product.price}</div>
                <img className="product-image" src={product.img} alt={product.title} width="150" height="150" />
            </div>
        ))}
    </div>
    
    )
}

export default Product


// import React from 'react';
// import { GET } from '../api/product/route';
// import '../styles/Product.css'; // تأكد من وجود هذا الملف

// async function Product() {
//     const res = await GET();
//     const products = await res.json();

//     return (
//         <div className="product-container">
//             {products.map((product) => (
//                 <div className="product-card" key={product.id}>
//                     <img src={product.img} alt={product.title} className="product-image" />
//                     <h2 className="product-title">{product.title}</h2>
//                     <p className="product-desc">{product.desc}</p>
//                     <p className="product-price">Price: ${product.price}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Product;
