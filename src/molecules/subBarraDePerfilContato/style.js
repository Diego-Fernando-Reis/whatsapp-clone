import styled from 'styled-components'

export const Container = styled.div`
  background-color: #111b21;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  input{
    background-color: #202c33;
    border: none;
    width: 100%;
    margin: 0 0 0 0;
    padding: 8px 15px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    ::placeholder{
      color: rgba(255, 255, 255, 0.526);
    }
  }

  #iconePesquisa{
    margin: 0 0;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.526);
    font-size: 20px;
    background-color: #202c33;
    height: 32px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    padding: 0 10px;
    padding-top: 5px;
    margin-left: 10px;
  }

  #filtro{
    margin: 0 10px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.526);
    font-size: 20px;
  }
  
  @media screen and (max-width: 1060px){
    #pesquisa{
      display: none;
    }

    #iconePesquisa{
    background-color: transparent;
    padding-right: 0;
  }
  }

  
`