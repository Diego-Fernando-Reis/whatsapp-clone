import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #202c33;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  #fotoContato{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
    }
  .interno{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 0 10px;
    #nomeContato{
      font-size: 18px;
      color: rgba(255, 255, 255, 0.826);
    }

    #dadosContato{
      font-size: 12px;
      color: rgba(255, 255, 255, 0.626);
    }

    .direita{
      display: flex;
      width: 40px;
      justify-content: space-between;
      #iconeDePesquisa{
        cursor: pointer;
        #search{
          font-size: 20px;
          color: rgba(255, 255, 255, 0.826);
        }
      }

      #menu{
        cursor: pointer;
        padding-top: 2px;
        .circle{
          width: 3px;
          height: 3px;
          background-color: rgba(255, 255, 255, 0.826);
          border-radius: 50%;
          margin-bottom: 2px;
          
        }

        ul{
          display: none;
        }
      }
    }
  }
  
`