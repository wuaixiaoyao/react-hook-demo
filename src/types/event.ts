/**
 * @author wuaixiaoyao
 * @date 2019/9/9
 * @Description:事件接口
*/
import { MouseEvent, ChangeEvent } from 'react';

export interface ClickProps {
	onClick(event: MouseEvent<HTMLDivElement>): void;
}

export interface ChangeProps {
	onClick(event: ChangeEvent<HTMLSelectElement>): void;
}
