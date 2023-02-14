import { useState } from 'react';
import { ModalUserFormProps } from './types';

const useContainer = ({ addUser, closeModal }: Pick<ModalUserFormProps, 'addUser' | 'closeModal'>) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleInputCity = (e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value);

    const handleReset = () => {
        setName('');
        setEmail('');
        setCity('');
        closeModal();
    };

    const handleSubmit = () => {
        if (name && email && city) {
            addUser({
                name,
                email,
                address: {
                    city,
                },
            });

            handleReset();
        }
    };

    return {
        name,
        email,
        city,
        handleReset,
        handleSubmit,
        handleInputName,
        handleInputEmail,
        handleInputCity,
    };
};

export default useContainer;
