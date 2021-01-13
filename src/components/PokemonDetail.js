import React from 'react'
/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from '@emotion/react'

function Pokemon(props) {
    
    const styleContainer = css`
        bottom: 0px;
    `

    const styleImageDiv = css`
        text-align: center;
    `
    const styleImage = css`
        width: 40%;
        @media (max-width: 800px) {
          width: 45%;
        }
    `

    const styleDetailDiv = css`
        padding: 20px;
        background-color: #e6e6e6;
        border-radius: 45px 45px 0px 0px;
    `

    const styleProperty = css`
        display: inline-block;
        vertical-align: top;
        background-color: #919191;
        border-radius: 5px;
        margin-right: 5px;
        margin-bottom: 5px;
        padding: 5px;
        color: white;
    `

    const typesList = props.pokemon.types.map(type => {
        return (
            <div css={styleProperty}>{type.type.name}</div>
        )
    })

    const movesList = props.pokemon.moves.map(move => {
        return (
            <div css={styleProperty}>{move.move.name}</div>
        )
    })

    return (
        <div css={styleContainer}>
            <div css={styleImageDiv}>
                <img css={styleImage} src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
            </div>
            <div css={styleDetailDiv}>
                <p>Types : </p>
                {typesList}
                <p>Moves : </p>
                {movesList}
            </div>
        </div>
    )
}

export default Pokemon