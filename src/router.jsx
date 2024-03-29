import { createBrowserRouter, Outlet } from "react-router-dom";
import { AboutPage, ResumePage, ProjectsPage, ContactPage } from './pages/index'
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
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