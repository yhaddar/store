import { React, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';

export const NavSearch = () => {

    const [logo, setLogo] = useState("store");

    return (
        <>
            <nav className="NavSearch">
                <div className="navbar_search">
                    <div className="logo">
                        <h1 className="logo">{logo}</h1>
                    </div>
                    <div className="Search">
                        <form 
                            action="" 
                            className="form"  
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input 
                                type="search" 
                                placeholder="search" 
                                name="search" id="" 
                                className="search_input" 
                                onKeyUp={(e) => {
                                    console.log(e.target.value)
                                }}
                            />
                            <button 
                                type="submit" 
                                className="btn"
                            >
                                <AiOutlineSearch className="btn_input" />
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}