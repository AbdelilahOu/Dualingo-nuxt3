import type { leagueState } from "../types";
import { defineStore } from "pinia";

export const useLeagueStore = defineStore("leagueStore", {
  state: (): leagueState => {
    return {
      leagueBoard: [
        {
          name: "abdelilah",
          xp: 12,
        },
        {
          name: "abdelilah",
          xp: 12,
        },
        {
          name: "abdelilah",
          xp: 12,
        },
        {
          name: "abdelilah",
          xp: 12,
        },
        {
          name: "abdelilah",
          xp: 12,
        },
        {
          name: "abdelilah",
          xp: 12,
        },
        {
          name: "abdelilah",
          xp: 12,
        },
        {
          name: "abdelilah",
          xp: 12,
        },
        {
          name: "abdelilah",
          xp: 12,
        },
      ],
    };
  },
  actions: {
    getLeagueBoard: async function (league: string) {},
  },
});
