import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Austin', age: 28 },
            { name: 'Kathy', age: 28 },
            { name: 'David', age: 50 }
        ],
        otherState: 'Some other value'
    }

    switchNameHandler = () => {
        this.setState( {
            persons: [
                { name: 'Austin Gray', age: 28 },
                { name: 'Kathy', age: 28 },
                { name: 'David', age: 50 }
            ]
        })
    }

    render () {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler}>My Hobbies: Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
        )
    };
}

export default App;
