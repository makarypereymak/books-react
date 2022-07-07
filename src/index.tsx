import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/indexStore'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw Error('root not found')
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
)
