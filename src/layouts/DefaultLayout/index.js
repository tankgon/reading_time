import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import Header from '~/layouts/components/Header';
import MusicControl from '~/layouts/components/MusicControl';
import SidebarLeft from '~/layouts/components/SidebarLeft';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', 'flex')}>
                <SidebarLeft />
                <div className={cx('main-container', 'flex-1')}>
                    <Header/>
                    <div className={cx('page')}>{children}</div>
                </div>
            </div>
            <MusicControl />
        </div>
    );
}

export default DefaultLayout;
