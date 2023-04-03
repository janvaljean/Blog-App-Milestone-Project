// import axios from "axios"
import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux"
import {
  fetchFail,
  getSuccess,
  fetchStart,
//   getProCatBrandSuccess,
} from "../features/blogSlice"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./useAxios"

const useBlogCall = () => {
  const dispatch = useDispatch()
  //   const { token } = useSelector((state) => state.auth)
  const { axiosWithToken } = useAxios()

  const getBlogData = async () => {
    // const BASE_URL = "https://10001.fullstack.clarusway.com/"
    dispatch(fetchStart())
    try {
      //   const { data } = await axios(`${BASE_URL}Blog/${url}/`, {
      //     headers: { Authorization: `Token ${token}` },
      //   })
      const { data } = await axiosWithToken(`api/blogs/`)
      dispatch(getSuccess({ data}))
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    }
  }

  const deleteBlogData = async (post_id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`api/blogs/${post_id}/`)
      toastSuccessNotify(`blog successfuly deleted`)
      getBlogData()
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`blog can not be deleted`)
    }
  }

  const postBlogData = async (info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`api/blogs/`, info)
      toastSuccessNotify(`blog successfuly posted`)
      getBlogData()
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`blog can not be posted`)
    }
  }

  const putBlogData = async (post_id,info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`api/blogs/${post_id}`, info)
      toastSuccessNotify(`blog successfuly updated`)
      getBlogData()
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`blog can not be updated`)
    }
  }
  const postCommentCreate = async (post_id,info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`api/comments/${post_id}/`, info)
      toastSuccessNotify(`blog successfuly updated`)
      getBlogData()
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`blog can not be updated`)
    }
  }
  const postLikeCreate = async (post_id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`api/likes/${post_id}/`)
      toastSuccessNotify(`blog successfuly updated`)
      // getBlogData()
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`blog can not be updated`)
    }
  }
  const getUserBlog = async (user) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.get(`api/blogs/?author=${user.id}/`)
      toastSuccessNotify(`blog successfuly updated`)
      getBlogData()
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`blog can not be updated`)
    }
  }

  
  const getPostDetail = async (id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.get(`api/blogs/${id}/`)
      toastSuccessNotify(`blog successfuly updated`)
      getBlogData()
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`blog can not be updated`)
    }
  }



//   const getProCatBrand = async () => {
//     dispatch(fetchStart())
//     try {
//       const [products, categories, brands] = await Promise.all([
//         axiosWithToken.get("Blog/products/"),
//         axiosWithToken.get("Blog/categories/"),
//         axiosWithToken.get("Blog/brands/"),
//       ])

//       dispatch(
//         getProCatBrandSuccess([products?.data, categories?.data, brands?.data])
//       )
//     } catch (error) {
//       console.log(error)
//       dispatch(fetchFail())
//       toastErrorNotify(`Data can not be fetched`)
//     }
//   }

  return {
    getBlogData,
    deleteBlogData,
    postBlogData,
    putBlogData,
    postCommentCreate,
    postLikeCreate,
    getUserBlog,
    getPostDetail
    // getProCatBrand,
  }
}

export default useBlogCall
