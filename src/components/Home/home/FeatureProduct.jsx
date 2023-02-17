import { React, useState, useEffect} from "react";
// import axios from "axios";
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
// import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import Product from '../../../json/Product.json';
// import { addProduct } from "../../../redux/Product";

export const FeatureProduct = () => {
    // const [Product, setProduct] = useState([]);
    const [title1, setTitle1] = useState('feature product');
    const [title2, setTitle2] = useState('summer collection new modern design');

    // const [id, setId] = useState('');
    // const dispatch = useDispatch()

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const response = await  fetch('https://fakestoreapi.com/products');
            setData(await response.json());
        }
        fetchdata();
    })
    const product = data.slice(0,4);

    return (
        <>
            <section className="FeatureProduct">
                <div className="Title">
                    <h1 className="title"> {title1} </h1>
                    <h2 className="title2"> {title2} </h2>
                </div>
                <div className="PRODUCT">
                    <NavLink 
                        to='/shop' 
                        className='link'
                    >
                        <div className="pageShop">
                            <h1 className="showAll">Show All </h1>
                        </div>
                    </NavLink>
                    <div className="Product">
                        {product.map(p => {
                            return (
                                <div key={p.id} className="product">
                                    <div className="image">
                                        <img src={p.image} alt="" />
                                    </div>
                                    <div className="description">
                                        <h1 className="category"> {p.category} </h1>
                                        <div className="widthtitle"><h1 className="title"> {p.title} </h1></div>
                                        <div className="Rate">
                                            <h1 className="rate"> {p.rating.rate} </h1>
                                            <div className="etoile">
                                                <img 
                                                    src="https://img.icons8.com/fluency/48/null/star.png"
                                                    className="imgeEtoile"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="Price">
                                            <h1 className="price"> {p.price}$ </h1>
                                            <div className="Store" >
                                                <NavLink 
                                                    to={`ProductShow/${p.id}`}
                                                    className='link'
                                                >
                                                    <MdOutlineLocalGroceryStore className="store_icon"/>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })
                        } 
                    </div>
                </div>
            </section>
        </>
    )
}