import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import InfoListForm from './main/InfoListForm';
import InfoListTemplate from './main/InfoListTemplate';
import FilterLayout from '../components/setFilter/FilterLayout';
import { RootState } from '../modules/index';

interface Props {
  isSidebar: boolean;
  handle(a: boolean): void;
}

const Container = ({ isSidebar, handle }: Props) => {
  const method = useSelector(({ filter }: RootState) => filter.filter);
  const material = useSelector(({ material }: RootState) => material.material);
  const status = useSelector(({ toggle }: RootState) => toggle.ToggleOn);

  return (
    <LayoutBox
      isSidebar={isSidebar}
      onClick={() => {
        handle(false);
      }}
      style={{}}
    >
      <Layout>
        <TextHeader>
          들어온 요청
          <br />
          <span>파트너에게 딱 맞는 요청서를 찾아보세요.</span>
        </TextHeader>
        <FilterLayout />
        <InfoListTemplate>
          <InfoListForm method={method} material={material} status={status} />
        </InfoListTemplate>
      </Layout>
    </LayoutBox>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1130px;
  margin: auto;
  left: 155px;
  top: 110px;
  @media (max-width: 600px) {
    left: 25px;
    width: 90%;
    margin-left: 24px;
  }
`;

const TextHeader = styled.div`
  span {
    font-size: 16px;
    font-weight: 500;
  }

  font-weight: 800;
  font-family: Noto Sans KR Regular;
  color: #323d45;
  font-size: 20px;
  margin-bottom: 32px;
  margin-top: 40px;
  @media (max-width: 600px) {
    span {
      font-size: 23px;
    }
    font-size: 28px;
  }
`;
const LayoutBox = styled.div<{ isSidebar?: boolean }>`
  height: calc(100vh - 70px);
  transition: all 1s;
  ${(props) =>
    props.isSidebar
      ? css`
          background: #000000;
          opacity: 0.5;
          overflow: hidden;
        `
      : css`
          background: '';
          opacity: 1;
          overflow: visible;
        `}
`;

export default Container;
