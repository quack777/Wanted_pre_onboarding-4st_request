import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { isToggleOn } from '../../modules/filter/actions';

const Toggle: FC = () => {
  const dispatch = useDispatch();
  const isToggleHanddle = useCallback(() => dispatch(isToggleOn()), [dispatch]);
  const isConsulting = useSelector(({ toggle }: RootState) => toggle.isConsulting);

  const handleClickToggle = () => {
    isToggleHanddle();
  };

  return (
    <ToggleBox>
      {isConsulting ? (
        <ToggleBtn type="submit" onClick={handleClickToggle}>
          <img alt="toggle_on" src="Image/toggle_on.png" />
        </ToggleBtn>
      ) : (
        <ToggleBtn type="submit" onClick={handleClickToggle}>
          <img alt="toggle_off" src="Image/toggle_off.png" />
        </ToggleBtn>
      )}
      <ToggleInfo>상담 중인 요청만 보기</ToggleInfo>
    </ToggleBox>
  );
};

const ToggleBox = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 175px;
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const ToggleBtn = styled.button`
  border: none;
  background: #ffffff;
  width: 37px;
  height: 20px;
  padding: 0;
  cursor: pointer;
`;

const ToggleInfo = styled.p`
  position: relative;
  top: 1px;
  font-family: Noto Sans KR Medium;
  font-size: 14px;
  color: #323d45;
  margin: 0;
`;

export default Toggle;
