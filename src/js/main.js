import NavMenuTrigger from "./navMenu.js";
import APIAdapter from "./api.js";

const api = new APIAdapter();
const movies = await api.fetchMovies();
const menu = await api.fetchMenu();

new NavMenuTrigger();



