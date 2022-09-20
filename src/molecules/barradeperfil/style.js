import styled from 'styled-components'

export const Container = styled.div`
  background-color: #202c33;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
  width: calc(450px - 31px);
  #fotoPerfil{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }

  #bloco{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    margin-right: 20px;
    #status{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      cursor: pointer;
      #cstatus{
        color:rgba(255, 255, 255, 0.726);
        font-size: 22px;
      }
    }

    #novaMensagem{
      width: 20px;
      height: 15px;
      border-radius: 2px;
      cursor: pointer;

      #conversation{
        color: rgba(255, 255, 255, 0.726);
        font-size: 22px;
      }
    }

    #menu{
      .circle{
        width: 3px;
        height: 3px;
        background-color: rgba(255, 255, 255, 0.726);
        border-radius: 50%;
        margin-bottom: 2px;
        cursor: pointer;
      }

      ul{
        display: none;
      }
    }
  }

  @media screen and (max-width: 1060px){
    width: 79px;
    #bloco{
      display: none;
    }
  }

  
`