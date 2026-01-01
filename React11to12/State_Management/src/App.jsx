import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import CompleteCrud from './Components/CompleteCrud'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <CompleteCrud/>
      </Provider>
    </div>
  )
}
