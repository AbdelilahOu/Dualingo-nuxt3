import { defineStore } from "pinia";

export const useCourseStore = defineStore("courseStore", {
  state: () => {
    return {
      course: null,
    };
  },
  actions: {
    getcourseData: async function () {},
  },
});
