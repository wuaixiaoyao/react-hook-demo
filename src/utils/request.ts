/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description: 网络请求
*/
import Axios from 'axios';
import { Toast } from 'antd-mobile';
import * as NProgress from 'nprogress';
const axios = Axios.create();
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
type res = {
    code:number,
    result?:any
}
type httpRes =  {
    data:{
        code:number,
        result?:any
    },
}
axios.interceptors.request.use( (config: object):any => {
    NProgress.start();
    return config
}, (err: object) => {
    NProgress.done();
    Toast.offline('网络请求超时');
});
//响应拦截器
axios.interceptors.response.use((response:httpRes):any => {
    if(response && response.data){
        let {code} = response.data;
        if( code === 200){
            NProgress.done();
            return response
        }
    }
},((error:object) => {
    NProgress.done();
    return Promise.reject(error)
}))



class  Http{
    context:string;//这里声明的变量，是实例上的属性
    constructor(context:string){
        // 数据请求增加一个命名空间
        this.context = context;
    }
    get(api:string,params:object,config = {}){
        return axios.get(`${this.context}${api}`, {params, ...config}).then(res => res.data)
    }
    post(api:string,params:object){
        return axios.post(`${this.context}${api}`,params).then(res  => res.data)
    }
    put(api:string,id:string,params:object){
        return axios.put(`${this.context}${api}/${id}`, params).then(res => res.data)
    }
    delete(api:string,params:object){
        return axios.delete(`${this.context}${api}`, {params}).then(res => res.data);
    }
    patch(api:string,id:string,params:object){
        return axios.patch(`${this.context}${api}/${id}`,params).then(res => res.data);
    }
}
export default Http





