import styled from "styled-components";
import colors from "theme/colors";
import device from "theme/device";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobileL} {
  }
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.29;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;