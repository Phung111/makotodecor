import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const namespace = 'baseSlice'

const initialState = {
  data: {
    bestProduct: {},
    newProducts: [],
    products: [],
    product: {},
  },
}

const baseSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data.products = action.payload

      const bestProductID = 0
      state.data.bestProduct = state.data.products.find((product) => product.id === bestProductID) || {}

      state.data.newProducts = state.data.products.slice(0, 3)

      console.log('bestProduct', state.data.bestProduct)
      console.log('newProducts', state.data.newProducts)
      console.log('products', state.data.bestPproductsroduct)
    },
    setProduct: (state, action) => {
      const productId = action.payload
      state.data.product = state.data.products.find((product) => product.id === productId) || {}
      localStorage.setItem('product', JSON.stringify(state.data.product))
      console.log('product', state.data.product)
    },
  },
  extraReducers(builder) {},
})

const { reducer, actions } = baseSlice

export const { setBestProducts, setNewProducts, setProducts, setProduct } = actions

export default reducer
