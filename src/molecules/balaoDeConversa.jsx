import React from 'react';
import Titulo from '../atoms/titulo'
import Icone from '../atoms/icone'
import Subtitulo from '../atoms/subtitulo'

function Balaodeconversa(props) {
  return (
    <>
      <Titulo id='nome'/>
      <div id='mensagem'>{props.mensagem}</div>
      <Subtitulo id='date'/>
      <Icone id='check'/>
    </>
  );
}

export default Balaodeconversa;