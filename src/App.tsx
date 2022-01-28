import React from 'react';
import './App.css';
import { Route } from 'react-router'
import { Characters } from './pages/Characters/Characters';
import CharacterDetail from './components/CharacterDetails/CharacterDetail'

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Characters} />
      <Route exact path='/characterdetail/:id' component={CharacterDetail} />
    </div>
  );
}

export default App;
