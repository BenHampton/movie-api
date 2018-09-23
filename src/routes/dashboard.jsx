import Dashboard from "../layouts/Dashboard/Dashboard";
import MoviePanel from "../component/PopularMovies/MoviePanel";
import App from "../App";

const dashboardRoutes = [
  {
    path: "/dashboard",
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
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: App
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: App
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
