import { useCallback, useEffect, useState } from 'react';

import api from '../api';

export function useFetchList<T> (endpoint: string) {
    const [list, setList] = useState<T[]>([]);
    const [isFetching, setFetching] = useState<boolean>(false);

    const fetchList = useCallback(async () => {
        try {
            setFetching(true);
            const response = await api.get(`${endpoint}`);

            setList(response.data);
        } catch (e) {
            console.log(e);

            setList([]);
        } finally {
            setFetching(false);
        };
    }, [endpoint]);

    const addItem = useCallback(async (data: T) => {
        try {
            setFetching(true);

            const response = await api.post(`${endpoint}`, data);

            const newItem = response.data as T;

            setList((prevList) => [newItem, ...prevList]);
        } catch (e) {
            console.log(e);
        } finally {
            setFetching(false);
        };
    }, [setFetching, endpoint]);

    const removeFromList = useCallback(async (id: number) => {
        try {
            setFetching(true);

            const response = await api.delete(`${endpoint}/${id}`);

            if (response.data) {
                setList((prevList: any[]) => prevList.filter((el: { id: number }) => el.id !== id))
            }
        } catch (e) {
            console.log(e);
        } finally {
            setFetching(false);
        };
    }, [setList, setFetching, endpoint]);

    useEffect(() => {
        fetchList();
    }, [fetchList]);
    
    return [
        list,
        {
            isFetching,
            addItem,
            removeFromList,
        },
    ] as const;
};

export default useFetchList;
