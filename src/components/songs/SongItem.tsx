import * as React from "react";
import {Toast,InputItem} from 'antd-mobile';
import styles from './index.module.scss';
import {getHotList} from '../../api'
import {ChangeEvent} from "react";
const { useEffect ,useState } = React;
interface songItem  {
    first:string,
    iconType:number,
    second:number,
    third?:number//可选
}
export default function SongView (){
    const [songsList,setSongsList] = useState([]);
    //把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
    useEffect(() => {
       request()
    },[]);
    const request = () => {
        Toast.loading('加载中...')
        getHotList({}).then((res: any) => {
            let data = res.result;
            setSongsList(data.hots)
            Toast.hide()
        })
    }
    return <div>
        <InputItem clear placeholder="搜索歌词" >
            输入
        </InputItem>
        歌曲列表
        {
            songsList.map((item: songItem,index) => <p key = {index} className={styles["item-wrapper"]}>
                {item.first || '--'}
            </p>)
        }

    </div>
}