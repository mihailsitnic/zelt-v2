import styled, { css } from 'styled-components'
import device from 'theme/device'
import { Link } from 'react-router-dom'
import colors from 'theme/colors'

export const Menu = styled.div`
    background: rgb(255, 255, 255);
    border-radius: 4px;
    position: absolute;
    padding: 8px 0px;
    box-shadow: rgb(0 0 0 / 25%) 0px 20px 40px -12px;
    right: -20px;
    width: 240px;
    top: 70px;
    z-index: 999;
    transition: all 0.3s ease 0s;
    display: none;

    @media ${device.mobile} {
        right: 0;
        width: 200px;
    }

    ${(props: any) => props.state && css`
        display: block;
    `}
`;

export const Dropdown = styled.div`
`;

export const Ul = styled.ul`
    list-style: none;
`;

export const Li = styled.li`
    width: 100%;
    position: relative;

    &:nth-last-child(2) {
        padding-bottom: 8px;
    }

    &:last-child {
        padding-top: 8px;

        & a {
            color: ${colors.red}
        }

        &:after {
            content: "";
            position: absolute;
            top: 0px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 24px);
            height: 1px;
            background: ${colors.grey4};
        }
    }
`;

export const Href = styled(Link)`
    color: ${colors.black};
    display: flex;
    width: 100%;
    font-size: 14px;
    line-height: 1.43;
    text-decoration: none;
    position: relative;
    padding: 8px 12px 8px 36px;

    &:hover {
        background: ${colors.grey5};
    }
`;

export const Icon = styled.img`
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    padding-left: 20px;
    border-left: 1px solid ${colors.grey1};
    cursor: pointer;

    @media ${device.mobileL} { 
        padding-right: 15px;
        padding-left: 0;
        border: none;
    }
`;

export const UserName = styled.h3`
    color: ${colors.black};
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    padding-left: 10px;
    user-select: none;
    max-width: 185px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    @media ${device.laptop} { 
        max-width: 100px;
    }

    @media ${device.mobileL} { 
        display: none;
    }
`;

export const Arrow = styled.span`
    display: inline-block;
    position: relative;
    user-select: none;

    &:hover {
        opacity: .9;
    }

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: -2px;
        right: -15px;
        width: 2px;
        height: 7px;
        border-radius: 1px;
        background: ${colors.grey3};
        transform: rotate(-135deg);
        transition: All .3s;
    }

    &:after {
        right: -11px;
        transform: rotate(135deg);
    }

    ${(props: any) => props.isactive && css`
        &:before {
            transform: rotate(-45deg);
        }

        &:after {
            transform: rotate(45deg);
        }
    `}
`;

export const Avatar = styled.img`
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
  }
`;