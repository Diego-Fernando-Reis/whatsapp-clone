import React from 'react';
import Subtitulo from '../atoms/subtitulo'
import Titulo from '../atoms/titulo'
import Icone from '../atoms/icone'


function Nomedeperfil(props) {
  return (
    <>
      <Subtitulo texto='Seu nome'/>
      <Titulo id='nome'/>
      <Icone id='icone-alteracao'/>
      <Subtitulo texto='Esse não é seu nome de usuário e nem seu PIN. Esse nome será visível para seus contatos do WhatsApp'/>
    </>
  );
}

export default Nomedeperfil;