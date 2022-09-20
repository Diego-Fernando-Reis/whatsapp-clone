import styled from 'styled-components'

export const Container = styled.div`
  width: 420px;
  border-right: 0.5px solid rgba(255, 255, 255, 0.126);
  #conversas{
    height: calc(100vh - 150px);
    background-color: #111b21;
    position: relative;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 5px;
    }

      /* Track */
    ::-webkit-scrollbar-track {
      background: transparent; 
    }
      
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #242D33;
      }

      
  }
  #conversas.more-width::-webkit-scrollbar {
    width: 10px;
  }

  @media screen and (max-width: 1060px) {
    width: 80px;
    #conteudo{
      display: none;
    }
  }
  
`