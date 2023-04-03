import React from 'react'
import AppRouter from './router/AppRouter'
import store, { persistor } from "./app/store"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from "react-toastify"


const App = () => {
  return (
    <div>

      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      {/* <AppRouter/> */}
    </div>
  )
}
export default App

