import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";

export const Section = styled.header`
  width: 100%;
  background: ${colors.white};
  box-shadow: rgb(50 50 50 / 10%) 0px 1px 3px 0px;
  z-index: 200;
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;

  @media ${device.mobileL} {
  }
`;

export const Wrapper = styled.div`
  width: 1140px;
  max-width: 90%;
  margin: 0px auto;
  position: relative;
  
  @media ${device.mobileL} {
  }
`;

export const Inner = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media ${device.mobileL} {
  }
`;

export const Logo = styled(Link)`
  font-family: "Bely";
  text-decoration: none;
  color: ${colors.blue};
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  
  @media ${device.mobileL} {
  }
`;
