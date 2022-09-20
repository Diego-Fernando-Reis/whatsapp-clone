import React from 'react';
import Foto from '../atoms/foto'
import Titulo from '../atoms/titulo';
import Subtitulo from '../atoms/subtitulo'

function Perfildadosdogrupo(props) {
  return (
    <>
      <Foto id='fotoPerfil'/>
      <Titulo id='nomePerfil'/>
      <Subtitulo id='numeroContato'/>
    </>
  );
}

export default Perfildadosdogrupo;