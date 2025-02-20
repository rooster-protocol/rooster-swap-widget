import { useState } from "react";

interface ModalHookState {
  // Modal open state
  isOpen: boolean;

  // Opens modal
  openModal: () => void;

  // Closes modal
  closeModal: () => void;
}

export default function useModal({ isOpen = false } = {}): ModalHookState {
  const [open, setOpen] = useState(isOpen);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return { isOpen: open, openModal, closeModal };
}
