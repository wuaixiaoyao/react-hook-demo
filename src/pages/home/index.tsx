/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description: home
*/
import * as React from 'react';
import { Toast } from 'antd-mobile';
import Banner from './banner';
const { useEffect } = React;

export default function Index() {
	interface Foo {
		bar: number;
		name: string;
	}
	const foo = {} as Foo;
	foo.bar = 123;
	foo.name = 'test';

	useEffect(() => {}, []);
	return (
		<div>
			<h2>首页</h2>
			<p>
				<div>
					<input type="file" accept="image/*" multiple />
				</div>
			</p>
			<Banner />
		</div>
	);
}
