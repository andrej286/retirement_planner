import Home from "./pages/home";
import Invest from "./pages/invest-calculator/invest";
import Expense from "./pages/expense";
import Income from "./pages/income";
import Investment from "./pages/investment";
import TaxSavings from "./pages/tax-savings";
import Savings from "./pages/savings";

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
export const TAX_SAVINGS_PAGE = {
  component: <TaxSavings />,
  path: '/tax-savings'
}
export const SAVINGS_PAGE = {
  component: <Savings />,
  path: '/savings'
}

export const ALL_PAGES = [
  HOME_PAGE,
  INVEST_PAGE,
  EXPENSE_PAGE,
  INCOME_PAGE,
  INVESTMENT_PAGE,
  TAX_SAVINGS_PAGE,
  SAVINGS_PAGE
]


export const NAVIGATION_PAGES = [
  HOME_PAGE,
  INVEST_PAGE,
  EXPENSE_PAGE,
  INCOME_PAGE,
  INVESTMENT_PAGE,
  TAX_SAVINGS_PAGE,
  SAVINGS_PAGE
]