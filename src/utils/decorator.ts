import { func } from 'prop-types';

/**
 * 装饰器
 */

/**
  * 装饰方法
  */

export function first() {
	console.log('first(): evaluated');
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		console.log('first(): called');
	};
}

export function second() {
	console.log('second(): evaluated');
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		console.log('second(): called');
	};
}
