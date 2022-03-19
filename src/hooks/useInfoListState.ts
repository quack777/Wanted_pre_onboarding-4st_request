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
      setSortedInfoList(result);
    };
    getData();
  }, []);

  const includeMethod = (listMethod: string[]) => {
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
    if (method.filter((x) => listMethod.includes(x)).length > 0) {
      return true;
    }
    return false;
  };

  const includeMaterial = (listMaterial: string[]) => {
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
    if (material.filter((x) => listMaterial.includes(x)).length > 0) {
      return true;
    }
    return false;
  };

  const checkMethodInfoList = () => {
    if (method.length > 0) {
      if (material.length > 0) {
        setSortedInfoList(infoList.filter((list) => includeMaterial(list.material)).filter((list) => includeMethod(list.method)))
        // setSortedInfoList(sortedInfoList.filter((list) => includeMethod(list.method)));
      } else {
        setSortedInfoList(infoList.filter((list) => includeMethod(list.method)));
      }
    } else if (status) {
      checkStatusInfoList();
    } else if (material.length > 0) {
      checkMaterialInfoList();
    } else {
      setSortedInfoList(infoList);
    }
  };

  const checkMaterialInfoList = () => {
    if (material.length > 0) {
      if (method.length > 0) {
        setSortedInfoList(infoList.filter((list) => includeMethod(list.method)).filter((list) => includeMaterial(list.material)))
        // setSortedInfoList(sortedInfoList.filter((list) => includeMaterial(list.material)));
      } else {
        setSortedInfoList(infoList.filter((list) => includeMaterial(list.material)));
      }
    } else if (status) {
      console.log("상담 중이 선택되어있음")
      checkStatusInfoList();
    } else if (method.length > 0){
      checkMethodInfoList();
    } else {
      setSortedInfoList(infoList);
    }
  };

  const checkStatusInfoList = () => {
    if (status) {
      if (method.length > 0 || material.length > 0) {
        setSortedInfoList(sortedInfoList.filter((list) => list.status === '상담중'));
      } else {
        setSortedInfoList(infoList.filter((list) => list.status === '상담중'));
      }
    } else if (method.length > 0 || material.length > 0) {
      checkMethodInfoList();
      checkMaterialInfoList();
    } else {
      setSortedInfoList(infoList);
    }
  };

  useEffect(() => {
    checkMethodInfoList();
  }, [method]);

  useEffect(() => {
    checkMaterialInfoList();
  }, [material]);

  useEffect(() => {
    checkStatusInfoList();
  }, [status]);

  return { infoList, sortedInfoList, isEmpty };
};

export default useInfoListState;
