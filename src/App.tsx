import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoader from "./pages/PageLoader";
import ClickSpark from "./components/ui/ClickSpark";
import { useState, useEffect } from "react";
import AboutMe from "./pages/AboutMe";
import "./App.css";

const HomeScreenLazy = lazy(() => import("./pages/LandingPage"));
const ProjectsScreenLazy = lazy(() => import("./pages/Projects"));
const Patents = lazy(() => import("./pages/Patents"));

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
              <main>
                {/* import ClickSpark from './ClickSpark'; */}


  {/* Your content here */}

                <HomeScreenLazy scrolly={scrolly} />
                <AboutMe />
                <ProjectsScreenLazy />

                <Patents />
                {/* </ClickSpark> */}
              </main>
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
