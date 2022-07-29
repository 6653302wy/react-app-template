import { useInterval } from 'ahooks';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { FunctionComponent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RouterType } from '../../router/App';
import logoBig from './assets/logo512.png';
import styles from './styles.module.css';

const getNowStr = () => {
  return dayjs().format('YYYY MM-DD HH:mm:ss');
};

const LogoImg = () => {
  return (
    <div className={styles.imgSvg}>
      <img className={classNames(styles.logo, styles.img)} src={logoBig} alt="" />
    </div>
  );
};

export const Index: FunctionComponent = () => {
  // navigate(-1) -1表示后退
  const navigate = useNavigate();
  const [now, setNow] = useState(getNowStr);

  const onContactClick = () => {
    navigate(RouterType.CONTACT);
  };

  const clear = useInterval(() => {
    setNow(getNowStr);
  }, 1000);

  useEffect(() => {
    return clear;
  }, [clear]);

  return (
    <div className={classNames(styles.app, styles.container)}>
      <h1 className={styles.title}>this is index page </h1>
      <h3>{now}</h3>
      <LogoImg />
      <div className={styles.btnCt}>
        <Link to={RouterType.ABOUT}>
          <button className={styles.btn}>about</button>
        </Link>
        <button className={styles.btn} onClick={onContactClick}>
          contact
        </button>
      </div>
    </div>
  );
};
