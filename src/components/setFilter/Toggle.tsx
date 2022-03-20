import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { isToggleOn } from '../../modules/filter/actions';

const Toggle = () => {
  const dispatch = useDispatch();
  const isToggleHanddle = useCallback(() => dispatch(isToggleOn()), [dispatch]);
  const status = useSelector(({ toggle }: RootState) => toggle.isConsulting);

  const handleClickToggle = () => {
    isToggleHanddle();
  };

  return (
    <ToggleBox>
      {status ? (
        <button type="submit" onClick={handleClickToggle}>
          <img alt="toggleOn" src="Image/toggle_on.png" />
        </button>
      ) : (
        <button type="submit" onClick={handleClickToggle}>
          <img alt="toggleOff" src="Image/toggle_off.png" />
        </button>
      )}
      <p>상담 중인 요청만 보기</p>
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
  & > button {
    border: none;
    background: #ffffff;
    width: 37px;
    height: 20px;
    padding: 0;
    cursor: pointer;
  }
  & > p {
    position: relative;
    top: 1px;
    font-family: Noto Sans KR Medium;
    font-size: 14px;
    color: #323d45;
    margin: 0;
  }
`;
export default Toggle;
