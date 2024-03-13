import http from "@/utils/query/http";

export default {
  getUserInfo: (data = {}) => {
        return http.get("/docs/Web/API/URL_API", data);
  },
};
