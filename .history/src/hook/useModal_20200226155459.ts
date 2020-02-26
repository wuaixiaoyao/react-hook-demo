/**
 * modal hook 复用逻辑
 */
import * as React from 'react';
const { useEffect, useState, useCallback } = React;

interface modalOptions {
  modalVisible: boolean,
	onCancelCb?: (() => void);
}
export function useModal (options: modalOptions) {
  const { modalVisible, onCancelCb } = options;
  const [ visible, setVisible ] = useState(modalVisible);

	useEffect(
		() => {
			setVisible(modalVisible);
		},[ modalVisible ]
	);

	const hideModal = useCallback(() => {
		setVisible(false);
		onCancelCb && onCancelCb();
	}, [onCancelCb])

	useEffect(
		() => {
			setVisible(modalVisible);
		},[ modalVisible ]
	);

	const showModal = () => {
		setVisible(true);
	}
  
  return {
    visible,
    showModal,
    hideModal
  }

}