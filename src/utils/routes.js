
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import SettingsPage from "../pages/SettingsPage";
import ReceiptPage from "../pages/ReceiptPage";

import {
  HOME_PAGE_ROUTE,
  RECEIPT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  RECIPES_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "./consts";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
  {
    path: HOME_PAGE_ROUTE,
    element: HomePage,
  },
  {
    path: ABOUT_PAGE_ROUTE,
    element: AboutPage,
  },
  {
    path: RECIPES_PAGE_ROUTE,
    element: RecipesPage,
  },
  {
    path: CONTACT_PAGE_ROUTE,
    element: ContactPage,
  },
  {
    path: SETTINGS_PAGE_ROUTE,
    element: SettingsPage,
  },
  {
    path: RECEIPT_PAGE_ROUTE,
    element: ReceiptPage,
  },
  
  {
    path: "*",
    element: NotFoundPage,
  },
  
];