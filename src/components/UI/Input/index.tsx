import React from 'react';

import s from './styles.module.css';

const Input = ({ children, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input className={s.input} {...rest}>
        {children}
    </input>
);

export default Input;