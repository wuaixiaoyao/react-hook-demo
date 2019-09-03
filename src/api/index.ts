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






