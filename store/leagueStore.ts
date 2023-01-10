import type { leagueState } from "../types";
import { defineStore } from "pinia";

export const useLeagueStore = defineStore("leagueStore", {
  state: (): leagueState => {
    return {
      leagueBoard: [],
    };
  },
  actions: {
    getLeagueBoard: async function (league: string) {},
  },
});
