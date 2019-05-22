import React from 'react'
import styles from './PageTemplate.scss'
import classNames from 'classnames/bind';
import Header from '../Header';
// import Footer from '../Footer';
import Footer from '../Footer';

const cx = classNames.bind(styles);

function PageTemplate() {
  return (
    <div className={cx('page-template')}>
      <Header />
      {/* <Footer /> */}
      <Footer />
    </div>
  )
}

export default PageTemplate
