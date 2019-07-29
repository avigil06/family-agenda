import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CalendarApp from './calendar-app';

function App() {
  return (
    <Router>
      <Route path="/" exact component={CalendarApp} />
    </Router>
  )
}

export default App;
