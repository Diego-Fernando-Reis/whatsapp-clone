import React from 'react';
import Subtitulo from '../atoms/subtitulo';
import Titulo from '../atoms/titulo';
import Icone from '../atoms/icone'
import Foto from '../atoms/foto';

function Topopesquisarmensagem(props) {
  return (
    <>
      <Icone id='fechar'/>
      <Titulo texto='Pesquisar mensagens'/>
    </>
  );
}

export default Topopesquisarmensagem;