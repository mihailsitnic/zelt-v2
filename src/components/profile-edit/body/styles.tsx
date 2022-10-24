import styled, { css } from "styled-components";
import { Field, Form } from "formik";
import colors from "theme/colors";
import device from "theme/device";

export const Main = styled.main`
  margin-top: 60px;
  padding-top: 32px;
  padding-bottom: 60px;

  @media ${device.mobileL} {
  }
`;

export const Wrapper = styled.div`
  width: 825px;
  max-width: 90%;
  margin: 0 auto;

  @media ${device.mobileL} {
  }
`;

export const Name = styled.h3`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

export const Forma = styled(Form)`
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgb(50 50 50 / 10%);
  margin-top: 30px;

  @media ${device.mobileL} {
  }
`;

export const Input = styled(Field)`
  width: 100%;
  height: 36px;
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid ${colors.grey1};
  outline: 1px solid transparent;
  background: ${colors.white};
  font-size: 14px;
  color: ${colors.black};
  outline: none;

  &:focus {
    box-shadow: 0 2px 10px 0 rgba(26, 26, 26, 0.15);
    border: 1px solid ${colors.black};
    outline: 1px solid ${colors.black};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media ${device.mobileL} {
  }

  ${(props: any) =>
    props.component === "textarea" &&
    css`
      width: 100%;
      border-radius: 4px;
      padding: 12px;
      outline: none;
      height: 72px;
      resize: none;
      font-family: "HelveticaNeue", "Helvetica Neue", "helvetica";
    `}

  ${(props: any) =>
    props.validation &&
    css`
      background: ${colors.red2};
      box-shadow: 0 2px 10px 0 rgba(255, 0, 101, 0.15) !important;
      border: 1px solid ${colors.red1};
      outline: 1px solid ${colors.red1};

      &:focus {
        border: 1px solid ${colors.red1};
        outline: 1px solid ${colors.red1};
        background: ${colors.red2};
      }
    `}
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 24px;

  @media ${device.mobile} {
    flex-direction: column;
    padding-top: 0;
  }
`;

export const Col = styled.div`
  width: calc(100% / 2 - 15px);

  @media ${device.mobile} {
    width: 100%;
    padding-top: 24px;
  }

  ${(props: any) =>
    props.width &&
    css`
      width: calc(100% / 2 - 7.5px);
    `}

  ${(props: any) =>
    props.row &&
    css`
      width: 100%;
    `}
`;

export const Body = styled.div`
  padding: 24px 28px 36px;

  @media ${device.mobileL} {
  }
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  display: inline-flex;
  white-space: nowrap;

  @media ${device.mobileL} {
  }
`;

export const Footer = styled.footer`
  height: 84px;
  padding: 0 28px;
  border-top: 1px solid ${colors.grey2};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${device.mobileL} {
  }
`;

export const Group = styled.div`
  display: flex;
  padding-top: 30px;

  @media ${device.mobileL} {
  }
`;

export const Image = styled.div`
  width: 96px;
  height: 96px;
  margin-right: 28px;

  @media ${device.mobileL} {
  }
`;

export const Img = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;

  @media ${device.mobileL} {
  }
`;

export const Upload = styled.div`
  width: calc(100% - 124px);
  padding-top: 10px;

  @media ${device.mobileL} {
  }
`;
