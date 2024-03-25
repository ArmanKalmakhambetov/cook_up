
import HomePage from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import SettingsPage from "../pages/SettingsPage";
import ReceiptPage from "../pages/ReceiptPage";

import {
  HOME_PAGE_ROUTE,
  RECEIPT_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  RECIPES_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  AUTHOR_PAGE_ROUTE
} from "./consts";
import NotFoundPage from "../pages/NotFoundPage";
import AuthorsPage from "../pages/AuthorsPage";
import AuthorPage from "../pages/AuthorPage";

export const routes = [
  {
    path: HOME_PAGE_ROUTE,
    element: HomePage,
  },
  {
    path: ABOUT_PAGE_ROUTE,
    element: AuthorsPage,
  },
  {
    path: RECIPES_PAGE_ROUTE,
    element: RecipesPage,
  },
  {
    path: SETTINGS_PAGE_ROUTE,
    element: SettingsPage,
  },
  {
    path: RECEIPT_PAGE_ROUTE,
    element: ReceiptPage,
  },{
    path: AUTHOR_PAGE_ROUTE,
    element: AuthorPage,
  },
  {
    path: "*",
    element: NotFoundPage,
  },
  
];