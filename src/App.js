import React, { Suspense } from 'react'
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from 'feature/Home/Home'
import Detail from 'feature/Detail/Detail'

function App() {
  return (
    <>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
