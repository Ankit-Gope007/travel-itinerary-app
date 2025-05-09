import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
    persist(
        (set) => ({
            username: "Chhavi",
            setUsername: (username) => set({ username }),
            theme:"dark",
            setTheme: (theme) => set({ theme }),
            activeIcons: "home",
            setActiveIcons: (icons) => set({ activeIcons: icons }),
        }),
        {
            name: "user-storage",
            getStorage: () => localStorage,
        }
    )
)

export default useUserStore
