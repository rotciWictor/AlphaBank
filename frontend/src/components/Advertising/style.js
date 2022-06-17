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
        opacity: 0;
        animation: display 5s infinite;
      }

      @keyframes display {
        0% {
          transform: translateX(200px);
          opacity: 0;
        }
        10% {
          transform: translateX(0);
          opacity: 1;
        }
        60% {
          transform: translateX(0);
          opacity: 1;
        }
        90% {
          transform: translateX(-200px);
          opacity: 0;
        }
        100% {
          transform: translateX(-200px);
          opacity: 0;
        }
      }


`;