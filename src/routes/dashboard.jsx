import Dashboard from "../layouts/Dashboard/Dashboard";
import App from "../App";
import TvShowPanel from "../component/TvShows/TvShowPanel";
import TvShowComponent from "../component/TvShows/TvShowComponent";
import MediaPanel from "../component/Media/MediaPanel";
import MediaComponent from "../component/Media/MediaComponent";

const dashboardRoutes = [
    //chrome://flags/#expensive-background-timer-throttling
  {
    path: "/app",
    name: "Home",
    icon: "pe-7s-graph",
    hide: false,
    component: App
  },
  {
    path: "/movies",
    name: "Popular Movies",
    icon: "pe-7s-user",
    component: MediaPanel
  },
  {
    path: "/now-playing",
    name: "Now Playing",
    icon: "pe-7s-news-paper",
    hide: false,
    component: MediaPanel
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
      component: MediaComponent
  },
  {
      path: "/now-playing-movie",
      icon: "pe-7s-news-paper",
      hide: true,
      component: MediaComponent
  },
  {
      path: "/tv-show",
      icon: "pe-7s-news-paper",
      hide: true,
      component: TvShowComponent
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
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
