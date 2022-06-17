import Styled from "styled-components";

export const Advertising = Styled.div`

    display: flex;
    align-items: center;
    position: absolute;
    height: 20%;
    width: 12%;
    overflow: hidden;

    img {
        display: flex;
        width: 13rem;
        left: calc(50% - 2rem);
        opacity: 100;
        
      }

      @keyframes display {
         0% {
          
          opacity: 0;
        }
        25% {
          opacity: 0.5;
        }
        50% {
          opacity: 1;
        }
        75% {
          opacity: 0.5;
        }
        100% {
          opacity: 0;
        }
      }


`;