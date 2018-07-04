import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { ExamplePage } from 'pages'
import { hot } from 'react-hot-loader'

const App = () => {
  return(
    <div>
      <switch>
        <Route exact path='/' component={ExamplePage} />
      </switch>
    </div>
  )
}

export default hot(module)(App);
