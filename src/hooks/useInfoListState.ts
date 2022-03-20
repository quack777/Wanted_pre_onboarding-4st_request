import { useState, useEffect } from 'react';
import type { InfoType } from '../types/components/infolist';
import type { OptionalProps } from '../types/props/optionalProps';
import * as infoListAPI from '../api/getInforList';

const useInfoListState = ({ method, material, status }: OptionalProps) => {
  const [infoList, setInfoList] = useState<InfoType[]>([]);
  const [sortedInfoList, setSortedInfoList] = useState<InfoType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result: InfoType[] = await infoListAPI.getInfoList();
      setInfoList(result);
      setSortedInfoList(result);
    };
    getData();
  }, []);

  const isIncludeMethod = (listMethod: string[]) => {
    if (method.filter((x) => listMethod.includes(x)).length > 0) {
      return true;
    }
    return false;
  };

  const isIncludeMaterial = (listMaterial: string[]) => {
    if (material.filter((x) => listMaterial.includes(x)).length > 0) {
      return true;
    }
    return false;
  };

  const checkedMethod = () => {
    if (method.length > 0) {
      if (status && material.length > 0) {
        setSortedInfoList(
          infoList.filter(
            (list) => list.status === '상담중' && isIncludeMethod(list.method) && isIncludeMaterial(list.material),
          ),
        );
      } else if (status) {
        setSortedInfoList(infoList.filter((list) => list.status === '상담중' && isIncludeMethod(list.method)));
      } else if (material.length > 0) {
        setSortedInfoList(infoList.filter((list) => isIncludeMaterial(list.material) && isIncludeMethod(list.method)));
      } else {
        setSortedInfoList(infoList.filter((list) => isIncludeMethod(list.method)));
      }
    } else if (status && material.length > 0) {
      checkedMaterial();
    } else if (status) {
      checkedStatus();
    } else if (material.length > 0) {
      checkedMaterial();
    } else {
      setSortedInfoList(infoList);
    }
  };

  const checkedMaterial = () => {
    if (material.length > 0) {
      if (status && method.length > 0) {
        setSortedInfoList(
          infoList.filter(
            (list) => list.status === '상담중' && isIncludeMaterial(list.material) && isIncludeMethod(list.method),
          ),
        );
      } else if (status) {
        setSortedInfoList(infoList.filter((list) => list.status === '상담중' && isIncludeMaterial(list.material)));
      } else if (method.length > 0) {
        setSortedInfoList(infoList.filter((list) => isIncludeMethod(list.method) && isIncludeMaterial(list.material)));
      } else {
        setSortedInfoList(infoList.filter((list) => isIncludeMaterial(list.material)));
      }
    } else if (status && method.length > 0) {
      checkedMethod();
    } else if (status) {
      checkedStatus();
    } else if (method.length > 0) {
      checkedMethod();
    } else {
      setSortedInfoList(infoList);
    }
  };

  const checkedStatus = () => {
    if (status) {
      if (method.length > 0 || material.length > 0) {
        setSortedInfoList(sortedInfoList.filter((list) => list.status === '상담중'));
      } else {
        setSortedInfoList(infoList.filter((list) => list.status === '상담중'));
      }
    } else if (method.length > 0 || material.length > 0) {
      checkedMethod();
      checkedMaterial();
    } else {
      setSortedInfoList(infoList);
    }
  };

  useEffect(() => {
    checkedMethod();
  }, [method]);

  useEffect(() => {
    checkedMaterial();
  }, [material]);

  useEffect(() => {
    checkedStatus();
  }, [status]);

  return { sortedInfoList };
};

export default useInfoListState;
