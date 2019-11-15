import React from 'react'
import stylesWrapper from './../HOC/stylesWrapper';

const ButtonTwo = (props) => {
    return (
        <button style={props.styles}>I am ButtonTwo</button>
    )
}

export default stylesWrapper(ButtonTwo);