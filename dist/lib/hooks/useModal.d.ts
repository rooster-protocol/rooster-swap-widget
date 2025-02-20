interface ModalHookState {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}
export default function useModal({ isOpen }?: {
    isOpen?: boolean | undefined;
}): ModalHookState;
export {};
