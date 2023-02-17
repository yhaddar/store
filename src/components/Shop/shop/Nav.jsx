import { React, useContext } from 'react';
import cover3 from '../../../assets/Footer/cover2.jpg';
import AppContext from '../../useContext';

export const Nav = () => {
    const title = useContext(AppContext)
    return (
        <>
            <section className="StayHome">
                <nav 
                    className="stayHome" 
                    style={{ backgroundImage: `url(${cover3})` }}
                >
                    <div className="title">
                        <h1 className="stayHomeTitle">#stayhome</h1>
                        <h1 className='stayHomeTitle2'>{title}</h1>
                    </div>
                </nav>
            </section>
        </>
    )
}