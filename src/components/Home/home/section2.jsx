import React from "react";
import crazyDealy from '../../../assets/Home/crazydealy.jpg';
import springSummer from '../../../assets/Home/springsummer.jpg';
import sesonalSale from '../../../assets/Home/seasionalSale.jpg';
import newCollection from '../../../assets/Home/newCollection.jpg';
import tshirt from '../../../assets/Home/tshirt.jpg';

export const Section2 = () => {

    const [title1, settitle1] = React.useState("new arrival");

    const promosion = [
        {
            id: 1,
            title1: "crazy dealy",
            title2: "buy 1 get 1 free",
            title3: "the best classic dress is on sale cara",
            image: crazyDealy,
            link: '/',
            button: 'learn more'
        },
        {
            id: 2,
            title1: "spring/summer",
            title2: "upcomming season",
            title3: "the best classic dress is on sale cara",
            image: springSummer,
            link: '/',
            button: 'collection',
        },
    ]

    const collection = [
        {
            id: 1,
            title1: "seasonal sale",
            title2: "winter collection, 50% off",
            image: sesonalSale,
        },
        {
            id: 2,
            title1: "new footwear collection",
            title2: "string/summer 2023",
            image: newCollection,
        },
        {
            id: 3,
            title1: "t-shirt",
            title2: "new design",
            image: tshirt,
        },
    ]

    return (
        <>
            <section className="New">
                <div className="new">
                    <div className="section1">
                        {promosion.map(pro => {
                            return (
                                <div 
                                    className="crazydealy" 
                                    key={pro.id} 
                                    style={{ backgroundImage: `url(..${pro.image})` }}
                                >
                                    <div className="Text">
                                        <h1 className="title1"> {pro.title1} </h1>
                                        <h1 className="title2"> {pro.title2} </h1>
                                        <h1 className="title3"> {pro.title3} </h1>
                                        <a 
                                            href={pro.link} 
                                            className="link"
                                        >
                                            <button className="leareMore"> {pro.button} </button>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="section2">
                        {collection.map(col => {
                            return (
                                <div 
                                    className="winterCollection" 
                                    key={col.id} 
                                    style={{ backgroundImage: `url(.${col.image})` }}
                                >
                                    <div className="Text">
                                        <h1 className="title1"> {col.title1} </h1>
                                        <h1 className="title2"> {col.title2} </h1>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}