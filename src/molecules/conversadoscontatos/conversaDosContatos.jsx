import React from 'react';
import Foto from '../../atoms/foto'
import Titulo from '../../atoms/titulo'
import Icone from '../../atoms/icone'
import Subtitulo from '../../atoms/subtitulo'
import {Container} from './style'
import { BsCheck2All } from 'react-icons/bs';

function Conversadoscontatos(props) {
  return (
    
    <Container id='container'>
      <Foto id='fotoContato'/>
      <div id='conteudo'>
        <div className='parte2'>
          <Titulo id='nomeContato' texto='Nome do Contato'/>
          <div className='mensagem'>
            <Icone id='statusMensagem'>
              <BsCheck2All id='check2'/>
            </Icone>
            <Subtitulo id='ultimaMensagem' texto='Última mensagem'/>
          </div>
        </div>
        <div className='parte3'>
          <Subtitulo id='dateUltimamensagem' texto='00/00/0000'/>
          <Icone id='audioSilenciado'/>
          <Icone id='mensagemFixada'/>
          <Icone id='opcoesMensagem'>
            <ul>
              <li><a>Arquivar conversa</a></li>
              <li><a>Silenciar notificações</a></li>
              <li><a>Apagar conversa</a></li>
              <li><a>Desafixar conversa</a></li>
              <li><a>Marcar como não lida</a></li>
            </ul>
          </Icone>
        </div>
      </div>
    </Container>
  );
}

export default Conversadoscontatos;