import React from "react";
import { NavContact } from "./contact/Nav";
import { Location } from './contact/location';
import { Form } from "./contact/Form";

export const Contact = () => {
    return (
        <>
            <NavContact />
            <Location />
            <Form />
        </>
    )
}