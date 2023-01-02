export default class UrlHandlerClass {
  constructor() {
    document.addEventListener("click", (e) => {
      const { target } = e;
      if (!target.matches("li a")) {
        return;
      }
      e.preventDefault();
      this.urlRoute();
    });
  }

  urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    this.urlLocationHandler();
  };

  urlLocationHandler = async () => {
    const urlRoutes = {
      404: {
        template: "/content/404.html",
        title: "",
        description: "",
      },
      "/": {
        template: "/content/homepage.html",
        title: "",
        description: "",
      },
      "/index.html": {
        template: "/content/homepage.html",
        title: "",
        description: "",
      },
      "/movies.html": {
        template: "/content.movies.html",
        title: "",
        description: "",
      },
      "/contact.html": {
        template: "/content/contact.html",
        title: "",
        description: "",
      },
      "/about.html": {
        template: "/content/about.html",
        title: "",
        description: "",
      },
      "/tickets.html": {
        template: "/content/tickets.html",
        title: "",
        description: "",
      },
      "/news.html": {
        template: "/content/news.html",
        title: "",
        description: "",
      },
      "/giftcard.html": {
        template: "/content/giftcard.html",
        title: "",
        description: "",
      },
    };

    const location = window.location.pathname;
    if (location.length == 0) {
      location = "/";
    }
    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response) =>
      response.text()
    );
    document.getElementById("contentBody").innerHTML = html;
  };
}
