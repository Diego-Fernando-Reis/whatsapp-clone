import React from 'react';
import Subtitulo from '../atoms/subtitulo';
import Titulo from '../atoms/titulo';
import Icone from '../atoms/icone'
import Foto from '../atoms/foto';

function Dadosdogrupo(props) {
  return (
    <>
      <Icone id='sair'/>
      <Titulo texto='Sair do grupo'/>
      <Icone id='dislike'/>
      <Titulo texto='Denunciar grupo'/>
    </>
  );
}

export default Dadosdogrupo;