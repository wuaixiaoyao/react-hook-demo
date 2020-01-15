/**
 * @author wuaixiaoyao
 * @date 2019/10/22
 * @Description: test 类测试
*/

import { getHotList } from '../api';

import { first, second } from './decorator';
class Test {
	constructor(x: number, y: number) {
		this.sum = x + y;
	}
	//实例属性
	sum: number = 0;
	name: string = 'jack';
	ageNumber: number = 0;
	//用 object.defineProperty
	get age() {
		return this.ageNumber;
	}
	set age(value: number) {
		console.log(`setter${value}`);
		this.ageNumber = value;
	}
	//公有属性---类和子类的实例可以访问
	@first() //洋葱模型
	@second()
	say(name: string) {
		console.log(name, '------------ say hello');
	}

	public hello() {}

	//私有属性
	private hide() {}

	//受保护属性-子类中访问
	protected protectedFn() {
		console.log('父类执行受保护方法');
	}

	//静态属性、方法

	static fn() {
		console.log('静态方法执行');
	}
}

//静态属性
Test.fn();

const test1 = new Test(1, 2);
test1.say('test1');
console.log(test1, 'test1');

//不能使用私有属性
//test1.hide //私有属性只有类可以用

//子类

class SonTest extends Test {
	constructor(x: number, y: number) {
		super(x, y);
	}
	protected sonProtectedFn() {
		super.protectedFn();
		console.log('子类执行受保护方法');
	}
	//@override()
	protectedFn() {
		console.log('子类执行受保护方法');
	}
}
console.log('子类', SonTest);
let sonTest1 = new SonTest(2, 5);
sonTest1.say('sonTest1');
//

console.log('sonTest1', sonTest1);
sonTest1.age = 20;
console.log(sonTest1.age, 'sonTest1.age');

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
		// getHotList({name:1}).then(data => {
		//     // debugger
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
let yearsss: years = [ 4, 5, 6, 6 ];
console.log(yearsss);
