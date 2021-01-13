import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMON_DETAIL } from '../graphql/getDataPokemon'
import {Link} from 'react-router-dom'
/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

import PokemonDetail from '../components/PokemonDetail'
import Modal from '../components/ModalCatch'
import Button from '../components/Button'

function PokemonContainer({match}) {

    const container = css`
        width: 95%;
        margin: 0 auto;
        padding: 5px;
    `

    const ButtonDivUpper = styled('div')`
        text-align: center;
    `

    const ButtonDivLower = styled('div')`
        text-align: center;
        margin-top: 15px;
        margin-bottom: 10px;
    `

    const[isShowAdd, setStateModal] = useState(false)
    const[nickname, setStateNickname] = useState('')

    const gqlVariables = {
        name: match.params.name
    }

    const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
        variables: gqlVariables,
    })
      
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    function catchPokemon() {
        if (Math.random() > 0.5) {
            setStateModal(true)
            alert('Catch Success! Please Input Nickname to Your Pokemon!')
        }
        else {
            alert('Catch Failed! Please Try Aain!')
        }
    }

    function closeModalCatchHandler(){
        setStateModal(false)
    }

    function handleChange(e) {
        setStateNickname(e.target.value);
    }

    function insertPokemon() {
        let checkNickname = 0
        let pokemon = []
        let localPokemon = JSON.parse(localStorage.getItem("myPokemon"))
        
        if (localPokemon === null) {
            pokemon.push([match.params.name, nickname])
        }
        else {
            localPokemon.map(data => {
                if (data[1] === nickname && data[0] === match.params.name) {
                    checkNickname = 1
                }
            })
            localPokemon.push([match.params.name, nickname])
            pokemon = localPokemon
        }
        
        if (checkNickname === 1) {
            alert('Nickname Already Exist!')
        }
        else {
            localStorage.setItem('myPokemon', JSON.stringify(pokemon));
            setStateModal(false)
            alert('Catch Success!')
        }
    }
    
    return (
        <div css={container}>
            <ButtonDivUpper>
                <Link to={`/`}>
                    <Button name="Home" width="120" height="40"></Button>
                </Link>
                &emsp;
                <Link to={`/pokemon-list`}>
                    <Button name="My Pokemon" width="120" height="40"></Button>
                </Link>
            </ButtonDivUpper>
            <PokemonDetail key={data.pokemon} pokemon={data.pokemon}/>
            <ButtonDivLower>
                <Button name="Catch Me" width="120" height="40" handleChange={catchPokemon}></Button>
            </ButtonDivLower>
            
            <Modal show={isShowAdd} handleClose={closeModalCatchHandler} headerTitle="Input Nickname">
                <input placeholder="Input Nickname" onChange={handleChange}/>
                <button onClick={insertPokemon}>Submit</button>
            </Modal>
        </div>
    )
}

export default PokemonContainer