import { create } from "zustand";

type OpenCategory = {
    id?: string;
    isOpen: boolean;
    onOpen: (id: string) => void;
    onClose: () => void;
};

export const useOpenCategory = create<OpenCategory>((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: (id) => set({ isOpen: true, id }),
    onClose: () => set({ isOpen: false, id: undefined }),
}));
