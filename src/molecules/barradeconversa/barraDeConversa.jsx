import React from 'react';
import Foto from '../../atoms/foto'
import Titulo from '../../atoms/titulo';
import Subtitulo from '../../atoms/subtitulo';
import Icone from '../../atoms/icone'
import {Container} from './style'
import { BiSearchAlt2 } from 'react-icons/bi';

function Barradeconversa(props) {
  return (
    <Container>
      <Foto id='fotoContato'/>
      <div className='interno'>
        <div className='esquerda'>
          <Titulo id='nomeContato' texto='Nome do Contato'/>
          <Subtitulo id='dadosContato' texto='online'/>
        </div>
        <div className='direita'>
          <Icone id='iconeDePesquisa'>
            <BiSearchAlt2 id="search"/>
          </Icone>
          <Icone id='menu'>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <ul>
              <li><a>Dados do grupo</a></li>
              <li><a>Selecionar mensagens</a></li>
              <li><a>Reativar notificações</a></li>
              <li><a>Limpar mensagens</a></li>
              <li><a>Sair do grupo</a></li>
            </ul>
          </Icone>
        </div>
      </div>
    </Container>
  );
}

export default Barradeconversa;