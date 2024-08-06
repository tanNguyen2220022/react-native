import apiClient from "./client";

const endpoint = "/open";

const open = () => apiClient.get(endpoint);

export default {
  open,
};
