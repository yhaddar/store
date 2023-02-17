import React from "react";
import freeShipping from '../../../assets/Home/freeShipping.png';
import onlineOrder from '../../../assets/Home/onlineOrder.png';
import saveMoney from '../../../assets/Home/saveMoney.png';
import promotions from '../../../assets/Home/promotions.png';
import happySell from '../../../assets/Home/happySell.png';
import support from '../../../assets/Home/support.png';

export const NavHome = () => {
    const nav = [
        {
            id: 1,
            title: 'free shipping',
            img: freeShipping
        },
        {
            id: 2,
            title: 'online order',
            img: onlineOrder
        },
        {
            id: 3,
            title: 'save money',
            img: saveMoney
        },
        {
            id: 4,
            title: 'promotions',
            img: promotions
        },
        {
            id: 5,
            title: 'happy sell',
            img: happySell
        },
        {
            id: 6,
            title: '24/7 support',
            img: support,
        }
    ]
    return (
        <>
            <section className="section_nav">
                <div className="navList">
                    {nav.map((nav) => {
                        return (
                            <div className="nav" key={nav.id}>
                                <div 
                                    className="image" 
                                    style={{ 
                                        backgroundImage: `url(${nav.img})` 
                                    }}
                                ></div>
                                <div className="Title">
                                    <h1 className="title">{nav.title}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}