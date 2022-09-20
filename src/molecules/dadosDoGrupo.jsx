import React from 'react';
import Subtitulo from '../atoms/subtitulo';
import Titulo from '../atoms/titulo';
import Icone from '../atoms/icone'
import Foto from '../atoms/foto';

function Dadosdogrupo(props) {
  return (
    <>
      <Input id='descricao'/>
      <Subtitulo id='subtituloDescricao' texto={`Grupo criado por ` + props.nomeDoCriador + ` no dia ` + props.dataCriacao + ` às ` + props.horaCriacao}/>
      <Subtitulo texto='Arquivos de mídia, links e docs'/>
      <Titulo id='arquivosquantity'/>
      <Icone id='seta'/>
      <div className='midia'>
        <Foto id='ultimo'/>
        <Foto id='penultimo'/>
        <Foto id='antepenultimo'/>
      </div>
    </>
  );
}

export default Dadosdogrupo;