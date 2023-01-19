import React, { Component } from 'react';
import List from "./Data/item"

export class OffCanvas extends Component {

    render() {
        return (
            <>
                {List.map((x, index) => (
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" key={index}>
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                <h1>My Cart</h1>
                                <div className='summary'>
                                    <h2>Cart Summary</h2>
                                    <div className='cart'>
                                        <img src={x.color1} />
                                        <div>
                                            <p>{x.description}</p>
                                            <span>Quantity: 1</span>
                                            <div className='remove'>
                                                <span className='price'>{x.price}</span>
                                                <button className='pickup'>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <h1>Total: 9.999 LE</h1>
                                </div>
                                <div className='buttons'>
                                    <button className='pickup'>Review Cart</button>
                                    <button className='add'>Complete Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
};

export default OffCanvas;


