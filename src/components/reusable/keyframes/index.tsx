import { keyframes } from "styled-components";

export const init = keyframes`
  0% {
    width: 98%;
  }
  100% {
    width: 100%;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

export const fleeLeft = keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
`;

export const fleeRight = keyframes`
    0% {
      transform: translateX(-100%);
    }
    50% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    56.5% {
        -webkit-transform: translateX(-6px) rotateY(-9deg);
        transform: translateX(-6px) rotateY(-9deg)
    }

    68.5% {
        -webkit-transform: translateX(5px) rotateY(7deg);
        transform: translateX(5px) rotateY(7deg)
    }

    81.5% {
        -webkit-transform: translateX(-3px) rotateY(-5deg);
        transform: translateX(-3px) rotateY(-5deg)
    }

    93.5% {
        -webkit-transform: translateX(2px) rotateY(3deg);
        transform: translateX(2px) rotateY(3deg)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
`;

export const bounceInRight = keyframes`
    from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
        opacity: 0;
        transform: translate3d(3000px, 0, 0);
    }
    60% {
        opacity: 1;
        transform: translate3d(-25px, 0, 0);
    }
    75% {
        transform: translate3d(10px, 0, 0);
    }
    90% {
        transform: translate3d(-5px, 0, 0);
    }
    to {
        transform: none;
    }
`;