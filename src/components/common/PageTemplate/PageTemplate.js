import React from 'react'
import styles from './PageTemplate.scss'
import classNames from 'classnames/bind';
import Header from '../Header';

const cx = classNames.bind(styles);

function PageTemplate() {
  return (
    <div className={cx('page-template')}>
      <Header />
    </div>
  )
}

export default PageTemplate
