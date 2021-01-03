import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'Austin', age: 28 },
            { name: 'Kathy', age: 28 },
            { name: 'David', age: 50 }
        ]
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Austin Gray';
        setPersonsState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Kathy', age: 28 },
                { name: 'David', age: 54 }
            ]
        });
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
          <button onClick={() => switchNameHandler('Austin Gray!!')}>Switch Name</button>
          <Person
              name={personsState.persons[0].name}
              age={personsState.persons[0].age} />
          <Person
              name={personsState.persons[1].name}
              age={personsState.persons[1].age}
              click={switchNameHandler.bind(this, 'Austin!')} >My Hobbies: Racing</Person>
          <Person
              name={personsState.persons[2].name}
              age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default app;