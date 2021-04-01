import { api } from "./api";

export default {
  getUsage() {
    return api.get("/usage");
  },
};
