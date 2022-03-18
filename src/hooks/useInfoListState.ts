import React, { useState, useEffect } from 'react';
import type { InfoType } from '../types/components/infolist';
import type { OptionalProps } from '../types/props/optionalProps';
import * as infoListAPI from '../api/getInforList';

const useInfoListState = ({ method, material, status }: OptionalProps) => {
  const [infoList, setInfoList] = useState<InfoType[]>([]);
  const [sortedInfoList, setSortedInfoList] = useState<InfoType[]>([]);

  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const result: InfoType[] = await infoListAPI.getInfoList();
      setInfoList(result);
    };
    getData();
  }, []);

  const includeMethod = (listMethod: string[]) => {
    console.log(listMethod);
    if (method.length > 0) {
      if (listMethod.length > method.length) {
        if (listMethod.filter((x) => method.includes(x)).length > 0) {
          return true;
        }
        return false;
      }
      if (listMethod.length < method.length) {
        if (method.filter((x) => listMethod.includes(x)).length > 0) {
          return true;
        }
        return false;
      }
      // return JSON.stringify(listMethod) === JSON.stringify(method);
      if (method.filter((x) => listMethod.includes(x)).length > 0) {
        return true;
      }
      return false;
    }
    return true;
  };

  const includeMaterial = (listMaterial: string[]) => {
    console.log(listMaterial);
    if (material.length > 0) {
      if (listMaterial.length > material.length) {
        if (listMaterial.filter((x) => material.includes(x)).length > 0) {
          return true;
        }
        return false;
      }
      if (listMaterial.length < material.length) {
        if (material.filter((x) => listMaterial.includes(x)).length > 0) {
          return true;
        }
        return false;
      }
      // return JSON.stringify(listMaterial) === JSON.stringify(material);
      if (material.filter((x) => listMaterial.includes(x)).length > 0) {
        return true;
      }
      return false;
    }
    return true;
  };

  const checkMethodInfoList = () => {
    console.log([...infoList].filter((list) => includeMethod(list.method)));
    setSortedInfoList(infoList.filter((list) => includeMethod(list.method)));
  };

  const checkMaterialInfoList = () => {
    console.log([...infoList].filter((list) => includeMaterial(list.material)));
    setSortedInfoList(infoList.filter((list) => includeMaterial(list.material)));
  };

  useEffect(() => {
    checkMethodInfoList();
  }, [method]);

  useEffect(() => {
    checkMaterialInfoList();
  }, [material]);

  /* const checkSortedInfoList = (
    currentSort: string[],
    prevSort: string[],
    currentSortName: string,
    prevSortName: string,
  ): void => {
    const currentSelectedSortNum: number = currentSort.length;
    const prevSelectedSortNum: number = prevSort.length;

    if (currentSelectedSortNum !== 0) {
      let filteredInfoList = sortedInfoList.slice();

      infoList.forEach((info: InfoType) => {
        let isSorted = false;
        for (let i = 0; i < currentSelectedSortNum; i++) {
          if (info[currentSortName].includes(currentSort[i])) {
            isSorted = true;
            break;
          }
        }

        const currentStoredInfoID = filteredInfoList.map((info) => {
          return info.id;
        });

        if (isSorted && !currentStoredInfoID.includes(info.id)) {
          filteredInfoList.push(info);
        }

        if (!isSorted && currentStoredInfoID.includes(info.id)) {
          filteredInfoList = filteredInfoList.filter((storedInfo) => storedInfo.id !== info.id);
        }
      });

      setSortedInfoList(filteredInfoList);
    } else if (prevSelectedSortNum !== 0) {
      const filteredInfoList = sortedInfoList.slice();

      infoList.forEach((info: InfoType) => {
        let isSorted = false;
        for (let i = 0; i < prevSelectedSortNum; i++) {
          if (info[prevSortName].includes(prevSort[i])) isSorted = true;
          else {
            isSorted = false;
            break;
          }
        }

        const currentStoredInfoID = filteredInfoList.map((info) => {
          return info.id;
        });

        if (isSorted && !currentStoredInfoID.includes(info.id)) {
          filteredInfoList.push(info);
        }
      });

      setSortedInfoList(filteredInfoList);
    } else setSortedInfoList([]);
  };

  useEffect(() => {
    checkSortedInfoList(method, material, 'method', 'material');
  }, [method]);

  useEffect(() => {
    checkSortedInfoList(material, method, 'material', 'method');
  }, [material]);

  useEffect(() => {
    if (status) {
      const currentInfoList = sortedInfoList.length === 0 ? infoList : sortedInfoList;

      const filteredInfoList: InfoType[] = currentInfoList.filter((info: InfoType) => info.status === '상담중');
      setSortedInfoList(filteredInfoList);
    } else {
      checkSortedInfoList(method, material, 'method', 'material');
      checkSortedInfoList(material, method, 'material', 'method');
    }
  }, [status]);

  useEffect(() => {
    if (!isEmpty) return;
    const currentInfoListNum = sortedInfoList.length;

    if (currentInfoListNum === 0) setIsEmpty(true);
    else setIsEmpty(false);
  }, [sortedInfoList]); */

  return { infoList, sortedInfoList, isEmpty };
};

export default useInfoListState;
