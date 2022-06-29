import React from 'react'//para utilizar as tags html, jsx
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAle from './components/basicos/NumeroAle'
import Modelo from './components/Modelo'
import './app.css'
import Nome from './components/basicos/Nome'
import Formulario from './components/basicos/Formulario'

export default function App(props) {
    return (
        <div className="app">
            <div>
                <h1>Fundamentos do React</h1>
                <div className="cards">
                <Modelo titulo="Formulário" color="darkblue"><Formulario/></Modelo>
                    <Modelo titulo="Utilizando UseStates" color="red"><Nome/></Modelo>
                    <Modelo titulo="Primeiro componente" color="yellow"><Primeiro /></Modelo>
                    <Modelo titulo="Utilizando Parâmetros" color="darkgray"><ComParametro titulo="Frio em Sp" subtitulo="Neve" /></Modelo>
                    <Modelo titulo="Utilizando Parâmetros" color="purple"><ComParametro titulo="Calor no Rio de Janeiro" subtitulo="Chuva de verão" /></Modelo>
                    <Modelo titulo="Utilizando Parâmetros" color="blue"><ComParametro titulo="Start A22" subtitulo="lindos" /></Modelo>
                    <Modelo titulo="Utilizando Fragmento" color="orange"><Fragmento /></Modelo>
                    <Modelo titulo="Utilizando Números Aleatórios" color="green"><NumeroAle min={1} max={80} /></Modelo>
                    <Modelo titulo="Utilizando Números Aleatórios" color="pink"><NumeroAle min={10} max={80} /></Modelo>
                    <Modelo titulo="Utilizando Números Aleatórios" color="brown"><NumeroAle min={30} max={80} /></Modelo>
                    <Modelo titulo="Utilizando Números Aleatórios" color="teal"><NumeroAle min={50} max={80} /></Modelo>
                </div>
            </div>
        </div>
    )
}