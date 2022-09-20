import React from 'react';
import Icone from '../../atoms/icone'
import Input from '../../atoms/input'
import Button from '../../atoms/button'
import {Container} from './style'
import { FaRegSmileBeam } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';
import { IoMdMic } from 'react-icons/io';

function Barrademensagem(props) {
  return (
    <Container>
      <Icone id='emoticon'>
        <FaRegSmileBeam id='smile'/>
      </Icone>
      <Icone id='arquivos'>
        <FiPaperclip id='clip'/>
      </Icone>
      <Input id='mensagem' placeholder='Mensagem'/>
      <Icone id='gravadorDeVoz'>
        <IoMdMic id='mic'/>
      </Icone>
      <Button id='enviarMensagem'/>
    </Container>
  );
}

export default Barrademensagem;