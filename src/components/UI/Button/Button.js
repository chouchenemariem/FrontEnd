import React from 'react'
import "./Button.css";

export function Button({ ...props }) {
    return (
        <>
            <button  style={{backgroundColor: props.backgroundColor , color:props.color}} type={props.type}>{props.label}</button>
        </>
    )
}