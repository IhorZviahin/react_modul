import React from 'react';

const Todo = ({todo: {id, name, status}}) => {
    return (
        <div>
            <input type="checkbox" value={status}/>
            <div> {id} -- {name} </div>
            <button>Delate</button>
        </div>
    );
};

export default Todo;