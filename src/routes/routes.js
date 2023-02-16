import { LOGIN_ROUTE, PORTFOLIO_ROUTE, SIGNUP_ROUTE, STOCK_VIEWER_ROUTE, ACCOUNT_ROUTE, MARKETS_PAGE, STOCK_TRANSACTIONS_ROUTE, SETTINGS_ROUTE } from "../utils/consts";
import Signup from "../components/pages/Signup/Signup";
import Portfolio from "../components/pages/Portfolio/Portfolio";
import Login from "../components/pages/Login/Login";
import Account from "../components/pages/Account/Account";
import Markets from "../components/pages/Markets/Markets";
import StockViewer from "../components/pages/StockViewer/StockViewer";
import StockTransactions from "../components/pages/StockTransactions/StockTransactions";
import Settings from "../components/pages/Settings/Settings";

//? PUBLIC ROUTES

export const publicRoutes = [
  {
    path: SIGNUP_ROUTE,
    element: Signup,
  },
  {
    path: STOCK_VIEWER_ROUTE,
    element: StockViewer,
  },

  {
    path: MARKETS_ROUTE,
    element: Markets,
  },

  {
    path: LOGIN_ROUTE,
    element: Login,
  },

  {

    path: ACCOUNT_ROUTE,
    element: Account,
  },

  {
    path: SETTINGS_ROUTE,
    element: Settings,
  },

  {
    path: STOCK_TRANSACTIONS_ROUTE,
    element: StockTransactions,
  },

  {
    path: PORTFOLIO_ROUTE,
    element: Portfolio,
  },

];

//? PRIVATE ROUTES (routes which are available for authorized users only)

export const privateRoutes = [

];
