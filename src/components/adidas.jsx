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
                                <div className='position-relative d-inline'>
                                    <img src={iconCart} />
                                    <span className="position-absolute top-0 translate-middle badge rounded-pill danger">
                                        1
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
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


