import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "../Pages/Home";
import Layout from "../Components/Layouts";


const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const { path, pageTitle, Component } = route;
        return (
          <Route
            key={index}
            path={path}
            element={
              <>
                <Helmet>
                  <title>{`${pageTitle && `${pageTitle}-`}NFT`}</title>
                </Helmet>
                <Layout>
                <Suspense fallback={<h1>loading</h1>}>
                  <Component />
                </Suspense>
                </Layout>
                
              </>
            }
          />
        );
      })}
    </Routes>
  );
};

const publicRoutes = [
  {
    path: "/",
    pageTitle: "",
    Component: lazy(() => import("../Pages/Home")),
  },
  {
    path: "/faq",
    pageTitle: "FAQ",
    Component: lazy(() => import("../Pages/FAQ")),
  },
];

export default AppRoutes;
