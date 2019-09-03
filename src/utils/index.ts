/**
 * @author wuaixiaoyao
 * @date 2019/8/29
 * @Description:
*/
import Http from './request';
export const http = new Http('/api');




function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}
console.log("point",new Point(1,2))

const getStringLength = (string:string):number => {
    let len = 0;
    for (let  i = 0; i < string.length; i++) {
        if (string[i].match(/[^\x00-\xff]/ig) !== null) //全角
            len += 2; //如果是全角，占用两个字节
        else
            len += 1; //半角占用一个字节
    }
    return len;
}
console.log(getStringLength('常见'),'长度')