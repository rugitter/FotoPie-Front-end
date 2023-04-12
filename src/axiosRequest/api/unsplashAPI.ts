import axiosInstance from "../index";

export const getRandomPhoto = () => {
  return axiosInstance({
    url: `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    method: "get",
  });
};
