import React from 'react'
import {  Field, ErrorMessage } from 'formik';
import "./Input.css";


export function Input ({...props}) {
    return(
      <>
      <label htmlFor={props.name}> {props.label}</label>
  
     <Field name={props.name} type={props.type}/>
  
      <ErrorMessage name={props.name}  /> 
      </>
    )
  }