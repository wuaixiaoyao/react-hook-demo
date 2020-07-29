import * as React from 'react';
import { Button } from 'antd-mobile';
import { useModal } from '../../hook/useModal';
import styles from './index.module.scss';
const { useEffect, useCallback } = React;
const { useState } = React;

type modalProps = {
    modalVisible: boolean;
    showFooter?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onCancelCb?: (() => void) | undefined;
};

export default function BaseModal(props: modalProps) {
    const { modalVisible, onCancelCb, showFooter } = props;
    const { visible, hideModal } = useModal({ modalVisible, onCancelCb });
    if (visible) {
        return (
            <div className={styles.base_modal_wrapper} onClick={hideModal}>
                <div className={styles.base_modal_content} onClick={(e) => e.stopPropagation()}>
                    {props.children}
                </div>
                {showFooter && (
                    <div className={styles.footer_wrapper}>
                        <Button type="primary" size="small">
                            确定
                        </Button>
                        <Button
                            type="primary"
                            onClick={hideModal}
                            size="small"
                            style={{ marginLeft: 100 }}
                        >
                            取消
                        </Button>
                    </div>
                )}
            </div>
        );
    } else {
        return null;
    }
}
