export default class APIAdapter {

    async fetchMovies() {
        const res = await fetch("./src/data/movies.json");
        const data = await res.json();
        return data.movies;
    }

    async fetchMenu() {
        const res = await fetch("./src/data/menu.json");
        const data = await res.json();
        return data.food;
    }
}


