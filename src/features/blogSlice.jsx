import { createSlice } from "@reduxjs/toolkit"

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    blogs: [],
    categories: [],
    loading: false,
    error: false,
    
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true
      state.error = false
    },
    getSuccess: (state, { payload: { data } }) => {
      state.loading = false
      state.blogs = data
    },
    // getSuccessSales: (state, { payload }) => {
    //   state.loading = false
    //   state.sales = payload
    // },
    // getSuccesPurchase: (state, { payload }) => {
    //   state.loading = false
    //   state.purchases = payload
    // },
    // getProCatBrandSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.products = payload[0]
    //   state.categories = payload[1]
    //   state.brands = payload[2]
    // },

    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const { fetchStart, getSuccess, fetchFail, getProCatBrandSuccess } =
  blogSlice.actions
export default blogSlice.reducer
