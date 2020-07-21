/**
 * @author wuaixiaoyao
 * @date 2019/8/29
 * @Description:
 */
import Http from './request';
import { mewing } from './decorator';
let test = require('./test');
export const http = new Http('/api');
function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
    // descriptor.enumerable = true;
    // descriptor.writable = true;
  };
}
@mewing(10)
class Point {
  // 只读属性
  readonly sex: number;
  // 私有属性
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
    this.sex = 100;
  }
  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}
let pointInstance = new Point(1, 2);
console.log('point实例-------------', pointInstance);
console.log('point', pointInstance.x, pointInstance.y);

const getStringLength = (string: string): number => {
  let len = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[^\x00-\xff]/gi) !== null)
      //全角
      len += 2;
    //如果是全角，占用两个字节
    else len += 1; //半角占用一个字节
  }
  return len;
};
console.log(getStringLength('常见'), '长度');

//泛型接口
interface Result<T> {
  result: boolean;
  data: T;
}

interface Company {
  id: number;
  name: string;
}

const result: Result<Company> = {
  result: false,
  data: {
    id: 1,
    name: '小白',
  },
};
console.log('泛型result:', result);

// T 是一个类型变量 它是一种特殊的变量 只用于表示类型而不是值
function Generic<T>(anyParam: T): T {
  return anyParam;
}

// 完整写法
// Generic<string>(anyParam: "小白");    // 结果是  => "小白"
// // 推理性写法
// Generic(anyParam: "小白");           // 小白 为string 就可以推断出 前面的为<string>  所以你可以省略<string>

interface LengthWise {
  length: number;
}
// 这样子的话 我们就可以拿到 参数里面的length 了
// function Generic<T extends LengthWise>(anyParam: T): T {
//     console.log(anyParam.length);
// 	return anyParam;
// }
// // 因为 string 自己就有 length的属性
// Generic(anyParam: "小白");

// // 如果是number的话 它没有, 所以需要自己定义个length  来符合规范
// Generic(anyParam:{length: 1, other: 10});

@classDecator(4)
class Animal {
  constructor() {
    console.log('---Animal---');
    console.log('我是小动物');
  }
}

// 装饰类
function classDecator(num: number) {
  return function (target: any) {
    return class Dog {
      name: string;
      constructor() {
        let i = 0;
        while (i < num) {
          i++;
          console.log('我是dog , 汪汪汪！！！');
        }
        this.name = 'dog';
      }
    };
  };
}

let animal1 = new Animal();

console.log(animal1);

for (let i in animal1) {
  console.log(i);
}
