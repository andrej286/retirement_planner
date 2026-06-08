import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import i18n from "./i18n";
import {Suspense, useState} from "react";
import LocaleContext from "./LocaleContext";
import {ALL_PAGES, NAVIGATION_PAGES} from "./routes";
import {RetirementNavbar} from "./common/components/retirement-navbar";

function Loading() {
  return (
    <div>Loading...</div>
  )
}

function RetirementPlanner() {
  const [locale, setLocale] = useState(i18n.language)

  i18n.on('languageChanged', (lng) => setLocale(i18n.language))

  const handleChange = (language) => {
    i18n.changeLanguage(language);
  }
  const location = useLocation();
  const showNavbar = NAVIGATION_PAGES.some(page => page.path === location.pathname);


  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
        <>
          {showNavbar && <RetirementNavbar />}
          <Routes>
            {ALL_PAGES.map((page) => <Route path={page.path} element={page.component} />)}
          </Routes>
        </>
      </Suspense>
    </LocaleContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RetirementPlanner />
    </BrowserRouter>
  );
}

export default App;

