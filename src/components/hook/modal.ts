/**
 * modal hook 复用逻辑
 */
import * as React from 'react';
const { useEffect, useState, useCallback } = React;
interface modalProps {
  modalVisible: boolean,
	onCancelCb?: (() => void) | undefined;
}
export function useModal (props: modalProps) {
  const { modalVisible, onCancelCb } = props;
  const [ visible, setVisible ] = useState(props.modalVisible);

	useCallback(() => {

	},[ modalVisible ]);

	useEffect(
		() => {
			setVisible(modalVisible);
		},[ modalVisible ]
	);

	function showModal() {
		setVisible(true);
	}

	function hideModal() {
		setVisible(false);
		onCancelCb && onCancelCb();
  }
  
  return {
    visible,
    showModal,
    hideModal
  }

}