import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Diogo', age: 26 },
      { name: 'Manu', age: 28 },
      { name: 'Steve', age: 29 }
    ],
    otherState: 'some other values',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Manu', age: 28 },
        { name: 'Steve', age: 29 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Diogo', age: 26 },
        { name: event.target.value, age: 28 },
        { name: 'Steve', age: 29 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {
          this.state.showPersons === true ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Diogo!')}
                changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
            </div> : null
        }
      </div>

    );
  }
}

export default App;
