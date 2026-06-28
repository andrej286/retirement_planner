import {BrowserRouter, Route, Routes, useLocation, Navigate} from 'react-router-dom';
import i18n from "./i18n";
import {Suspense, useState} from "react";
import LocaleContext from "./LocaleContext";
import {ALL_PAGES, NAVIGATION_PAGES, AUTH_CHOOSE_PAGE, LOGIN_PAGE, REGISTER_PAGE} from "./routes";
import {RetirementNavbar} from "./common/components/retirement-navbar";
import { AuthProvider, useAuth } from "./AuthContext";

function Loading() {
  return (
    <div>Loading...</div>
  )
}

function RetirementPlanner() {
  const [locale, setLocale] = useState(i18n.language)
  const { isAuthenticated, isLoading } = useAuth();

  i18n.on('languageChanged', (lng) => setLocale(i18n.language))

  const handleChange = (language) => {
    i18n.changeLanguage(language);
  }
  const location = useLocation();
  const showNavbar = NAVIGATION_PAGES.some(page => page.path === location.pathname);
  const isAuthPage = ['/login', '/register', '/'].includes(location.pathname);

  // Redirect to auth page if not authenticated and trying to access protected routes
  if (!isLoading && !isAuthenticated && !isAuthPage) {
    return <Navigate to="/" replace />;
  }

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
        <>
          {showNavbar && <RetirementNavbar handleLocaleChange={handleChange} />}
          <Routes>
            {ALL_PAGES.map((page) => <Route key={page.path} path={page.path} element={page.component} />)}
          </Routes>
        </>
      </Suspense>
    </LocaleContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RetirementPlanner />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

