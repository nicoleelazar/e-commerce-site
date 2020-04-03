import React from 'react'
import { Link } from 'react-router-dom';

export default function CartTotal({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-4 ml-sm-5 ml-md-auto col-sm-8 text-right">
                        <Link to="/">
                            <button className="btn btn-danger px-5 mb-3" 
                                    type="button"
                                    onClick={() => clearCart()}
                                    > Clear Cart</button>
                        </Link>

                        
                           <h5><span className="text-blue">Subtotal: <strong>$ {cartSubTotal} </strong></span></h5>
                           <h5><span className="text-blue">Tax: <strong>$ {cartTax} </strong></span></h5>
                            <h5><span className="text-bright">Total: <strong>$ {cartTotal} </strong></span></h5>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
