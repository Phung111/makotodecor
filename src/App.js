import React, { Suspense } from 'react'
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProduct, setProducts } from 'service/baseSlice'

import Home from 'feature/Home/Home'
import Detail from 'feature/Detail/Detail'
import { monProducts } from 'service/sourceProduct'

function App() {
  const dispatch = useDispatch()
  dispatch(setProducts(monProducts))

  useEffect(() => {
    // Kiểm tra xem có dữ liệu đã lưu trong localStorage không
    const storedProduct = localStorage.getItem('product')
    if (storedProduct) {
      // Nếu có, dispatch action để setProduct vào Redux state
      dispatch(setProduct(JSON.parse(storedProduct).id))
    }
  }, [dispatch])

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
