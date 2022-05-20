import { request } from "./request";

const HOST = "https://api.jikan.moe/v4/top/anime";
const HOST_ANIME_ID = "https://api.jikan.moe/v4/anime";
const HOST_SEARCH = "https://api.jikan.moe/v4/anime?q=";

export const getItems = () => {
  return request(`${HOST}`);
};

export const getItem = (id) => {
  return request(`${HOST_ANIME_ID}/${id}`);
};

export const getSearch = (text) => {
  return request(`${HOST_SEARCH}${text}`);
};
