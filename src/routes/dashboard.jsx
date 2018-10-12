import Dashboard from "../layouts/Dashboard/Dashboard";
import MoviePanel from "../component/PopularMovies/MoviePanel";
import App from "../App";
import GenresPanel from "../component/Genres/GenresPanel";
import NowPlayingPanel from "../component/NowPlaying/NowPlayingPanel";
import Movie from "../component/PopularMovies/Movie";

const dashboardRoutes = [
  {
    path: "/app",
    name: "Home",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/movies",
    name: "Popular Movies",
    icon: "pe-7s-user",
    component: MoviePanel
  },
  {
    path: "/genres",
    name: "Genres",
    icon: "pe-7s-note2",
    component: GenresPanel
  },
  {
    path: "/now-playing",
    name: "Now Playing",
    icon: "pe-7s-news-paper",
    component: NowPlayingPanel
  },
  {
      path: "/movie",
      icon: "pe-7s-news-paper",
      component: Movie
  },
  // { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  // { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: App
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
