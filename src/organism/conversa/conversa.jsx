import React from 'react';
import Barradeconversa from '../../molecules/barradeconversa/barraDeConversa';
import Balaodeconversa from '../../molecules/balaoDeConversa';
import Barrademensagem from '../../molecules/barrademensagem/barraDeMensagem';
import {Container} from './style'
import { BiRightArrow } from 'react-icons/bi';
import { BiLeftArrow } from 'react-icons/bi';

function Conversa(props) {

  return (
    
    <Container id='geral2'>
      <Barradeconversa />
        <div className='conversas'>
          <div id='aba'>
              <BiRightArrow id='arrowRight'/>
              <BiLeftArrow id='arrowLeft'/>
          </div>
          <Balaodeconversa />
        </div>
      <Barrademensagem />
    </Container>
  );
}


export default Conversa;