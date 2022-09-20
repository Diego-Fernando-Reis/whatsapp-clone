import React from 'react';
import Subtitulo from '../atoms/subtitulo';
import Titulo from '../atoms/titulo';
import Icone from '../atoms/icone'
import Foto from '../atoms/foto';

function Configuracaodadosdogrupo(props) {
  return (
    <>
      <Icone id='favorito'/>
      <Titulo id='mensagensfavoritas' texto='Mensagens favoritas'/>
      <Icone id='seta'/>
      <Icone id='iconeSilenciar'/>
      <Titulo id='silenciar'/>
      <Subtitulo id='statusSilencio'/>
      <Icone id='silenceKey'/>
      <Icone id='iconeCriptografia'/>
      <Titulo id='criptografia' texto='Criptografia'/>
      <Subtitulo id='subtituloCriptografia' texto='As mensagens são protegidas com a criptografia de ponta a ponta. Clique para saber mais.'/>
      <Subtitulo id='parcipantesQuantity'/>
      <Icone id='pesquisarPartcipante'/>
      <Foto id='fotoParticipante'/>
      <Titulo id='nomeParticipante'/>
      <Subtitulo id='fraseParticipante'/>
      <Subtitulo id='participanteStatus'/>
    </>
  );
}

export default Configuracaodadosdogrupo;