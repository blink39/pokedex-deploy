import React, { useState } from 'react'
import {Link} from 'react-router-dom'
/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

import PokemonList from '../components/PokemonList'
import Button from '../components/Button'

function MyPokemonContainer({match}) {
    
    const buttonSize = css `
        text-align: center;
        margin-bottom: 15px;
    `

    const container = css`
        width: 95%;
        margin: 0 auto;
        padding: 5px;
    `

    const containerPokemonList = css`
        text-align: center;
    `

    const PokemonTotal = styled('div')`
        text-align: center;
        width: 50%;
        border-radius: 15px;
        border: 1px solid black;
    `

    let localPokemon = JSON.parse(localStorage.getItem("myPokemon"))
    let currState = []

    if (localPokemon) {
        currState = localPokemon
    }

    const [state, setState] = useState(currState)

    function deletePokemon(pokemon, nickname) {
        let indexDeleted = -1
        localPokemon.map((data, index) => {
            if (data[0] === pokemon && data[1] === nickname) {
                indexDeleted = index
            }
        })
        localPokemon.splice(indexDeleted, 1)
        localStorage.setItem('myPokemon', JSON.stringify(localPokemon));
        setState(JSON.parse(localStorage.getItem("myPokemon")))
    }

    const listTable = state.map((data, index) => {
        return (
            <tr>
                <td>{index+1}</td>
                <td>{data[0]}</td>
                <td>{data[1]}</td>
                <td><button onClick={() => { deletePokemon(data[0], data[1]) }}>Delete</button></td>
            </tr>
        )
    })
    
    const pokemonList = state.map(data => {
        return (
            <PokemonList name={data[0]} nickname={data[1]} handleChange={() => deletePokemon(data[0], data[1])}></PokemonList>
        )
    })

    return (
        <div css={container}>
            <div css={buttonSize}>
                <Link to={`/`}>
                    <Button name="Home" width="120" height="40"></Button>
                </Link>
            </div>
            <div css={containerPokemonList}>
                {pokemonList.length > 0 ? pokemonList : 'Please Catch Pokemon First!'}
            </div>
            {/* <table>
                <thead>
                    <tr>
                        <td>Number</td>
                        <td>Pokemon</td>
                        <td>Nickname</td>
                    </tr>
                </thead>
                <tbody>
                    {listTable}
                </tbody>
            </table> */}
        </div>
    )
}

export default MyPokemonContainer