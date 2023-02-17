import React from "react";
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { GrFormClose } from 'react-icons/gr'

export const MyProduct = () => {

    return (
        <>
            <section className="MyProduct">
                
                <div className="myproduct">
                    
                    <div className="section1">
                        <div className="nav">
                            <h1>remove</h1>
                        </div>
                        <div 
                            className="content remove"
                        >
                        </div>
                    </div>





                    <div className="section2">
                    <div className="nav">
                            <h1>image</h1>
                        </div>
                        <div className="content2 remove">
                            <div 
                                className="Img"
                                style={{ backgroundImage: `url()`}}
                                ></div>
                        </div>
                    </div>





                    <div className="section3">
                    <div className="nav">
                            <h1>product</h1>
                        </div>
                        <div className="content3 remove">
                            <h1></h1>
                        </div>
                    </div>





                    <div className="section4">
                    <div className="nav">
                            <h1>price</h1>
                        </div>
                        <div className="content4 remove">
                            <h1></h1>
                        </div>
                    </div>





                    <div className="section5">
                    <div className="nav">
                            <h1>quantity</h1>
                        </div>
                        <div className="content5 remove">
                            <h1></h1>
                        </div>
                    </div>





                    <div className="section6">
                    <div className="nav">
                            <h1>subtotal</h1>
                        </div>
                        <div className="content6 remove">
                            <h1></h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}