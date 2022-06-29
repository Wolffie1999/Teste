import React from "react"
import './modelo.css'
export default (props) =>{
    
    const estilo = {
        backgroundColor: props.color,
        borderColor: props.color
    }
    return (
        <div className="card" style={estilo}>

            <div className="titulo">{props.titulo}</div>
            <div className="conteudo">{props.children}</div>

        </div>
    )

}