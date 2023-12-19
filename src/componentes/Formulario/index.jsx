import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';


// começa declarando uma arrow function

const Formulario = ({aoReferenciaCadastrada}) => {

    const areas = [
        'Gestão de Projetos',
        'UX e Design',
        'Desenvolvimento',
        'DevOps',
        'Data Science',
        'Mobile',
        'Inovação e Gestão',
        'Segurança da Informação',
        'Cloud Computing',
        'Redes e Infraestrutura'
      ] 

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        const novoCard = {
            nome,
            cargo,
            imagem,
            time
        }
        aoReferenciaCadastrada(novoCard);
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
               label = 'Sua referência trabalha com:'
               itens={areas}
               valor={time}
               aoAlterarCampo={valor => setTime(valor)}
            />

            <Botao>Cadastrar</Botao>

            </form> 
               
        </section>
    )
}

export default Formulario;
