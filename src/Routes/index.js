import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
  {
    path: "/How-it-works",
    pageTitle: "How-it-works",
    Component: lazy(() => import("../Pages/Howitworks")),
  },
  {
    path: "/Feature-artist",
    pageTitle: "Feature-artist",
    Component: lazy(() => import("../Pages/Featuredartist")),
  },
  {
    path: "/About",
    pageTitle: "About",
    Component: lazy(() => import("../Pages/About")),
  },
  {
    path: "/Help-Center",
    pageTitle: "Help-Center",
    Component: lazy(() => import("../Pages/HelpCenter")),
  },
  {
    path: "/Brochure",
    pageTitle: "Brochure",
    Component: lazy(() => import("../Pages/Brochure")),
  },
  {
    path: "/Contact",
    pageTitle: "/Contact",
    Component: lazy(() => import("../Pages/Contact")),
  },
  {
    path: "/Career",
    pageTitle: "Career",
    Component: lazy(() => import("../Pages/Career")),
  },
];

export default AppRoutes;
