import React from 'react'
import Navigation from './Navigation.js'
import {Outlet} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../Store/store.js'


const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
        <Navigation/>
        <main> <Outlet/> </main>
    </Provider>
    </>
  )
}

export default RootLayout