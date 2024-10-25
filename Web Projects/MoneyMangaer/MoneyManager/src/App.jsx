import React from 'react'
import Home from './Content/Home'
import { store } from './App/Store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <div>
      <Provider store={store} >
        <Home />
      </Provider>
    </div>
  )
}
