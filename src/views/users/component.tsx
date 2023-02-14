import Item from './Item/component';
import useContainer from './useContainer';
import { Button, Loader } from '../../components/UI';

import s from './styles.module.css';
import { ButtonKinds } from '../../components/UI/Button/types';
import ModalUserForm from './ModalUserForm';

const Users = () => {
    const {
        users,
        isFetching,
        isModalShown,
        addUser,
        showModal,
        closeModal,
        removeUserById,
    } = useContainer();

    return (
        <>
            <ModalUserForm closeModal={closeModal} addUser={addUser} isShown={isModalShown} />
            <div>
                <div className={s.headerRow}>
                    <h1>Список пользователей</h1>
                    <Button
                        type="button"
                        kind={ButtonKinds.Primary}
                        onClick={showModal}
                    >
                        Добавить пользователя
                    </Button>
                </div>
                {isFetching ? (
                    <div className={s.loaderWrapper}>
                        <Loader />
                    </div>
                ) : (
                    <div className="usersList">
                        {
                            users.length ? (
                                <ul className={s.usersList}>
                                    {users.map(({ id, name, email, address }) => (
                                        <Item
                                            key={id}
                                            id={id}
                                            name={name}
                                            email={email}
                                            address={address}
                                            removeUserById={removeUserById}
                                        />
                                    ))}
                                </ul>
                            ) : (
                                <div className={s.emptyListText}>
                                    Список пуст
                                </div>
                            )
                        }
                    </div>
                )}
            </div>
        </>
    )
};

export default Users;
