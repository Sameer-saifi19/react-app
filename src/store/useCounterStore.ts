import { create } from "zustand";

interface CounterState {
  count: number;
  handleAdd: () => void;
}

const useCounter = create<CounterState>((set) => {
  return {
    count: 5000,
    handleAdd: () => set((state) => ({
        count: state.count + 1
    }))
  };
});

export default useCounter;