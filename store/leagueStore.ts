import type { leagueState } from "../types";

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
