import styled, { css } from 'styled-components'
import colors from 'theme/colors'
import device from 'theme/device'
import { Link } from 'react-router-dom'

export const Href = styled(Link)`
    display: flex;
    position: relative;
    margin-right: 20px;
    max-width: fit-content;
    text-decoration: none;
    cursor: pointer;

    @media ${device.mobileL} { 
        margin-right: 28px;
    }
`;

export const Bell = styled.img`
`;

export const Info = styled.span`
    position: absolute;
    top: -5px;
    right: -7px;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background: ${colors.red1};
    color: ${colors.white};
    font-size: 12px;
    font-weight: 500;
    display: none;

    ${(props: any) => props.view && css`
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`;