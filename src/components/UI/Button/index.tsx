import classNames from 'classnames';

import { ButtonKinds, ButtonType } from './types';

import s from './styles.module.css';

const Button = ({ children, kind, ...rest }: ButtonType) => (
    <button
        className={classNames(
            s.button,
            kind === ButtonKinds.Primary && s.primary,
            kind === ButtonKinds.Secondary && s.secondary,
            kind === ButtonKinds.Danger && s.danger,
        )}
        {...rest}
    >
        {children}
    </button>
);

export default Button;