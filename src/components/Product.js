import React, { Component } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductComsumer } from "../ContextAPI";
import PropTypes from "prop-types";

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;


        return (
            <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3">
                <div className="card">
                    {/* Card Image & button */}
                    <div className="image-contain p-5" onClick={() => console.log('you clicked image-contain')}>
                        <Link to="/details">
                            <img src={img} alt="product image" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false} onClick={() => console.log("added to the cart")}>
                            {inCart? (<p className="text-capitalize mb-0" disabled>{" "} In Cart</p>) : <i className="fas fa-cart-arrow-down"/>}
                        </button>
                        
                    </div>  

                    {/* Card Footer */}
                    <div className="card-footer d-flex flex-row justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="mb-0 text-blue">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                        
                    </div> 
                </div>
            </ProductWrapper>
        )
    }
}

// this is to make sure each data value is the correct type in data.js
Product.propTypes = {
    product: PropTypes.shape ({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}


const ProductWrapper = styled.div `
.card {
    border-color: transparent;
    transition: all 0.5s ease;
}

.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s ease;
}

&:hover {

    .card {
        border: 0.2px solid rgb(240, 240, 240);;
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }

    .card-footer {
        background-color: rgb(240, 240, 240);
    }
}

.image-contain {
    position: relative;
    overflow: hidden;


    .card-img-top {
        transition: all 0.5s ease;
    }

    &:hover .card-img-top {
        transform: scale(1.2);
    }

    .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    color: var(--c-white);
    background-color: var(--c-blue-light);
    padding: 3px 8px;
    font-size: 22px;
    border-radius: 3px;
    transform: translate(100%, 100%);
    transition: all 0.5s ease;

        &:hover {
            color: var(--c-blue-dark);
        }
    }

    &:hover .cart-btn {
        transform: translate(0, 0);
    }


}


`