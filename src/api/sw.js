import { request } from "./request";

const HOST = "https://api.jikan.moe/v4/top/anime";
const HOST_ANIME_ID = "https://api.jikan.moe/v4/anime";

export const getItems = () => {
  return request(`${HOST}`);
};

export const getItem = (id) => {
  return request(`${HOST_ANIME_ID}/${id}`);
};
