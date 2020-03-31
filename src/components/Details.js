import React, { Component } from 'react'
import { ProductConsumer } from "../ContextAPI";
import { Link } from "react-router-dom";
import { ButtonMain } from "./Button";

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(item) => {
                 const {id, company, img, info, price, title, inCart} = item.detailProduct;
                 return (
                     <div className="container py-5">
                         {/* title */}
                         <div className="row">
                             <div className="col-10 mx-auto text-center text-blue my-5">
                                 <h1> {title} </h1>
                             </div>
                         </div>

                         {/* product image */}
                         <div className="row">
                             <div className="col-10 mx-auto col-md-6 my-3">
                                 <img src={img} alt="product" className="img-fluid"/>
                             </div>
                             {/* product text */}
                             <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                 <h4> model: {title} </h4>
                                 <h6 className="text-uppercase">made by: {company}</h6>
                                 <h4 className="text-bright">Price: ${price}</h4>
                                 <p className="mt-3 mb-0 font-weight-bold">
                                     Information about this product:
                                 </p>
                                 <p className="mb-3"> {info} </p>

                                 {/* buttons */}
                                 <Link to="/">
                                     <ButtonMain>Back to Products</ButtonMain>
                                 </Link>

                                <ButtonMain 
                                    // the below is a prop you can pass to styled-components
                                    cartColor
                                    // 

                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        item.addToCart(id);
                                        item.openModal(id);
                                    }}> 
                                    
                                    {inCart ? "In Cart" : "Add to Cart"}
                                </ButtonMain>
                                

                             </div>
                         </div>
                     </div>
                 )
                }}
            </ProductConsumer>
        )
    }
}
