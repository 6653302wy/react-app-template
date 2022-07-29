import { FunctionComponent, ReactElement } from 'react';
import { Mask } from '../Mask';
import { Outside } from '../Outside';

interface Props {
  onClose: () => void;
  wrap: ReactElement;
  wrapClass?: StyleSheet;
}
export const Modal: FunctionComponent<Props> = ({ wrap, onClose }) => {
  return (
    <Mask position="center">
      <Outside clickCallback={onClose}>{wrap}</Outside>
    </Mask>
  );
};
