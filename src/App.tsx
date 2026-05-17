import {Route, Routes} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import PageLoader from './pages/PageLoader'
import './App.css'

const LoginPageLazy = lazy(() => import('./pages/LoginPage'))
const HomeScreenLazy = lazy(() => import("./pages/HomeScreen"))
function App() {
  return (
    <>

<Routes>
  <Route path='/' element={<PageLoader />} />
  <Route path='/login' element={
    
    <Suspense fallback={
      <div className="w-screen h-screen flex items-center justify-center bg-[#09090b]"/>
    }>
      <LoginPageLazy />
    </Suspense>
    } />

    <Route path="/home" element={
          <Suspense fallback={
      <div className="w-screen h-screen flex items-center justify-center bg-[#09090b]"/>
    }>
      <HomeScreenLazy darkMode={true}/>
    </Suspense>
    }/>

</Routes>


    </>
  )
}

export default App
