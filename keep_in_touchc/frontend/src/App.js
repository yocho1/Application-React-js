import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Header from './components/header/Header'
import Show from './components/show/Show'
import SendMail from './components/SendMail'

function App() {
  return (
    <Router>
      <Header />
      <div className='app'>
        <Switch>
          <Route path='/' component={Contact} exact />
          <Route path='/Show' component={Show} exact />
          <Route path='/sendmail/:email' component={SendMail} exact />
        </Switch>
      </div>
    </Router>
  )
}

export default App
