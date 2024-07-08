import { create } from 'zustand'

type NewCategorySheet = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useNewCategory = create<NewCategorySheet>(set => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))