import React from 'react'

export default  (props)=> {

    const min = props.min
    const max = props.max


    const sorteado = parseInt(Math.random() * (max-min)) + min; //Gerar números aleatórios
                                  


    return(
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor mínimo:</strong>{min}   </p>
            <p><strong>Valor Máximo:</strong>{max}    </p>
            <p><strong>Valor sorteado: </strong>{sorteado}</p>
        </div>
    )






}
