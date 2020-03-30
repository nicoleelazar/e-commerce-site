import React, { Component } from 'react'
import { storeProducts, detailProduct } from "./data";

//'createContext' comes with 2 in-built components, provider & consumer
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    }

    componentDidMount() {
        this.setProducts();
    }

    //This is to create a copy of the values from data.js rather than just referencing them
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    }

    handleDetail = () => {
        console.log('hello from detail');
    }

    addToCart = () => {
        console.log('hello from add to cart');
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };