import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Button from '../../components/common/Button';
import type { InfoType } from '../../types/components/infolist';
import type { ContainerType } from '../../types/styles/cardboard/ContainerType';

const CardBoard: FC<InfoType> = (info: InfoType) => {
  const { title, client, due, count, amount, method, material, status, index } = info;

  const checkCurrentElemNum = (currentList: string[]): string => {
    const currentListNum = currentList.length;
    let joinedCurrentList: string;

    if (currentListNum < 1) joinedCurrentList = currentList.join('');
    else joinedCurrentList = currentList.join(', ');

    return joinedCurrentList;
  };

  return (
    <Container index={index}>
      <FrontInformationContainer>
        <TopInformationContainer>
          <TitleInfoContainer>
            <TitleInfo>{title}</TitleInfo>
            {status === '상담중' && (
              <StatusInfo>
                <div className="status">상담중</div>
              </StatusInfo>
            )}
          </TitleInfoContainer>
          <ClientInfo>{client}</ClientInfo>
        </TopInformationContainer>
        <DueInfo>{due}까지 납기</DueInfo>
      </FrontInformationContainer>
      <BorderLine />
      <BottomInformationContainer>
        <SubInfoNameContainer>
          <SubInfoName>도면개수</SubInfoName>
          <SubInfoName>총 수량</SubInfoName>
          <SubInfoName>가공방식</SubInfoName>
          <SubInfoName>재료</SubInfoName>
        </SubInfoNameContainer>
        <SubInfoContainer>
          <SubInfo>{count.toLocaleString()}개</SubInfo>
          <SubInfo>{amount.toLocaleString()}개</SubInfo>
          <SubInfo>{checkCurrentElemNum(method)}</SubInfo>
          <SubInfo>{checkCurrentElemNum(material)}</SubInfo>
        </SubInfoContainer>
      </BottomInformationContainer>
      <ButtonContainer>
        <Button sort="seeButton">요청 내역 보기</Button>
        <Button sort="chatButton">채팅하기</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.article<ContainerType>`
  max-width: 366px;
  max-height: 356px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 16px;
  margin-bottom: 16px;
  padding: 24px 16px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;

  &:hover {
    border: 2px solid #2196f3;
  }

  ${({ index }) =>
    (index + 1) % 3 === 0 &&
    css`
      margin-right: 0;
      @media (max-width: 600px) {
        margin-right: 16px;
      } ;
    `}
`;

const FrontInformationContainer = styled.div`
  margin-bottom: 16px;
`;

const TopInformationContainer = styled.div`
  margin-bottom: 24px;
`;

const TitleInfoContainer = styled.div`
  min-width: 325px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleInfo = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #323d45;
`;

const StatusInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  background-color: #ffffff;
  border: 1px solid #ffa000;
  border-radius: 12px;

  & .status {
    font-size: 12px;
    line-height: 20px;
    color: #ffa000;
  }
`;

const ClientInfo = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;

const DueInfo = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #939fa5;
`;

const BorderLine = styled.div`
  width: 334px;
  border: 1px solid #e5e5e5;
`;

const BottomInformationContainer = styled.div`
  display: flex;

  margin-top: 32px;
`;

const SubInfoContainer = styled.div``;

const SubInfoNameContainer = styled(SubInfoContainer)`
  margin-right: 32px;
`;

const SubInfoName = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;

const SubInfo = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #323d45;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export default CardBoard;
