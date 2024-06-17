import { create } from 'zustand'

type NewAccountSheet = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useNewAccount = create<NewAccountSheet>(set => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))