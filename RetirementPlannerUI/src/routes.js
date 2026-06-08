import Home from "./pages/home";
import Invest from "./pages/invest/invest";

export const HOME_PAGE = {
  component: <Home />,
  path: '/home'
}
export const INVEST_PAGE = {
  component: <Invest />,
  path: '/invest'
}

export const ALL_PAGES = [
  HOME_PAGE,
  INVEST_PAGE
]


export const NAVIGATION_PAGES = [
  HOME_PAGE,
  INVEST_PAGE
]