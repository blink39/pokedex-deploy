import React from 'react'
import styled from '@emotion/styled'

function Button(props) {

    const Button = styled.button`
        background-color: red;
        border-radius: 5px;
        color: white;
        width: ${props.width}px;
        height: ${props.height}px;
        box-shadow: 2px 3px blue;
    `

    return (
        <Button onClick={() => props.handleChange()}>{props.name}</Button>
    )
}

export default Button