export enum ButtonKinds {
    'Primary',
    'Secondary',
    'Danger',
};

export interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    kind: ButtonKinds;
}