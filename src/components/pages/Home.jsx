import React, { Component } from 'react';
import Adidas from '../adidas';
import Color from '../color';
// import Item from '../item';
import List from "../Data/item"
import starActive from "../img/Path 368.svg"
import star from "../img/Path 369.svg"
import Items from '../items';
import Quantity from '../quantity';
import Size from '../size';
import Sort from '../sort';
import Tags from '../tags';
// import "../../App.css"


export class Home extends Component {

    render() {
        return (
            <div className='home'>
                <Adidas />
                <Sort />
                <Tags />
                <div className='container'>
                    {List.map((x, index) => (
                        <>
                            <div className='row pt-5' key={index}>
                            <div className='col-md-6'>
                                {/* <Item /> */}
                            </div>
                            <div className='col-md-6'>
                                <div className='details'>
                                    <div className=''>
                                        <img src={x.brandLogo.default} className="brand" />
                                    </div>
                                    <p>{x.description}</p>
                                    <h6>{x.gender}</h6>
                                    <div className='stars'>
                                        <img className='star' src={starActive} />
                                        <img className='star' src={starActive} />
                                        <img className='star' src={starActive} />
                                        <img className='star' src={starActive} />
                                        <img className='star' src={star} />
                                        <span className='num'>{x.numOfStars} of 5</span>
                                        <span className='rate'>{x.numOfRate} Rates</span>
                                    </div>
                                    <div className='prices'>
                                        <span className='price'>{x.price} <span>LE</span></span>
                                        <span className='dis'>{x.discount}</span>
                                        <span className='offer'>{x.offer}</span>
                                    </div>
                                </div>
                                <Size />
                                <Color />
                                <Quantity />
                                <div className='buttons'>
                                    <button className='add'>Add To Cart</button>
                                    <button className='pickup'>Pickup From Store</button>
                                </div>
                            </div>
                            </div>
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header">
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
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
                        </>
                    ))}
                    <Items />
                </div>
            </div>
        );
    }
};

export default Home;


