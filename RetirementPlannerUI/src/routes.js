import Home from "./pages/home";
import Invest from "./pages/invest-calculator/invest";
import Expense from "./pages/expense";
import Income from "./pages/income";
import Investment from "./pages/investment";
import TaxSavings from "./pages/tax-savings";
import Savings from "./pages/savings";
import AuthChoose from "./pages/auth/AuthChoose";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

export const AUTH_CHOOSE_PAGE = {
  component: <AuthChoose />,
  path: '/'
}

export const LOGIN_PAGE = {
  component: <Login />,
  path: '/login'
}

export const REGISTER_PAGE = {
  component: <Register />,
  path: '/register'
}

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
  AUTH_CHOOSE_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
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