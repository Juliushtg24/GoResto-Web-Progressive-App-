import HomePage from "../view/pages/home-page";
import FavouritePage from "../view/pages/favourite-page";
import DetailPage from "../view/pages/detail-page";

const routes = {
  "/": HomePage,
  "/home": HomePage,
  "/favourite": FavouritePage,
  "/detail/:id": DetailPage,
};

export default routes;
