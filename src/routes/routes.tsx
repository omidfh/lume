import Collection from "../Pages/Collection";
import Home from "../Pages/Home";
import Journal from "../Pages/Journal";
import NewArrivals from "../Pages/NewArrivals";

export const routes = [
  {
    name: "Home",
    url: "/",
    component: <Home />,
  },
  {
    name: "Collection",
    url: "/collection",
    component: <Collection />,
  },
  {
    name: "New Arrivals",
    url: "/NewArrivals",
    component: <NewArrivals />,
  },

  {
    name: "Journal",
    url: "/Journal",
    component: <Journal />,
  },
];

export default routes;
