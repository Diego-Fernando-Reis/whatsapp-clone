import React from 'react';
import Barradeperfil from '../../molecules/barradeperfil/barraDePerfil';
import Conversadoscontatos from '../../molecules/conversadoscontatos/conversaDosContatos';
import Subbarradeperfilcontato from '../../molecules/subBarraDePerfilContato/subBarraDePerfilContato';
import {Container} from './style'

function Conversas(props) {

  document.addEventListener('mousemove', (e)=> {
    let ele = document.getElementById('conversas');
    let distance = ele.offsetLeft + ele.offsetWidth - e.pageX;
    distance < 15 && distance > -15 ? ele.classList.add('more-width') : ele.classList.remove('more-width');
  });

  return (
    <Container id='geral'>
      <Barradeperfil />
      <Subbarradeperfilcontato />
      <div id='conversas'>
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
        <Conversadoscontatos />
      </div>
    </Container>
  );
  
}

export default Conversas;