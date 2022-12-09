import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop, faHome, faShoppingBasket, faShoppingCart, faSignIn, faSignOut, faSign } from '@fortawesome/free-solid-svg-icons'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "black" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light">

            <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active ">
                        <Link
                            className="nav-link border-right-divider"
                            style={isActive(history, "/")}
                            to="/"
                        >
                            <FontAwesomeIcon icon={faHome} /> &nbsp;

                            HOME
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link
                            className="nav-link border-right-divider"
                            style={isActive(history, "/shop")}
                            to="/shop"
                        >
                            <FontAwesomeIcon icon={faShoppingBasket} /> &nbsp;

                            SHOP
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link
                            className="nav-link border-right-divider"
                            style={isActive(history, "/cart")}
                            to="/cart"
                        >
                            <FontAwesomeIcon icon={faShoppingCart} /> &nbsp;

                            CART {" "}
                            <sup>
                                <small className="cart-badge">{itemTotal()}</small>
                            </sup>
                        </Link>
                    </li>



                    {
                    isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item ">
                            <Link
                                className="nav-link border-right-divider"
                                style={isActive(history, "/user/dashboard")}
                                to="/user/dashboard"
                            >
                                DASHBOARD
                            </Link>
                        </li>
                    )}



                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item ">
                            <Link
                                className="nav-link border-right-divider"
                                style={isActive(history, "/admin/dashboard")}
                                to="/admin/dashboard"
                            >
                                ADMIN DASHBOARD
                            </Link>
                        </li>
                    )}

                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item ">
                                <Link
                                    className="nav-link border-right-divider"
                                    style={isActive(history, "/signin")}
                                    to="/signin"
                                >
                                <FontAwesomeIcon icon={faSignIn} /> &nbsp;

                                    SIGN IN
                                </Link>
                            </li>

                            <li className="nav-item ">
                                <Link
                                    className="nav-link border-right-divider"
                                    style={isActive(history, "/signup")}
                                    to="/signup"
                                >
                                <FontAwesomeIcon icon={faSign} /> &nbsp;

                                    SIGN UP
                                </Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <li className="nav-item ">
                            <span
                                className="nav-link border-right-divider"
                                style={{ cursor: "pointer", color: "#ffffff" }}
                                onClick={() =>
                                    signout(() => {
                                        history.push("/");
                                    })
                                }
                            >
                                <FontAwesomeIcon icon={faSignOut} /> &nbsp;

                                SIGN OUT
                            </span>
                        </li>
                    )}


                </ul>
            </div>
            <a className="navbar-brand float-left shopify-header" href="#"><i><b>
                <FontAwesomeIcon icon={faShop} />
                Shopify</b></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        </nav>

    </div>
);

export default withRouter(Menu);
