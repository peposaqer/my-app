import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "./img/Group 346.svg"
import iconCart from "./img/Path 772.svg"
import iconWishlist from "./img/Path 771.svg"
import iconLogin from "./img/Path 773.svg"

export class Adidas extends Component {

    render() {
        return (
            <div className=''>
                <div className='container'>
                    <div className='header'>
                        <form>
                            <input type="text" placeholder="Search" />
                        </form>
                        <img src={Logo} className="logo" />
                        <div className="icons">
                            <Link to="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="icon">
                                <img src={iconCart} />
                                <span>Cart</span>
                            </Link>
                            <Link to="#!" className="icon">
                                <img src={iconWishlist} />
                                <span>Wishlist</span>
                            </Link>
                            <Link to="#!" className="icon">
                                <img src={iconLogin} />
                                <span>Login</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Adidas;


