import * as React from "react";
import  axios from 'axios';
import styles from './index.module.scss';

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
        axios.get('http://localhost:3888/search/hot').then(res => {
            let data = res.data;
            setSongsList(data.result.hots)
        },err => {
            throw new Error('请求失败')
        })
    }
    return <div>
        歌曲列表
        {
            songsList.map((item: songItem,index) => <p key = {index} className={styles["item-wrapper"]}>
                {item.first || '--'}
            </p>)
        }

    </div>
}