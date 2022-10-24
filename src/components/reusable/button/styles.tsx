import styled, { css } from "styled-components";
import colors from "theme/colors";
import * as a from "components/reusable/keyframes";

export const Button = styled.button`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(50, 50, 50, 0.1);
  font-size: 14px;
  font-weight: 600;
  background: ${colors.red};
  color: ${colors.white};
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: All 0.2s;
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.99);
  }

  ${(props: any) =>
    props.color === "orange" &&
    css`
      background: ${colors.orange};
      color: ${colors.white};
    `}

    ${(props: any) =>
    props.active &&
    css`
      & .loader {
        display: block;
      }
    `}

    ${(props: any) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    `}

    ${(props: any) =>
    props.flee &&
    props.$flee &&
    css`
      -webkit-animation: ${a.fleeLeft} 0.5s;
      animation-fill-mode: forwards;
      cursor: not-allowed;
    `}

    ${(props: any) =>
    props.flee &&
    !props.$flee &&
    css`
      -webkit-animation: ${a.fleeRight} 0.5s;
      animation-fill-mode: forwards;
      cursor: not-allowed;
    `}
`;

export const Spinner = styled.span`
  display: none;

  &:after {
    content: "";
    display: block;
    margin-left: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid ${colors.white};
    border-color: ${colors.white} transparent ${colors.white} transparent;
    animation: ${a.rotate} 1.2s linear infinite;
  }
`;
