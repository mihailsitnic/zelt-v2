import styled, { css } from "styled-components";
import colors from "theme/colors";
import * as a from "components/reusable/keyframes";

export const Btn = styled.button`
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.2s ease;
  align-self: flex-start;
  min-height: 76px;
  width: 48px;
  border-left: 1px solid ${colors.grey4};

  &:hover {
    opacity: 1;
  }
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
`;

export const Toast = styled.article`
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;

  ${(props: any) =>
    props.state === "success" &&
    css`
      background: ${colors.green1};
    `}

  ${(props: any) =>
    props.state === "error" &&
    css`
      background: ${colors.red2};
    `}
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Status = styled.span`
  padding-left: 12px;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: ${colors.black};
`;

export const SubTitle = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.grey3};
  padding-top: 4px;
`;

export const CloseIcon = styled.img``;

export const Wrap = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: ${colors.orange};

  & .Toastify__toast-container {
    z-index: 9999;
    -webkit-transform: translate3d(0, 0, 9999px);
    position: fixed;
    width: 340px;
    box-sizing: border-box;
    color: ${colors.white};
  }

  & .Toastify__toast {
    position: relative;
    min-height: 64px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1),
      0 2px 15px 0 rgba(0, 0, 0, 0.05);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-height: 800px;
    overflow: hidden;
    font-family: sans-serif;
    cursor: pointer;
    direction: ltr;
  }

  & .Toastify__toast--rtl {
    direction: rtl;
  }

  & .Toastify__toast--default {
    background: ${colors.white};
  }

  & .Toastify__toast-body {
    width: 291px;
    display: flex;
    padding: 0 16px;
  }

  & .Toastify__close-button > svg {
    fill: currentColor;
    height: 16px;
    width: 14px;
    background: transparent;
  }

  & .Toastify__close-button:hover,
  .Toastify__close-button:focus {
    opacity: 1;
  }

  & .Toastify__progress-bar {
    display: none;
  }

  & .Toastify__bounce-enter--top-right {
    animation: ${a.bounceInRight} 0.2s linear;
  }
`;
