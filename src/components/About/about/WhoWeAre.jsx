import {React, useState} from "react";
import cover4 from '../../../assets/About/WhoWeAre.png';
import { NavHome } from "../../Home/home/NavHome";

export const WhoWheAre = () => {

    const [title, setTitle] = useState("who we are ?");
    const [desc, setDesc] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur officia nostrum. Et quidem libero nostrum quisquam tempora quae voluptate ab sit rerum error. Fugit, quisquam sunt perspiciatis nesciunt dolor, possimus soluta itaque corrupti, cum inventore molestias facilis ea? Pariatur officiis ut maxime reprehenderit cum nulla commodi soluta exercitationem tempora provident doloremque, atque ducimus sapiente modi est aspernatur harum ipsum ratione consequatur, iste quae! Eligendi quis optio quidem est porro beatae tempora dolor cum dolorum, deserunt ea ad et reprehenderit maxime deleniti esse. Vero illo distinctio tenetur repellendus omnis. Debitis omnis tempora aliquid cumque delectus? Odit, ipsum. Ab, et corrupti.");
    const [parg2, setParg2] = useState("Create stunning images with as much.oronlle control you like thanks to a choice of Basic and Creative mode.");
    const [marquee, setMarquee] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore illum, esse quibusdam expedita iste quo reiciendis cupiditate quod rem doloribus, ab voluptas, quasi minima. Excepturi qui labore obcaecati accusantium in dolorum repellendus ipsum culpa. Et aliquid impedit amet quam sint accusantium iste qui animi magnam tenetur. Qui fuga delectus aut?");

    return (
        <>
            <section className="identification">
                <div className="identy">
                    <div 
                        className="image"
                        style={{ backgroundImage: `url(.${cover4})` }}
                    >
                    </div>
                    <div className="parg">
                        <div className="Title">
                            <h1 className="title">{title}</h1>
                        </div>
                        <div className="Desc">
                            <p className="desc">{desc}</p>
                        </div>
                        <div className="Parg2">
                            <h1 className="parg2">{parg2}</h1>
                        </div>
                        <div className="Marquee">
                            <marquee className="marquee">
                                <span>{marquee}</span>
                            </marquee>
                        </div>
                    
                    </div>
                </div>
            </section>
            <NavHome />
        </>
    )
}