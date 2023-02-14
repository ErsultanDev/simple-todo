import { ModalProps } from './types';

import s from './styles.module.css';

const Modal = ({ isShown, closeModal, children }: ModalProps) => isShown ? (
    <div className={s.modal} onClick={closeModal}>
        <div className={s.container} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
) : null;

export default Modal;