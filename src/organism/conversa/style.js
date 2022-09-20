import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  .conversas{
    padding-top: calc(100vh - 105px);
    background-color: #0B141A;
  }

  @media screen and (max-width: 1060px){
    #aba{
      display: block;
      position: absolute;
      width: 30px;
      height: 70px;
      top: 62px;
      left: 2px;
      background-color: #202c33;
      cursor: pointer;
      border-bottom-right-radius: 5px;
      

      #arrowRight{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(255, 255, 255, 0.726);
      }

      #arrowLeft{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(255, 255, 255, 0.726);
        display: none;
      }
    }
  }
`