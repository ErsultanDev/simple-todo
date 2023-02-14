import { ItemProps } from './types';
import Button from '../../../components/UI/Button';
import { ButtonKinds } from '../../../components/UI/Button/types';

import s from './styles.module.css';

const Item = ({ id, name, email, address, removeUserById }: ItemProps) => {
    return (
        <li className={s.item}>
            <div>
                <span className={s.dataLabel}>Имя: </span>
                <span>{name}</span>
            </div>
            <div>
                <span className={s.dataLabel}>Почта:</span>
                <span>{email}</span>
            </div>
            <div>
                <span className={s.dataLabel}>Город:</span>
                <span>{address.city}</span>
            </div>
            <Button
                type="button"
                kind={ButtonKinds.Danger}
                onClick={() => removeUserById(id)}
            >
                Удалить
            </Button>
        </li>
    )
};

export default Item;
