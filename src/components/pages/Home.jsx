import React, { Component } from 'react';
import Adidas from '../adidas';
import Color from '../color';
// import Item from '../item';
import List from "../Data/item"
import starActive from "../img/Path 368.svg"
import star from "../img/Path 369.svg"
import Items from '../items';
import OffCanvas from '../offcanvas';
import Quantity from '../quantity';
import Size from '../size';
import Sort from '../sort';
import Tags from '../tags';


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
                            <OffCanvas />
                        </>
                    ))}
                    <Items />
                </div>
            </div>
        );
    }
};

export default Home;


