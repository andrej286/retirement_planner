import Home from "./pages/home";
import Invest from "./pages/invest-calculator/invest";
import Expense from "./pages/expense";
import Income from "./pages/income";
import Investment from "./pages/investment";

export const HOME_PAGE = {
  component: <Home />,
  path: '/home'
}
export const INVEST_PAGE = {
  component: <Invest />,
  path: '/invest'
}
export const EXPENSE_PAGE = {
  component: <Expense />,
  path: '/expense'
}
export const INCOME_PAGE = {
  component: <Income />,
  path: '/income'
}
export const INVESTMENT_PAGE = {
  component: <Investment />,
  path: '/investment'
}

export const ALL_PAGES = [
  HOME_PAGE,
  INVEST_PAGE,
  EXPENSE_PAGE,
  INCOME_PAGE,
  INVESTMENT_PAGE
]


export const NAVIGATION_PAGES = [
  HOME_PAGE,
  INVEST_PAGE,
  EXPENSE_PAGE,
  INCOME_PAGE,
  INVESTMENT_PAGE
]