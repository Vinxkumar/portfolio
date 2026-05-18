import {Route, Routes} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import PageLoader from './pages/PageLoader'
import { useState, useEffect } from 'react'
import AboutMe from './pages/AboutMe'
import './App.css'

const HomeScreenLazy = lazy(() => import("./pages/LandingPage"))
// const AboutMeScreenLazy = lazy(() => import())
function App() {
  const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>

<Routes>
  <Route path='/' element={<PageLoader />} />
    <Route path="/home" element={
          <Suspense fallback={
      <div className="w-screen h-screen flex items-center justify-center bg-[#09090b]"/>
    }>
      <main>
        <HomeScreenLazy scrollY={scrollY}/>
        <AboutMe/>
      </main>
    </Suspense>
    }/>

</Routes>


    </>
  )
}

export default App
