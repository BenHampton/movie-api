import App from "../component/Home/App";
import TvShowPanel from "../component/TvShows/TvShowPanel";
import TvShowComponent from "../component/TvShows/TvShowComponent";
import MoviesPanel from "../component/Media/MoviesPanel";
import MoviesComponent from "../component/Media/MovieComponent";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-graph",
    hide: false,
    component: App
  },
  {
    path: "/movies",
    name: "Popular Movies",
    icon: "pe-7s-user",
    component: MoviesPanel
  },
  {
    path: "/now-playing",
    name: "Now Playing",
    icon: "pe-7s-news-paper",
    hide: false,
    component: MoviesPanel
  },
  {
      path: "/tv-shows",
      name: "Popular Tv Shows",
      icon: "pe-7s-user",
      component: TvShowPanel
  },
  {
      path: "/movie",
      icon: "pe-7s-news-paper",
      hide: true,
      component: MoviesComponent
  },
  {
      path: "/now-playing-movie",
      icon: "pe-7s-news-paper",
      hide: true,
      component: MoviesComponent
  },
  {
      path: "/tv-show",
      icon: "pe-7s-news-paper",
      hide: true,
      component: TvShowComponent
  },
  { redirect: true, path: "/", to: "/home", name: "Home" }
];

  // { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  // { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: App
  // },

export default dashboardRoutes;
