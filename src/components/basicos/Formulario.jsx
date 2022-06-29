import { useState } from "react";
export default function Formulario() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [email, setEmail] = useState("")
    const [user, setUser] = useState({})


    function novoRegistro(e) {
        //alert("Funcionando")
        e.preventDefault() //para não atualizar 
        setUser({
            nome: nome,
            idade: idade,
            email: email,
        })
        setNome("")
        setIdade("")
        setEmail("")
    }
    return (
        <div>
            <h2>Cadastrando usuário</h2>
            <form onSubmit={novoRegistro}>
                <strong><label>Nome:</label></strong>
                <input placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                /><br />


                <strong> <label>Idade:</label></strong>
                <input placeholder="Digite sua idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                /><br />

                <strong><label>E-mail:</label></strong>
                <input placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <button type="submit">Registrar</button>

            </form>
            <div>
                <span>Bem vindo: {user.nome}</span><br />
                <span>Idade: {user.idade}</span><br />
                <span>E-email: {user.email}</span><br />
            </div>
        </div>
    )
}