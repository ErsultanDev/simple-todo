export interface ModalProps {
    isShown: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}