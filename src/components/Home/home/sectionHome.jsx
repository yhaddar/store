import { React, useState, useContext } from "react";
import cover1 from '../../../assets/Home/cover1.png'
import AppContext from "../../useContext";

export const SectionHome = () => {
    const [title1, settitle1] = useState("trade-in-offer");
    const [title2, settitle2] = useState("super value deails");
    const [title3, settitle3] = useState("on all product");

    const title = useContext(AppContext);
    
    return (
        <section className="section_Home">
            <div className="home">
                <main className="desc">
                    <div className="Description">
                        <h1 className="title1"> {title1} </h1>
                        <h1 className="title2"> {title2} </h1>
                        <h1 className="title3"> {title3} </h1>
                        <p className="title4"> {title} </p>
                        <div className="shop_now" >shop now</div>
                    </div>
                </main>
                <main className="cover">
                    <div 
                        className="img"
                        style={{ 
                            backgroundImage: `url(.${cover1})` 
                        }}
                    ></div>
                </main>
            </div>
        </section>
    )
}