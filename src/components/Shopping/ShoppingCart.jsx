import React from "react";
import { MyProduct } from "./shopping/MyProduct";
import { NavCart } from "./shopping/NavCart";

export const ShoppingCart = () => {
    return (
        <>
            <NavCart />
            <MyProduct />
        </>
    )
}