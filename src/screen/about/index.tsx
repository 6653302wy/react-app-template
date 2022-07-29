import { FunctionComponent, useState } from 'react';
import { Modal } from '../../components/Modal';
import styles from './styles.module.css';

const Tips: FunctionComponent<{ onCloseHdr: () => void }> = ({ onCloseHdr }) => {
  return (
    <Modal
      onClose={onCloseHdr}
      wrapClass={styles.withdrawModal}
      wrap={<div className={styles.popWrap}>this is a modal</div>}
    />
  );
};

export const About: FunctionComponent = () => {
  const [showAlert, setShowAlert] = useState(false);

  const onBtnClick = () => {
    setShowAlert(true);
  };

  return (
    <>
      <div>
        <h1>this is About page</h1>
        <button className={styles.btn} onClick={onBtnClick}>
          click me
        </button>
      </div>
      {showAlert && <Tips onCloseHdr={() => setShowAlert(false)} />}
    </>
  );
};
