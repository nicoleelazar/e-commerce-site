import React, { Component } from 'react'
import Product from './Product' //Product is the child commponent of ProductList
import Title from './Title'
import { storeProducts } from "../data";
import { ProductConsumer } from "../ContextAPI";

export default class ProductList extends Component {
    state = {
        products: storeProducts
    };



    render() {

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>

                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    console.log(value)
                                }}

                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
