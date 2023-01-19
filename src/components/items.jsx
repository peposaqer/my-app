import React, { Component } from "react";
import { Link } from "react-router-dom";
import Items from "./Data/items"
import starActive from "./img/Path 368.svg"
import star from "./img/Path 369.svg"
import offer from "./img/Group 338.svg"

export class Card extends Component {
    render() {
        return (
            <div className="items">
                <div className="">
                    <div className="">
                        <h1>Similar Products</h1>
                        <p>You may like these products also</p>
                    </div>
                    <div className="cards">
                        {Items.map((x, index) => (
                                    <div className="card" key={index}>
                                        <Link to="#!"><img src={offer} className="offer-img" /></Link>
                                        <img src={x.src} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p>{x.description}</p>
                                            <div className="card-price">
                                                <div>
                                                    <h1>{x.price}<span>LE</span></h1>
                                                    <div className="d-flex">
                                                        <span className="dis">{x.discount}</span>
                                                        <span className="offer">{x.offer}</span>
                                                    </div>
                                                </div>
                                                <img src={x.brandLogo.default} />
                                            </div>
                                            <div className='stars'>
                                                <img className='star' src={starActive} />
                                                <img className='star' src={starActive} />
                                                <img className='star' src={starActive} />
                                                <img className='star' src={starActive} />
                                                <img className='star' src={star} />
                                                <span className='num'>{x.numOfStars} of 5</span>
                                            </div>
                                            <div className={x.className}>
                                                <h6>{x.from} <span>{x.location}</span></h6>
                                                <h6>{x.to} <span>{x.uk}</span></h6>
                                                <h6>{x.in} <span>{x.time}</span></h6>
                                            </div>
                                        </div>
                                    </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
