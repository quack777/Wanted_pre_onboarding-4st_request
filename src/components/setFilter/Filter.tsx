import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  addMaterial,
  addMethod,
  clearMaterial,
  clearMethod,
  deleteMaterial,
  deleteMethod,
} from '../../modules/filter/actions';

const methods = [
  { id: 0, name: '밀링', select: false },
  { id: 1, name: '선반', select: false },
];

const materials = [
  { id: 0, name: '알루미늄', select: false },
  { id: 1, name: '탄소강', select: false },
  { id: 2, name: '구리', select: false },
  { id: 3, name: '스테인리스강', select: false },
  { id: 4, name: '강철', select: false },
];

type Dropbox = { methodsUl: boolean; materialsUl: boolean };

const Filter: FC = () => {
  const [checkedMethods, SetCheckedMethods] = useState<string[]>([]);
  const [checkedMaterials, SetCheckedMaterials] = useState<string[]>([]);
  const [dropboxIsActive, SetDropboxIsActive] = useState<Dropbox>({ methodsUl: false, materialsUl: false });

  const dispatch = useDispatch();

  const updateCheckMethod = useCallback((method: string) => dispatch(addMethod({ method })), [dispatch]);
  const removeCheckMethod = useCallback((method: string) => dispatch(deleteMethod({ method })), [dispatch]);
  const clearCheckMethod = useCallback(() => dispatch(clearMethod()), [dispatch]);

  const updateCheckMaterial = useCallback((material: string) => dispatch(addMaterial({ material })), [dispatch]);
  const removeCheckMaterial = useCallback((material: string) => dispatch(deleteMaterial({ material })), [dispatch]);
  const clearCheckMaterial = useCallback(() => dispatch(clearMaterial()), [dispatch]);

  const handleChangeMethod = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked, name } = e.target;
    if (checked) {
      SetCheckedMethods([...checkedMethods, name]);
      updateCheckMethod(name);
    } else {
      SetCheckedMethods(checkedMethods.filter((method) => method !== name));
      removeCheckMethod(name);
    }
  };

  const handleChangeMaterial = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked, name } = e.target;
    if (checked) {
      SetCheckedMaterials([...checkedMaterials, name]);
      updateCheckMaterial(name);
    } else {
      SetCheckedMaterials(checkedMaterials.filter((material) => material !== name));
      removeCheckMaterial(name);
    }
  };

  const clickOnResetChecked = (): void => {
    SetCheckedMethods([]);
    SetCheckedMaterials([]);
    clearCheckMethod();
    clearCheckMaterial();
  };

  const showMethodBox = (): void => {
    SetDropboxIsActive({ ...dropboxIsActive, methodsUl: true });
  };

  const hiddenMethodBox = (): void => {
    SetDropboxIsActive({ ...dropboxIsActive, methodsUl: false });
  };

  const showMaterialBox = (): void => {
    SetDropboxIsActive({ ...dropboxIsActive, materialsUl: true });
  };

  const hiddenMaterialBox = (): void => {
    SetDropboxIsActive({ ...dropboxIsActive, materialsUl: false });
  };

  return (
    <FilteringLayout>
      <FirstSection onMouseEnter={showMethodBox} onMouseLeave={hiddenMethodBox}>
        <DropdownBtn type="button" isChecked={checkedMethods.length > 0}>
          <p>가공방식{checkedMethods.length > 0 && <span>({checkedMethods.length})</span>}</p>
          {checkedMethods.length > 0 ? (
            <img alt="arrowCheckDropDown" src="Image/icon_arrowDropDownCheck.png" />
          ) : (
            <img alt="arrowDropDwon" src="Image/icon_arrowdropdown.png" />
          )}
        </DropdownBtn>
        <BlinkBox />
        {dropboxIsActive.methodsUl && (
          <UlBox>
            {methods.map((method) => {
              return (
                <li key={method.id}>
                  <input
                    type="checkbox"
                    name={method.name}
                    onChange={(e) => handleChangeMethod(e)}
                    checked={!!checkedMethods.includes(method.name)}
                  />
                  {method.name}
                </li>
              );
            })}
          </UlBox>
        )}
      </FirstSection>

      <SecondSection onMouseEnter={showMaterialBox} onMouseLeave={hiddenMaterialBox}>
        <DropdownBtn type="button" style={{ width: '78px' }} isChecked={checkedMaterials.length > 0}>
          <p>재료{checkedMaterials.length > 0 && <span>({checkedMaterials.length})</span>}</p>
          {checkedMaterials.length > 0 ? (
            <img alt="arrowCheckDropDown" src="Image/icon_arrowDropDownCheck.png" />
          ) : (
            <img alt="arrowDropDown" src="Image/icon_arrowdropdown.png" />
          )}
        </DropdownBtn>
        <BlinkBox />
        {dropboxIsActive.materialsUl && (
          <UlBox>
            {materials.map((material) => {
              return (
                <li key={material.id}>
                  <input
                    type="checkbox"
                    name={material.name}
                    onChange={(e) => handleChangeMaterial(e)}
                    checked={!!checkedMaterials.includes(material.name)}
                  />
                  {material.name}
                </li>
              );
            })}
          </UlBox>
        )}
      </SecondSection>

      {(checkedMethods.length > 0 || checkedMaterials.length > 0) && (
        <ThirdSection>
          <RefreshBtn type="button" onClick={clickOnResetChecked}>
            <img alt="filltering_reset" src="Image/icon_refresh.png" />
            <p>필터링 리셋</p>
          </RefreshBtn>
        </ThirdSection>
      )}
    </FilteringLayout>
  );
};
const BlinkBox = styled.div`
  width: 100px;
  height: 5px;
`;
const FilteringLayout = styled.div`
  display: flex;
`;

const FirstSection = styled.section`
  width: 102px;
`;

const SecondSection = styled.section`
  width: 80px;
`;

const ThirdSection = styled.section`
  height: 32px;
  margin-left: 40px;
  position: relative;
  bottom: 3px;
  z-index: 1;
`;

const DropdownBtn = styled.button`
  width: 98px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #939fa5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ isChecked }: { isChecked?: boolean }) => (isChecked ? '#1565C0' : '#ffffff')};
  color: ${({ isChecked }: { isChecked?: boolean }) => (isChecked ? '#ffffff' : '#323D45')};
  cursor: pointer;
  &:hover {
    border: 1px solid #2196f3;
  }
  & > p,
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
  }
`;

const UlBox = styled.ul`
  position: absolute;
  background: #ffffff;
  border: 1px solid #939fa5;
  border-radius: 4px;
  margin: 0;
  padding-left: 12px;
  padding-right: 29px;
  padding-top: 17px;
  padding-bottom: 17px;
  z-index: 2;
  & > li {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
  & input {
    width: 18px;
    height: 18px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const RefreshBtn = styled.button`
  position: relative;
  right: 20px;
  background: #ffffff;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  cursor: pointer;
  & > img {
    margin-right: 12px;
  }
  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #2196f3;
  }
`;

export default Filter;
