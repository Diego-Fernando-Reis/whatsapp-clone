import React from 'react';
import Foto from '../../atoms/foto';
import Icone from '../../atoms/icone';
import {Container} from './style'
import { BiConversation } from "react-icons/bi";
import { TbCircleDashed } from "react-icons/tb";

function Barradeperfil(props) {
  return (
    <Container id='perfil'>
      <Foto id='fotoPerfil'/>
      <div id='bloco'>
        <Icone id='status'>
          <TbCircleDashed id='cstatus'/>
        </Icone>
        <Icone id='novaMensagem'>
          <BiConversation id='conversation'/>
        </Icone>
        <Icone id='menu'>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <ul>
            <li><a>Novo grupo</a></li>
            <li><a>Mensagens favoritas</a></li>
            <li><a>Configurações</a></li>
            <li><a>Desconectar</a></li>
          </ul>
        </Icone>
      </div>
    </Container>
  );
}

export default Barradeperfil;