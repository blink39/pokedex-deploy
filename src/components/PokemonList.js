import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMON_DETAIL } from '../graphql/getDataPokemon'
/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

function PokemonList(props) {
    
    const containerPokemon = css`
        text-align: center;
        padding: 10px;
        background-color: #e6e6e6;
        width: 28%;
        border-radius: 15px;
        display: inline-block;
        vertical-align: top;
        margin-right: 10px;
        margin-bottom: 10px;
        word-wrap: break-word;
        @media (max-width: 1200px) {
          width: 40%;
        }
        @media (max-width: 800px) {
          width: 40%;
        }
        @media (max-width: 600px) {
          width: 80%;
        }
    `

    const styleImage = css`
        width: 70%;
    `

    const PokemonName = styled('div')`
        font-size: 25px;
    `
    
    const PokemonNickname = styled('div')`
        font-size: 15px;
        font-style: italic;
    `

    const Button = styled('button')`
        background-color: red;
        border-radius: 5px;
        color: white;
        width: 90%;
        box-shadow: 1px 1px blue;
    `

    const gqlVariables = {
        name: props.name
    }

    const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
        variables: gqlVariables,
    })
      
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`
    
    const capitalizeLetter = data.pokemon.name.charAt(0).toUpperCase() + data.pokemon.name.slice(1)

    return (
        <div css={containerPokemon}>
            <img css={styleImage} src={data.pokemon.sprites.front_default} alt={data.pokemon.name} />
            <PokemonName>{capitalizeLetter}</PokemonName>
            <PokemonNickname>{props.nickname}</PokemonNickname>
            <Button onClick={() => props.handleChange? props.handleChange() : void 0}>Release</Button>
        </div>
    )
}

export default PokemonList