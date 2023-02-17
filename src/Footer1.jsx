import React from "react";
import cover2 from './assets/Footer/cover2.jpg';
import { NavLink } from 'react-router-dom';

export const Footer1 = () => {
    const title1 = ['sign up for newsletters']
    const title2 = ['add your account  to receive notifications about anything new'];
    return (
        <>
            <section 
                className="footer1" 
                style={{ backgroundImage: `url(.${cover2})` }}
            >
                <div className="footer">
                    <div className="text">
                        <h1 className="title1"> {title1} </h1>
                        <h1 className="title2"> {title2} </h1>
                        <NavLink 
                            to='/profile' 
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="sign_up" >sign up</div>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}