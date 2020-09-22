/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description:
 */
import * as React from 'react';
import { Toast } from 'antd-mobile';
import styled from 'styled-components';
import { Item } from '../../components/banner/components';
import Carousel from '../../components/banner/index';
import { getBannerList } from '../../api';
import styles from './index.module.scss';
const { useState, useCallback, useEffect } = React;

type bannerItem = {
  pic: string;
  titleColor: 'red' | 'blue';
};

interface IProps {
  ref: any;
}
const BannerWrapper = styled.div`
  background: #cecece;
`;
export default function Banner(props: IProps) {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    Toast.loading('加载中...');
    let res = await getBannerList({ type: 2 });
    let { banners: bannerList } = res;
    setBannerList(bannerList);
    Toast.hide();
  };

  return (
    <BannerWrapper>
      <Carousel title="Carousel">
        {bannerList.map((item: bannerItem, index: number) => {
          return <Item key={index} img={item.pic} />;
        })}
      </Carousel>
    </BannerWrapper>
  );
}
