import { create } from "zustand";
const useModalStore = create((set) => ({
  isOpen: false,
  project: null,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setProject: (project) => set({ project }),
  reset: () => set({ isOpen: false, project: "" }),
}));
export default useModalStore;
