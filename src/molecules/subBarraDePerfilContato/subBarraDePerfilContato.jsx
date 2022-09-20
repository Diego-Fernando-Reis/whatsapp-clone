import React from 'react';
import Input from '../../atoms/input'
import Icone from '../../atoms/icone'
import {Container} from './style'
import { RiFilter3Fill } from 'react-icons/ri';
import { BiSearchAlt2 } from 'react-icons/bi';

var  emailIcon = <RiFilter3Fill size={10}/>;
function Subbarradeperfilcontato(props) {
  return (
    <Container>
      <Icone id='iconePesquisa'>
        <BiSearchAlt2 id="search"/>
      </Icone>
      <Input id='pesquisa' placeholder={`Pesquisar ou começar uma nova conversa`}/>
      <Icone id='filtro'>
        <RiFilter3Fill />
      </Icone>
    </Container>
  );
}

export default Subbarradeperfilcontato;