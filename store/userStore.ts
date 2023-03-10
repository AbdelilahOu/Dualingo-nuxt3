import useCustomFetch from "~~/composables/useCustomFetch";
import type { UserGet, userState } from "../types";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: (): userState => {
    return {
      user: null,
    };
  },
  actions: {
    getUserData: async function () {
      const { id } = this.user;
      const res = await useCustomFetch<UserGet>("/api/user/" + id, {
        method: "GET",
      });
    },
  },
});
