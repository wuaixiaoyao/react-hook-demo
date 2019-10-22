/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description:
*/
import {http} from '../utils';
export const getHotList = (params:object) => {
    return http.get('/search/hot',params)
}

export const getBannerList = (params:object) => {
    return http.get('/banner',params)
}

export const getCode = (params:object) => {
    return http.get('/captcha/sent',params)
}

export const pwdLogin = (params:object) => {
    //密码登录
    return http.get('/login/cellphone',params)
}







