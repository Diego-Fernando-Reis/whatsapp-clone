import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #202c33;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  bottom: 0;
  position: absolute;
  *{
    margin-right: 10px;
    cursor: pointer;
  }
  #emoticon{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
    #smile{
      color: rgba(255, 255, 255, 0.726);
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 25px;
      transform: translate(-50%, -50%);
    }
  }

  #arquivos{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
    #clip{
      color: rgba(255, 255, 255, 0.726);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 19px;
    }
  }

  #mensagem{
    background-color: #3b4a54;
    border: none;
    padding: 12px 12px;
    border-radius: 6px;
    cursor: auto;
    width: calc(100% - 110px);
    ::placeholder{
      color: rgba(255, 255, 255, 0.726);
    }
  }

  #gravadorDeVoz{
    width: 30px;
    height: 30px;
    border: none;
    position: relative;
    #mic{
      color: rgba(255, 255, 255, 0.726);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 24px;

    }
  }

  #enviarMensagem{
    width: 30px;
    height: 30px;
    border: none;
    display: none;
  }
`