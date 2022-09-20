import React from 'react';
import Conversa from '../organism/conversa/conversa';
import Conversas from '../organism/conversas/conversas';
import {Container} from './style'

function App(props) {
  React.useEffect(() => {
    const geral = document.getElementById('geral')
    const geral2 = document.getElementById('geral2')
    const perfil = document.getElementById('perfil')
    const pesquisa = document.getElementById('pesquisa')
    const iconePesquisa = document.getElementById('iconePesquisa')
    /*aqui identifica a quantidade de conversas existentes */
    const conteudo = document.querySelectorAll(`#conversas #container`)
    const bloco = document.getElementById('bloco');
    const leftArrow = document.getElementById('arrowLeft')
    const rightArrow = document.getElementById('arrowRight')
    aba.addEventListener('click', ()=>{
      if(geral.style.width == '420px' ){
        let i = 0;
        geral.style.width = '80px';
        geral2.style.width = 'calc(100% - 80px)';
        perfil.style.width = '79px';
        bloco.style.display = 'none';
        pesquisa.style.display = 'none'
        iconePesquisa.style.backgroundColor = 'transparent'
        leftArrow.style.display = 'none'
        rightArrow.style.display = 'block'
        while(i < conteudo.length){
          conteudo[i].children[1].style.display= 'none'
          i++;
        }
      }
      else{
        let i = 0;
        geral.style.width = '420px';
        geral2.style.width = 'calc(100% - 420px)';
        perfil.style.width = '419px';
        bloco.style.display = 'flex';
        pesquisa.style.display = 'block'
        iconePesquisa.style.backgroundColor = '#202c33'
        leftArrow.style.display = 'block'
        rightArrow.style.display = 'none'
        while(i < conteudo.length){
          conteudo[i].children[1].style.display= 'flex'
          i++;
        }
      }
      
    });

    document.body.onresize = function() {
      if (document.body.clientWidth >= 1060) {
        let i = 0;
        geral.style.width = '420px';
        geral2.style.width = 'calc(100% - 420px)';
        perfil.style.width = '419px';
        bloco.style.display = 'flex';
        pesquisa.style.display = 'block'
        iconePesquisa.style.backgroundColor = '#202c33'
        leftArrow.style.display = 'block'
        rightArrow.style.display = 'none'
        while(i < conteudo.length){
          conteudo[i].children[1].style.display= 'flex'
          i++;
        }
      }
  };
  }, []);

  return (
    <Container>
      <div className='interno'>
        <Conversas id='conversas'/>
        <Conversa id='conversa'/>
      </div>
      
    </Container>
  );
}



export default App;