import React from "react";
import cover3 from '../../../assets/Footer/cover2.jpg';
import AppContext from '../../useContext';

export const NavAbout = () => {
    const title = React.useContext(AppContext)
    return (
        <>
            <section className="NavBlogs">
            <nav 
                    className="navBlogs" 
                    style={{ backgroundImage: `url(${cover3})` }}
                >
                    <div className="title">
                        <h1 className="navBlogsTitle">#aboutus</h1>
                        <h1 className='navBlogsTitle2'>{title}</h1>
                    </div>
                </nav>
            </section>
        </>
    )
}