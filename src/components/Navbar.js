//shortcut for class template = 'rcc'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonMain } from "./Button";

export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm"> 
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}

                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Products</Link>
                    </li>
                </ul>

                <Link to='/cart' className="ml-auto">
                    <ButtonMain>
                        <span className="mr-2">
                            <i className="fas fa-shopping-cart"></i>
                        </span>
                        Cart
                    </ButtonMain>
                </Link>
           </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav `
    background: var(--c-blue-dark);

    .navbar-brand {
        height: 35px; 
        width: 30px;
        margin-right: 50px;
    }


    .nav-link {
        color: var(--c-blue-light) !important;
        font-size: 20px;
        transition: all 0.3s ease;

        &:hover {
            color: var(--c-white) !important;
        }

    }


    
`
