import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-kaito-music.vercel.app/api",
  transformResponse: [
    (response) => {
      // Do whatever you want to transform the response
      return response.data || response;
    },
  ],
});

export default instance;
