import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  isSidebar: boolean;
}

const SideNav = ({ isSidebar }: Props) => {
  return (
    <SideSlider isSidebar={isSidebar}>
      <SlideSliderTitle>
        <SlideImg src="/Image/icon_slidelogo.png" />
      </SlideSliderTitle>
      <SlideSliderBox>
        <Partner>
          <CompanyIcon src="/Image/icon_companyB.png" />
          파트너정밀가공
        </Partner>
        <Logout>로그아웃</Logout>
      </SlideSliderBox>
    </SideSlider>
  );
};

const SideSlider = styled.div<{ isSidebar?: boolean }>`
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  width: 80vw;
  height: 100vh;
  background-color: white;
  z-index: 10;
  transition: transform 1s;
  ${(props) =>
    props.isSidebar
      ? css`
          transform: translateX(0vw);
        `
      : css`
          transform: translateX(-100vw);
        `}

  @media (max-width: 600px) {
    display: block;
  }
`;
const SlideSliderTitle = styled.div`
  height: 70px;
  width: 100%;
  border-radius: 0px;
  border-radius: 0px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`;

const SlideImg = styled.img`
  height: 20px;
  width: 153px;
  margin-top: 25px;
  margin-left: 20px;
  border-radius: 0px;
`;
const Partner = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: nullpx;
  font-family: Noto Sans KR Medium;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;
  cursor: pointer;
`;
const Logout = styled.div`
  height: 50px;
  width: 100%;
  border-radius: nullpx;
  font-family: Noto Sans KR Medium;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  cursor: pointer;
`;
const CompanyIcon = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 18px;
  border-radius: 0px;
`;
const SlideSliderBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-top: 40px;
`;

export default SideNav;
