/**
 * @author wuaixiaoyao
 * @date 2019/10/22
 * @Description: test 类测试
 */

import { getHotList } from '../api';

import { first, second } from './decorator';

// import './nameSpaces'

class Test {
  constructor(x: number, y: number) {
    this.sum = x + y;
  }

  // 实例属性
  sum: number = 0;
  name: string = 'jack';
  ageNumber: number = 0;

  // 用object.defineProperty
  get age() {
    return this.ageNumber;
  }
  set age(value: number) {
    console.log(`setter${value}`);
    this.ageNumber = value;
  }

  // 公有属性---类和子类的实例可以访问
  @first() // 洋葱模型
  @second()
  say(name: string) {
    console.log('------------ say name-----');
    console.log(`我的name: ${name}`);
    console.log('--------------------------');
    //
    // this.praviteHide();
    // this.protectedFn();
  }

  // 私有属性 - 外部实例不可以访问 只能在类内部访问  不能在声明它的类的外部访问
  private praviteHide() {
		this.protectedFn();
	}

  // 受保护属性 - 外部实例不可以访问 只能在类和子类内部访问
  protected protectedFn() {
    console.log('父类执行受保护方法');
  }

  // 公开属性
  public publiceHello(word: any) {
    console.log('------------publiceHello-----------');
    console.log(`你好 ${word}`);
  }

  // 静态属性、方法
  static fn() {
    //
    console.log('------------静态方法执行');
  }
}

// 静态属性
Test.fn();

// 类调用私有属性

const test1 = new Test(1, 2);
test1.say('test1');
console.log(test1, 'test1');

//不能使用私有属性
// test1.praviteHide 私有属性只有父类可以用
test1.publiceHello('publiceHello-----12233');
// 子类

class SonTest extends Test {
  constructor(x: number, y: number) {
    super(x, y);
  }
  protected sonProtectedFn() {
    super.protectedFn();
    console.log('子类继承受保护方法');
  }
  // @override() 覆盖父类的受保护方法
  protectedFn() {
    console.log('-----------子类执行受保护方法------');
  }
  // 执行受保护方法
  handleSonProtectedFn() {
    this.protectedFn();
    // this.sonProtectedFn();
  }
}

console.log('子类', SonTest);
let sonTest1 = new SonTest(2, 5);
sonTest1.say('sonTest1');
sonTest1.publiceHello('我是子类实例 sontest1');
console.log('sonTest1', sonTest1);
sonTest1.age = 20;
console.log(sonTest1.age, 'sonTest1.age');
console.log('-------------执行受保护方法---------------------');
console.log(sonTest1.handleSonProtectedFn())

/*-----------------------------*/
interface IPriceData {
  /** 标识 */
  cbf: string;
  /** id */
  id: string;
  /** 市场价格 */
  m: string;
  /** 后台价 */
  op: string;
  /** 前台价 */
  p: string;
}

// 将IPriceData塞进数组里
type IPriceDataArray = IPriceData[];
function getPrice() {
  // Promise的泛型参数使用了IPriceDataArray类型，then里面返回的数据就是IPriceDataArray类型
  return new Promise<IPriceDataArray>((resolve, reject) => {
    resolve([
			{
				cbf: '1',
				/** id */
				id: '1',
				/** 市场价格 */
				m: '1',
				/** 后台价 */
				op: '1',
				/** 前台价 */
				p: '1'
			}
		]);
    console.log('resolve 后面的 打印 price------------');
    // getHotList({name:1}).then(data => {
    //     resolve(data)
    // },err => {
    //     reject()
    // })
  });
}
getPrice().then((data) => {
  let cbf = data[0].cbf;
  //
});

type years = number[];
let yearsss: years = [4, 5, 6, 6];
console.log(yearsss);

/**
 * 单例模式
 */
class Singleton {
  name: string;
  // 只能类内部访问
  private static instance: Singleton;

  constructor(name: string) {
    this.name = name;
  }

  // 类外部可以访问
  // 单例模式

  static getInstance(name: string) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(name);
    }
    return Singleton.instance;
  }

  someMethod() {}

  say(word: string): void {
    console.log(`${this.name} ${word}`);
  }
}

let someThing = new Singleton('some');
console.log('someThing', someThing);

let instacne1 = Singleton.getInstance('instance one '); // do some thing with the instance
instacne1.say('------------我是第一个实例 say-----');
console.log('instance1', instacne1);
// instance1 Singleton {name: "instance one "}
console.log('-----------------------------');
let instacne2 = Singleton.getInstance('instance two ');
instacne2.say('------------我是第2个实例 say-----');
console.log('instance2', instacne2);
// instance2 Singleton {name: "instance one "}
