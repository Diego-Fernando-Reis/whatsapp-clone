import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-right: 10px;
  #fotoContato{
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
      margin-right: 10px;
    }
  #conteudo{
    display: flex;
    width: calc(100% - 70px);
    justify-content: space-between;
    align-content: space-between;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.126);
    padding-bottom: 10px;
    .parte2{
      display: flex;
      align-content: space-between;
      flex-wrap: wrap;
      #nomeContato{
        font-size: 20px;
        color: rgba(255, 255, 255, 0.726);
        top: 0;
        width: 100%;
        margin-bottom: 10px;
      }

      .mensagem{
        display: flex;
        align-items: center;
        #statusMensagem{
          width: 10px;
          color: rgba(255, 255, 255, 0.326);
          font-weight: bold;
          font-size: 18px;
          margin-right: 15px;
          
        }
        #ultimaMensagem{
          color: rgba(255, 255, 255, 0.326);
          font-size: 12px;
        }
      }
    }
    

    #dateUltimamensagem{
      color: rgba(255, 255, 255, 0.326);
      font-size: 12px;
    }

    #opcoesMensagem{
      display: none;
    }
  }  

  @media screen and (max-width: 1060px){
    padding: 10px 0;
    #fotoContato{

    }
    
  }
  
`