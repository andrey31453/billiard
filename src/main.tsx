import React from 'react'
import * as ReactDOM from 'react-dom/client'

import '~styles/reset.scss'
import '~styles/default.scss'
import '~styles/fonts.scss'

import { App } from '~app'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
