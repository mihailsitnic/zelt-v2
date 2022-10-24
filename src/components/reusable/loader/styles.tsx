import styled from "styled-components";
import colors from "theme/colors";
import * as a from "components/reusable/keyframes";

export const Spinner = styled.span`
  display: block;

  &:after {
    content: "";
    display: block;
    margin: 2em auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid ${colors.orange};
    border-color: ${colors.orange} transparent ${colors.orange} transparent;
    animation: ${a.rotate} 1.2s linear infinite;
  }
`;
