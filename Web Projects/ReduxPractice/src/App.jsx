import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import CounterExp from './CounterExp'
import Todo from './Todo'

export default function App() {
  return (
    <div>
      <Provider store={store} >
        <Todo />
      </Provider>
    </div>
  )
}
