import React from "react";
import { SectionHome } from './home/sectionHome';
import { NavHome } from './home/NavHome';
import { FeatureProduct } from "./home/FeatureProduct";
import { Section2 } from './home/section2';

export const Home = () => {
    return (
        <>
            <SectionHome />
            <NavHome />
            <FeatureProduct />
            <Section2 />
        </>
    )
}