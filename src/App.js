import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Search from "./page/search"
const SingleMovie = lazy(() => import('./singleMovie/singleMovie'))
const Home = lazy(() => import('./page/Home'))
const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='/search/:query' element={<Search />} />
        </Routes>
      </Suspense>

    </>
  )
}
export default App