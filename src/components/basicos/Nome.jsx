import { useState } from "react";


export default function Nome() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    function trocarNome(nome, idade){
        //alert("Funcionando!")
        setNome(nome)
        setIdade(idade)
    }
    return (
        <div><span>Bem vindo: {nome}    - Idade: {idade}   </span>
            <button onClick={()=>trocarNome("Helena", 22)}>Trocar nome</button>
        </div>

    )
}