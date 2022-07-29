import { FunctionComponent, useState } from 'react';
import { Alert } from './components/Alert';
import styles from './styles.module.css';

export const Contact: FunctionComponent = () => {
  const [showAlert, setShowAlert] = useState(false);

  const onBtnClick = () => {
    setShowAlert(true);
  };

  return (
    <>
      <div>
        <h1>this is contact page</h1>
        <button className={styles.btn} onClick={onBtnClick}>
          click me
        </button>
      </div>
      {showAlert && <Alert onClose={() => setShowAlert(false)} />}
    </>
  );
};
