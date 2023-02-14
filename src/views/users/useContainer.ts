import { useCallback, useState } from 'react';

import useFetchList from '../../hooks/useFetchList';
import { UserType } from '../../types/user';

const useContainer = () => {
    const [isModalShown, setModalShown] = useState(false);
    
    const closeModal = useCallback(() => {
        setModalShown(false);
    }, []);
    
    const showModal = useCallback(() => {
        setModalShown(true);
    }, []);
    

    const [users, { removeFromList, addItem, isFetching }] = useFetchList<UserType>('/users');

    return {
        users,
        isFetching,
        isModalShown,
        showModal,
        closeModal,
        addUser: addItem as (data: Omit<UserType, 'id'>) => Promise<void>,
        removeUserById: removeFromList,
    };
};

export default useContainer;
