import { ModalProps } from '../../../components/UI/Modal/types';
import { UserType } from '../../../types/user';

export interface ModalUserFormProps extends Omit<ModalProps, 'children'> {
    addUser: (data: Omit<UserType, 'id'>) => Promise<void>;
}