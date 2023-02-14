import { ModalUserFormProps } from './types';
import { Input, Modal, Button } from '../../../components/UI';
import { ButtonKinds } from '../../../components/UI/Button/types';

import s from './styles.module.css';
import useContainer from './useContainer';

const ModalUserForm = ({ addUser, closeModal, isShown }: ModalUserFormProps) => {
    const {
        name,
        city,
        email,
        handleReset,
        handleSubmit,
        handleInputName,
        handleInputCity,
        handleInputEmail,
    } = useContainer({ addUser, closeModal });

    return (
        <Modal isShown={isShown} closeModal={closeModal}>
            <h2>Данные пользователя</h2>
            <form className={s.form} onSubmit={handleSubmit}>
                <Input
                    value={name}
                    onChange={handleInputName}
                    type="text"
                    placeholder="Имя"
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleInputEmail}
                />
                <Input
                    type="text"
                    placeholder="Город"
                    value={city}
                    onChange={handleInputCity}
                />
                <div className={s.actions}>
                    <Button
                        type="submit"
                        kind={ButtonKinds.Primary}
                    >
                        Добавить
                    </Button>
                    <Button
                        type="reset"
                        kind={ButtonKinds.Secondary}
                        onClick={handleReset}
                    >
                        Отмена
                    </Button>
                </div>
            </form>
        </Modal>
    )
};

export default ModalUserForm;
