/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description:
*/
import * as React from 'react';
import {Toast} from 'antd-mobile'
import {getBannerList} from '../../api'
import styles from './index.module.scss'
const { useState, useCallback ,useEffect} = React;
type bannerItem = {
    pic:string,
    titleColor:'red'|'blue'
}
export default function Banner () {
    const [bannerList,setBannerList] = useState([])
    useEffect( () => {
        getList()
    },[]);
    const getList = async () => {
        Toast.loading('加载中...')
        let res = await getBannerList({type:2});
        let {banners:bannerList} = res;
        setBannerList(bannerList);
        Toast.hide()
    }
    return <div>
        {bannerList.map((item:bannerItem,index:number) =>{
            return <p key={index} >
                <img className={styles["img-item"]} src = {item.pic}/>
            </p>
        })}

    </div>
}