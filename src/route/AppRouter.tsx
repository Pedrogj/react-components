import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../lazyload/components/navbar/Navbar";
// import { LazyPage, LazyPage2, LazyPage3 } from "../lazyload/pages";s
import { routes } from "./routes";

export const AppRouter = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <BrowserRouter>
        <div className="main-layout">
          <Navbar />
          <Routes>
            <Route path={routes.lazy} element={<routes.ComponentLazy />} />
            <Route path={routes.lazy2} element={<routes.ComponentLazy2 />} />
            <Route path={routes.lazy3} element={<routes.ComponentLazy3 />} />

            <Route
              path={routes.notFound}
              element={<Navigate to={routes.lazy} replace />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
