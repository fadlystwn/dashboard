import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './routes/private-route'
import ProvideAuth from './routes/provide-auth'
import Login from './pages/login/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './pages/profile'
import Supplier from './pages/supplier'
import Dashboard from './pages/dashboard'
import NotFound from './pages/not-found'

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <PrivateRoute exact path="/supplier">
            <Supplier />
          </PrivateRoute>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}

export default App
