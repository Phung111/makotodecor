import React from 'react'
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct, setProducts, setLoading } from 'service/baseSlice'

import Home from 'feature/Home/Home'
import Detail from 'feature/Detail/Detail'
import Spin from 'feature/Spin'
import LandingPage from 'feature/LandingPage'
import { monProducts } from 'service/sourceProduct'

import Loading from 'components/Loading'

function App() {
  const isLoading = useSelector((state) => state.baseSlice.data.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProducts(monProducts))
    const storedProduct = localStorage.getItem('product')
    if (storedProduct) {
      const { id } = JSON.parse(storedProduct)
      dispatch(setProduct(id))
    }
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 1000)
  }, [dispatch])

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/spin" element={<Spin />} />
            <Route path="/landing-page" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
