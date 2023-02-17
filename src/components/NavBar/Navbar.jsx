import React from "react";
import { CgProfile, CgShoppingCart, CgMenuRightAlt } from 'react-icons/cg';
import { VscClose } from 'react-icons/vsc';
import $ from 'jquery';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    const Navbar = [
        {
            id: 1,
            navlink: "/",
            title: "home",
        },
        {
            id: 2,
            navlink: "/shop",
            title: "shop",
        },
        {
            id: 3,
            navlink: "/blog",
            title: "blog",
        },
        {
            id: 4,
            navlink: "/about",
            title: "about",
        },
        {
            id: 5,
            navlink: "/contact",
            title: "contact",
        },
    ];

    return (
        <>
            <nav className="NavBar">
                <div className="navbar">
                    <ul className="ul_nav">
                        {Navbar.map((nav) => {
                            return (
                                <li className="li_nav" key={nav.id}>
                                    <NavLink to={nav.navlink} 
                                        className="link"
                                        onClick={() => {
                                            $("html, body").animate({ scrollTop: 0 }, "slow");
                                        }}
                                    >
                                        {nav.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="icons">
                        <div className="Compte"> 
                            <NavLink to='/profile' className='lien'>
                                <CgProfile className="profile" />
                            </NavLink>
                        </div>
                        <div className="shopping">
                            <NavLink to='/shoppingCart' class="l">
                                <CgShoppingCart 
                                    data-count='1' 
                                    className="shoppingCart" />
                            </NavLink>
                        </div>
                        <div className="menu">
                            <CgMenuRightAlt 
                                className="menucart"
                                onClick={() => {
                                    $('.menucart:nth-child(2)').css('display', 'block');
                                    $('.menucart:nth-child(1)').css('display', 'none');
                                    $('.aside_menu').css('display', 'block');
                                }}
                            />
                            <VscClose 
                                className="menucart" 
                                onClick={() => {
                                    $('.menucart:nth-child(2)').css('display', 'none');
                                    $('.menucart:nth-child(1)').css('display', 'block');
                                    $('.aside_menu').css('display', 'none');
                                }}
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <aside className="aside_menu">
                <ul className="ul_nav">
                    {Navbar.map((nav) => {
                        return (
                            <li className="li_nav" key={nav.id}>
                                <NavLink 
                                    to={nav.navlink} 
                                    className="link"
                                    onClick={() => {
                                        $('.menucart:nth-child(2)').css('display', 'none');
                                        $('.menucart:nth-child(1)').css('display', 'block');
                                        $('.aside_menu').css('display', 'none');
                                    }}
                                >
                                {nav.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}
