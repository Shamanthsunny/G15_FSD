import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar1 = () => {
    return (

        <div className='container'>
            <nav Class="navbar navbar-expand-lg bg-body-tertiary">
                <div Class="container-fluid">
                    <a Class="navbar-brand" to="/">Amazon</a>
                    <button Class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span Class="navbar-toggler-icon">Menu</span>
                    </button>

                    <div Class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div Class='navbarp-nav'>
                            <ul Class="list">
                                <li>
                                    <NavLink Class="nav-link" to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink Class="nav-link" to="/EmployeeList">EmployeeList</NavLink>
                                </li>
                                <li><NavLink Class="nav-link" to="/About">About</NavLink>
                                </li>
                                <li><NavLink Class="nav-link" to="/Calculator">Calculator</NavLink>
                                </li>
                                <li>
                                    <NavLink Class="nav-link" to="/ProductList">Shopping Cart</NavLink>
                                </li>
                                {/* <li>
                <NavLink Class="nav-link" to="./Shoppingcart/newcart">Shopping</NavLink>
                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar1