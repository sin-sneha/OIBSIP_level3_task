// Navbar.js
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
export default function Navbar() {
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.userLoginReducer); 
    const { userInfo } = userstate
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">Bean Pizza</a>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">


                        {userInfo ? (<div className="dropdown">
    <a className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        {userInfo.name}
    </a>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Orders</a>
        <a className="dropdown-item" href="#">Logout</a>
    </div>
</div>
) : ( <li className="nav-item">
                            <a className="nav-link" href="/login">
                            Login
                             </a>
                        </li>)}



                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                Cart {cartstate.cartItems.length} </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
