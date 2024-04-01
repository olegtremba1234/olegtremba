import { Suspense, lazy } from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";
import Loader from './components/Loader/Loader'

const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const ResumePage = lazy(() => import('./pages/Resume/ResumePage'));
const ProjectsPage = lazy(() => import('./pages/Projects/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'));

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
    ]
  }


]);