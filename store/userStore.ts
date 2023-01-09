import type { userState } from "../types";

export const useUserStore = defineStore("userStore", {
  state: (): userState => {
    return {
      user: null,
    };
  },
});
