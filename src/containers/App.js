import React, {Component} from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: '1', name: "Max", age: 35},
      {id: '2', name: "Manu", age: 30},
      {id: '3', name: "Stephanie", age: 26,}],
    showPersons: false
    
  }
  
  switchNameHandler = (newName) => {
    console.log('was clicked');
    this.setState({
      persons: [{
        name: newName,
        age: 35
      }, {
        name: "Manu", age: 30
      },
        {
          name: "Stephanie",
          age: 26
        }]
    })
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }
  
  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }
  
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  
  render() {
   
    let persons = null;
    let btnClass = '';
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            
            />)
          })}
        </div>);
      btnClass = classes.Red;
     
    }
    
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    
    return (
        <div className={classes.App}>
          <h1>Hi, I am react app!!</h1>
          <p className={assignedClasses.join(' ')}>This is really working !!!</p>
          <button className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
