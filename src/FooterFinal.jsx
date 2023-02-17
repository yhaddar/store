import React from "react";
import { NavLink } from "react-router-dom";


export const FooterFinal = () => {

    const contact = [
        {
            id: 1,
            title: 'adress :',
            span: 'Hollander Strasse 60 Hessen Cölbe Germany'
        },
        {
            id: 2,
            title: 'phone :',
            span: '+49 6427 96 01 35'
        },
        {
            id: 3,
            title: 'hours :',
            span: '24h/7j'
        },
    ]
    const followUs = [
        {
            id: 1,
            icon:"logo-facebook",
        },
        {
            id: 2,
            icon:"logo-instagram",
        },
        {
            id: 3,
            icon:"logo-twitter",
        },
        {
            id: 4,
            icon:"logo-pinterest",
        },
    ]

    const about = [
        {
            id: 1,
            title: "About Us",
            to: "/about",
        },
        {
            id: 2,
            title: "Delevery Information",
            to: '',
        },
        {
            id: 3,
            title: "Privacy Policy",
            to: '/',
        },
        {
            id: 4,
            title: "Terms & condition",
            to: '',
        },
        {
            id: 5,
            title: "Contact Us",
            to: '/contact'
        }
    ]

    const myAccount = [
        {
            id: 1,
            title: "sign in",
            to: "/profile",
        },
        {
            id: 2,
            title: "view cart",
            to: '',
        },
        {
            id: 3,
            title: "my wishlist",
            to: '/shoppingCart',
        },
        {
            id: 4,
            title: "track my order",
            to: '',
        },
        {
            id: 5,
            title: "help",
            to: '/contact'
        }
    ]
    return (
        <>
            <footer className="FooterFinal">
                <div className="Footer">
                    <section className="sectionfinal">
                        <div className="Logofooter">
                            <h1 className="logofooter">store</h1>
                        </div>
                        <div className="Contactfooter">
                            <h1 className="contactfooter">contact :</h1>
                            <div className="contact_me">
                                {contact.map(c => {
                                    return <h1 className="title" key={c.id}> {c.title} <span>{c.span} </span> </h1>
                                })}
                            </div>
                            <div className="FollowUs">
                                <h1 className="follow_us">follow us :</h1>
                                <div className="Icons">
                                    {followUs.map(follow => {
                                        return <div className="icon" key={follow.id}><ion-icon name={follow.icon}></ion-icon></div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section2">
                        <div className="ABOUT">
                            <h1 className="title"> about :</h1>
                            <div className="aboutUs">
                                <ul className="ul_about">
                                    {about.map(about => {
                                        return (
                                            <NavLink to={about.to} style={{ textDecoration:'none' }}  key={about.id}>
                                                <li className="li_about"> {about.title} </li>
                                            </NavLink>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="myAccount">
                            <h1 className="title"> my account :</h1>
                            <div className="aboutUs" >
                                <ul className="ul_about">
                                    {myAccount.map(myaccount => {
                                        return (
                                            <NavLink to={myaccount.to} style={{ textDecoration:'none' }} key={myaccount.id}>
                                                <li className="li_about"> {myaccount.title} </li>
                                            </NavLink>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="final">
                    <hr />
                    <h1 className="createdBy">©️2023,yhaddar, Reactjs Ecommerce Template</h1>
                </div>
            </footer>
        </>
    )
}