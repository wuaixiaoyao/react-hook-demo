/**
 * @author wuaixiaoyao
 * @date 2019/10/22
 * @Description: test 类测试
*/


class Test {
    constructor(x:number,y:number){
        this.sum = x + y;
    }
    //实例属性
    sum:number = 0;
    name:string = 'jack';
    ageNumber:number = 0;
    //用 object.defineProperty
    get age () {
        return this.ageNumber
    }
    set age (value:number) {
        console.log(`setter${value}`)
        this.ageNumber  = value;
    }
    //公有属性---类和子类的实例可以访问
    say () {}
    public hello () {}



    //私有属性
    private hide(){}

    //受保护属性-子类中访问
    protected protectedFn (){
        console.log('父类执行受保护方法')
    }

    //静态属性、方法

    static fn () {
        console.log('静态方法执行')
    }


}

//静态属性
Test.fn();

const test1 = new Test(1,2);
console.log(test1,'test1');

//不能使用私有属性
//test1.hide //私有属性只有类可以用

//子类

class SonTest extends Test {
   constructor( x:number,y:number){
       super(x,y);
   }
   protected sonProtectedFn () {
       super.protectedFn()
       console.log('子类执行受保护方法')
   }
}
console.log('子类',SonTest);
let sonTest1 = new SonTest(2,5)

//


console.log('sonTest1',sonTest1);
sonTest1.age = 20;
console.log(sonTest1.age,'sonTest1.age');