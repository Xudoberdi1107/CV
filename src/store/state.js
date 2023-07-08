import { create } from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware"
export const useBearStore = create(
    persist(
        (set) => ({
            bears: '',
            count: 0,
            jast: ()=> set((state)=>({logo : state.logo})),
            increse: () => set((state) => ({ count: state.count + 1 })),
            increasePopulation: () => set((state) => ({ bears: state.bears })),
        }),
        {
            name: "count",
            storage: createJSONStorage(() => localStorage)
        }
    )
)










