import React from 'react';

// const userInput = (props) => {
//     return (
//         <input type="text" onChange={props.changeUser} value={props.username} placeholder="Username"/>
//     )
// }

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };

    return <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName}/>
};

export default userInput;