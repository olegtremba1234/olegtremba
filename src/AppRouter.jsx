import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";
import { AboutPage, ResumePage, ProjectsPage, ContactPage } from './pages/index'
import "./App.css";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />,

  },
  {
    path: '/resume',
    element: <ResumePage />
  },
  {
    path: "/projects",
    element: <ProjectsPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  }

]);

const AppRouter = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
};

export default AppRouter;