import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoader from "./pages/PageLoader";
import { useState, useEffect } from "react";
import AboutMe from "./pages/AboutMe";
import "./App.css";

// import Background from "./pages/BackgroundTesting";

const HomeScreenLazy = lazy(() => import("./pages/LandingPage"));
const ProjectsScreenLazy = lazy(() => import("./pages/Projects"));
const Patents = lazy(() => import("./pages/Patents"));
const Skills = lazy(() => import("./pages/Skills"));

function App() {
  const [scrolly, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLoader />} />
        <Route
          path="/home"
          element={
            <Suspense
              fallback={
                <div className="w-screen h-screen flex items-center justify-center bg-[#09090b]" />
              }
            >
              <main >

                <HomeScreenLazy scrolly={scrolly} />
                <AboutMe />
                <ProjectsScreenLazy />

                <Patents />
                <Skills/>
              </main>
            </Suspense>
          }
        />
        {/* <Route path="/bg" element={<Background/>}/> */}
      </Routes>
    </>
  );
}

export default App;
