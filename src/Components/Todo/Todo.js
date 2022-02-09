import React from 'react';
import {useDispatch} from "react-redux";

import {changeStatus, deletetodo} from "../../store";
import css from './Todo.module.css'

const Todo = ({todo: {id, name, status}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id: id}))}/>
            <div className={status ? css.info : ''}>
                {name}
            </div>

            <button onClick={()=> dispatch(deletetodo({id}))}>Delate</button>
        </div>
    );
};

export default Todo;