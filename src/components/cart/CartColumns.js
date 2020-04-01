import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-blue">Products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-blue">Product Name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-blue">Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-blue">Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-blue">Remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-blue">Total</p>
                </div>
            </div>
        </div>
    )
}

