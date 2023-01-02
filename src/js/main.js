import NavMenuTrigger from "./navMenu.js";
import UrlHandlerClass from "./router.js";
import APIAdapter from "./api.js";

new NavMenuTrigger();
new UrlHandlerClass();

const api = new APIAdapter();
const movies = await api.fetchMovies();
const menu = await api.fetchMenu();





