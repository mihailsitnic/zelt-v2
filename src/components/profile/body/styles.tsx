import styled from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import img from "img";

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

export const Section = styled.section`
  margin-top: 30px;

  @media ${device.mobileL} {
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const Picture = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: rgb(50 50 50 / 10%) 0px 1px 3px 0px;
  position: relative;
  width: 255px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 28px;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;

  @media ${device.mobileL} {
  }
`;

export const Info = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: rgb(50 50 50 / 10%) 0px 1px 3px 0px;
  padding: 28px;
  position: relative;
  min-height: 200px;
  width: calc(100% - 285px);

  @media ${device.mobileL} {
    width: 100%;
    margin-top: 28px;
  }
`;

export const Title = styled.h3`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  @media ${device.mobileL} {
  }
`;

export const Ul = styled.ul`
  list-style: none;

  @media ${device.mobileL} {
  }
`;

export const Li = styled.li`
  position: relative;
  margin-top: 32px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 36px;
    height: 36px;
    background: #ebedf0;
    border-radius: 50%;
  }

  &:nth-child(1) {
    &:after {
      content: "";
      width: 16px;
      height: 16px;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: url(${img.iconDateOfBirth});
    }
  }

  &:nth-child(2) {
    &:after {
      content: "";
      width: 16px;
      height: 16px;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: url(${img.iconSalary});
    }
  }

  @media ${device.mobileL} {
  }
`;

export const Span = styled.span`
  padding-left: 50px;
  font-size: 14px;
  font-weight: 600;

  @media ${device.mobileL} {
  }
`;

export const Name = styled.p`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-top: 10px;

  @media ${device.mobileL} {
  }
`;

export const About = styled.div`
  width: 100%;
  min-height: 147px;
  margin-top: 28px;
  padding: 24px 38px 28px 28px;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(50, 50, 50, 0.1);
  background-color: ${colors.white};

  @media ${device.mobileL} {
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.43;
  padding-top: 12px;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;