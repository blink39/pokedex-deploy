import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from '../graphql/getDataPokemon'
import {Link} from 'react-router-dom'
/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from '@emotion/react'

import Pokemon from '../components/Pokemon'
import Button from '../components/Button'

function PokemonContainer() {

    const pokemonList = css`
        width: 100%;
    `

    const buttonSize = css `
        text-align: center;
        margin-bottom: 5px;
    `
    
    const eachPokemon = css`
        width: 95%;
        margin: 0 auto;
        padding: 5px;
    `

    const[stateLimit] = useState(6)
    const[stateOffset, setStateOffset] = useState(0)

    let prevOffset = 0
    let nextOffset = 0

    const gqlVariables = {
        limit: stateLimit,
        offset: stateOffset,
    }

    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
    })
      
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`
    if (data) {
        prevOffset = data.pokemons.prevOffset
        nextOffset = data.pokemons.nextOffset
    }

    const pokemonsData = data.pokemons.results.map(pokemon => {
        return (
            <div css={eachPokemon}>
                <Link to={`/detail/${pokemon.name}`} style={{ textDecoration: 'none' }}>
                    <Pokemon key={pokemon.name} pokemon={pokemon} />
                </Link>
            </div>
        )
    })

    const getPrevData = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setStateOffset(prevOffset)
    };
    
    const getNextData = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setStateOffset(nextOffset)
    };

    return (
        <div css={pokemonList}>
            <div css={buttonSize}>
                <Link to={`/pokemon-list`}>
                    <Button name="My Pokemon" width="120" height="40"></Button>
                </Link>
            </div>
            {pokemonsData}
            <div css={buttonSize}>
                <Button name="<" width="120" height="40" handleChange={getPrevData}></Button>
                &emsp;
                <Button name=">" width="120" height="40" handleChange={getNextData}></Button>
            </div>
        </div>
    )
}

export default PokemonContainer