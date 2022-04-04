import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const customerStore = defineStore({
  id: "customers",
  state: () => ({
    customers: useLocalStorage("customers", {
      1: {
        firstName: "John",
        lastName: "Collingwood",
        note: "This was my very first customer",
      },
      2: {
        firstName: "Barney",
        lastName: "Lomax",
        note: "This was my second customer",
      },
      3: {
        firstName: "Roman",
        lastName: "Howard",
        note: "This is currently my 3rd and hopefully not the last customer",
      },
    }),
    customerId: useLocalStorage("currentId", 4),
  }),
});
