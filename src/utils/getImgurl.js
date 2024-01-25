export const getMovieImgUrl = (name) => {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url);
};
