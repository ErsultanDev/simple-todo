import { UserType } from '../../../types/user';

export interface ItemProps extends UserType {
    removeUserById: (id: number) => void;
}