import React, { useEffect, useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export const NavMenu = props => {

    const [scrolling, setScrolling] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
    }, []);

    function handleScroll() {

        const scrollTop = document.getElementById("header").offsetTop;
        if (window.pageYOffset > scrollTop)
            setScrolling(true);
        else
            setScrolling(false);

    };


    function toggleNavbar() {
        setCollapsed(!collapsed)
    }

    let headerClass = [];

    let imageClass = ["home-img"]

    if (scrolling) {

        headerClass.push("box-shadow");

        imageClass.push("home-img-shrink");
    }



    return (
        <header id="header" className={headerClass.join(' ')}>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow" light>
                <Container>
                    <NavbarBrand>
                        <img src={require('../images/logo.svg')} className={imageClass.join(' ')} id="home-img" alt="logo" />
                    </NavbarBrand>
                    {/* 
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">Teams</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                    */}  
                </Container>
            </Navbar>
        </header>
    );
}

