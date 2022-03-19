import React from 'react'
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';

export const App = () => {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  )
}
export default App;