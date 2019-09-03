/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description: 网络请求
*/
import Axios from 'axios';
import { Toast } from 'antd-mobile';
const axios = Axios.create();
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
type res = {
    code:number,
    result:any
}
type httpRes =  {
    data:{
        code:number,
        result:any
    },
}
axios.interceptors.request.use( (config: object):any => {

    return config
}, (err: object) => {
    Toast.offline('网络请求超时')
});
//响应拦截器
axios.interceptors.response.use((response:httpRes):any => {
    if(response && response.data){
        let {code} = response.data;
        if( code === 200){
            return response
        }
    }
},((error:object) => {
    return Promise.reject(error)
}))



class  Http{
    context:string;
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
    // put(api:string,id:string,params:object){
    //     return axios.put(`${this.context}${api}/${id}`, params).then(res => res.result)
    // }
    //
    // delete(api:string,params:object){
    //     return axios.delete(`${this.context}${api}`, {params}).then(res => res.result);
    // }
    // patch(api:string,id:string,params:object){
    //     return axios.patch(`${this.context}${api}/${id}`,params).then(res => res.result);
    // }

}
export default Http





