/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description: home
*/
import * as React from 'react';
import { Toast } from 'antd-mobile';
import Banner from './banner';
const { useEffect } = React;
export default function Index() {
    useEffect(() => {

    },[])
    return <div>
        <h2>
            首页
        </h2>
        <Banner/>
    </div>;
}