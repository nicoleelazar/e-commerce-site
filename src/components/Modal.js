import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../ContextAPI";
import { ButtonMain } from "./Button";

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center">
                                        <h5 className="text-blue">Item added to the cart</h5>
                                        <img src={img} alt="product image" className="img-fluid"/>
                                        <h5 className="text-blue"> {title} </h5>
                                        <h5>Price: $ {price}</h5>

                                        <Link to="/">
                                            <ButtonMain onClick={() => closeModal()} >
                                                Keep Shopping
                                            </ButtonMain>
                                        </Link>

                                        <Link to="/cart">
                                            <ButtonMain cartColor onClick={() => closeModal()} >
                                                Go to Cart
                                            </ButtonMain>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </ModalContainer>
                        )
                        
                    }
                }}
            </ProductConsumer>
        )
    }
}


const ModalContainer = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    #modal {
        background-color: var(--c-white);
    }
`