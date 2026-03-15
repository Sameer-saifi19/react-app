// stores/user-store.ts
import { create } from "zustand";

type User = {
  id: string;
  email: string;
};

type UserStore = {
  user: User | null;
  loading: boolean;
  error: string | null;
  signup: (email: string, password: string) => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  loading: false,
  error: null,

  signup: async (email, password) => {
    try {
      set({ loading: true, error: null });

      const res = await fetch("http://localhost:8000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      set({
        user: data.user,
        loading: false
      });

    } catch (err: any) {
      set({
        error: err.message,
        loading: false
      });
    }
  }
}));