import { create } from "zustand";

interface DynamicNavScrollState {
  dynamicNavScroll: boolean;
  setDynamicNavScroll: (value: boolean) => void;
}
export const useDynamicNavScroll = create<DynamicNavScrollState>((set) => ({
  dynamicNavScroll: false,
  setDynamicNavScroll: (value: boolean) => set({ dynamicNavScroll: value }),
}));
