import React from "react";
import { useParams } from "react-router-dom";

export const ProductShow = () => {

    const {id} = useParams();
    const [product, setProduct] = React.useState([]);
    React.useEffect(() => {
        const fetchdata = async () => {
            const response = await  fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
        }
        fetchdata();
    })

    return (
        <>
            <section className="ProductShow">
                <div className="sectionProduct">
                    <div className="Imgproduct">
                        <div className="image">
                            <img 
                                src={product.image} 
                                alt="" 
                            />
                        </div>
                    </div>
                    <div className="sectionDetail">
                        <h1 className="titleDetail1">{product.category}</h1>
                        <h1 className="titleDetail2">{product.title}</h1>
                        <h1 className="titleDetail3">${product.price}</h1>
                        <select 
                            name="" 
                            id="" 
                            className="selectSize"
                        >
                            <option 
                                value="" 
                                className="size" 
                                disabled
                            >select size</option>
                            <option 
                                value="x" 
                                className="size2"
                            >x</option>
                            <option 
                                value="xl" 
                                className="size3"
                            >xl</option>
                            <option 
                                value="xxl" 
                                className="size3"
                            >xxl</option>
                        </select>
                        <div className="buttons">
                            <input 
                                type="number" 
                                min='1' 
                                placeholder="1" 
                                name="" 
                                id="" 
                                className="number" 
                            />
                            <button 
                                className="btn" 
                                onClick={() => {
                                    alert('Your product has been added to the cart successfully')
                                    
                                }}
                            >add to cart</button>
                        </div>
                        <div className="Detail">
                            <h1 className="titleDetail">product detail</h1>
                            <p className="detail">{product.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}