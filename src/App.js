import React from 'react';
//import './App.css';
import Welcome from './components/welcome/welcome';
import Condition from './components/condition/condition';
import PersonList from './components/person-list/person-list';

function App() {

  const people = [
    {id: 1, firstname: 'Donald', lastname: 'Duck'},
    {id: 2, firstname: 'Zaza', lastname: 'Vanderquack'},
    {id: 3, firstname: 'Archiblad', lastname: 'Gripsou'},
    {id: 4, firstname: 'Baltazar', lastname: 'Picsou'},
    {id: 5, firstname: 'Gontran', lastname: 'Bonheur'}
  ]
  
  return (
    <div className="App">
      <h1>App de Demo !</h1>
      {/* <Welcome firstname="Zaza" 
               lastname="Vanderquack"
               nombre={42} />*/}
      {/* <Condition message="Hello" visible={true} />  */}
      <PersonList people={people} />
    </div>
  );
}

export default App;
