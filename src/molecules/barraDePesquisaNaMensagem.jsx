import React from 'react';
import Input from '../atoms/input'
import Icone from '../atoms/icone'

function Barradepesquisanamensagem(props) {
  return (
    <>
      <Icone id='pesquisa'/>
      <Icone id='voltar'/>
      <Input id='pesquisar' placeholder='Pesquisar...'/>
    </>
  );
}

export default Barradepesquisanamensagem;