import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DrinksPage from './pages/DrinksPage'
import FoodPage from './pages/FoodPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/drinks">
          <DrinksPage/>
        </Route>
        <Route path="/">
          <FoodPage/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
