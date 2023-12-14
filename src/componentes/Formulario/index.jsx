import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';


// começa declarando uma arrow function

const Formulario = (props) => {

    const comidas = [
        'Hamburguer',
        'Batata',
        'Chocolate',
        'Cerveja',
        'Lasanha',
        'Doce de Leite', 
        'Agua de coco'
    ]


    const [comida, setComida] = useState('');
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [cards, setCard] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        const novoCard = {
            nome,
            cargo,
            imagem,
        }
        setCard([...cards, novoCard]);
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha com os dados da mulher referência para criar um card</h2>
                <CampoTexto 
                obrigatorio={true} 
                label='Nome' 
                placeholder='Digite seu nome'
                valor={nome}
                aoAlterarCampo={valor => setNome(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label='Cargo' 
                placeholder='Digite seu cargo'
                valor={cargo}
                aoAlterarCampo={valor => setCargo(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label='Imagem' 
                placeholder='Digite o endereço da sua imagem'
                valor={imagem}
                aoAlterarCampo={valor => setImagem(valor)}    
            />

            <ListaSuspensa
                label = 'Comidas'
                itens={comidas}
                valor={comida}
                aoAlterarCampo={valor => setComida(valor)}
            />

            <Botao>Cadastrar</Botao>

            </form>

            <div className='cards-container'>
                {Array.isArray(cards) && cards.map((card) => (
                <div key={card.id} className='card'>
                <p>Nome: {card.nome}</p>
                <p>Cargo: {card.cargo}</p>
                <p>Imagem: {card.imagem}</p>
                </div>
            
            ))}
            </div> 
               
        </section>
    )
}

export default Formulario;
