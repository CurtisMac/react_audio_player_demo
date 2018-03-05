import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>
    , document.getElementById('root'))
registerServiceWorker()