import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
    persist(
        (set) => ({
            username: null,
            setUsername: (username) => set({ username }),
            theme:"light",
            setTheme: (theme) => set({ theme }),
        }),
        {
            name: "user-storage",
            getStorage: () => localStorage,
        }
    )
)

export default useUserStore
