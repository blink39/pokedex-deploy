import React from 'react'
/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

function Pokemon(props) {
    
    let localPokemonCounter = 0
    let localPokemon = JSON.parse(localStorage.getItem("myPokemon"))
    
    if (localPokemon) {
        const countingPokemon = localPokemon.map(data => {
            if (data[0] === props.pokemon.name) {
                localPokemonCounter += 1
            }
        })
    }
    
    const capitalizeFLetter = props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)

    const styleText = css`
        font-family:'Roboto', sans-serif;
        background-color: grey;
        border-radius: 15px;
        padding: 3px;
        color: white;
        font-size: 20px;
        text-decoration: none;
    `
    const styleImage = css`
        height: 100%;
    `

    const Separator = styled('div')`
        width: ${props => props.left ? `40%` : `60%`};
        text-align: ${props => props.left ? `center` : ``};
        display: inline-block;
        vertical-align: top;
    `

    return (
        <div css={styleText}>
            <Separator left>
                <img css={styleImage} src={props.pokemon.image} alt={props.pokemon.name} />
            </Separator>
            <Separator right>
                <p>{capitalizeFLetter}</p>
                <p>Owned : {localPokemonCounter}</p>
            </Separator>
        </div>
    )
}

export default Pokemon