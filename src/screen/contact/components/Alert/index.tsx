import { FunctionComponent } from 'react';
import { Mask } from '../../../../components/Mask';
import { Outside } from '../../../../components/Outside';
import styles from './styles.module.css';

interface Props {
  onClose: () => void;
}
export const Alert: FunctionComponent<Props> = ({ onClose }) => {
  return (
    <Mask position="center">
      <Outside clickCallback={onClose}>
        <div className={styles.modal}>this is a mask & outside modal</div>
      </Outside>
    </Mask>
  );
};
