import React, { useReducer, useEffect } from 'react';
import * as todosActions from './actions';
import TodoContext from './Context';
import todoReducer from './reducer';

function Provider({ children }){
    const [todos, dispatchToTodos] = useReducer(todoReducer,[]);
    
    const rehydrate = async () => {
        const data = await localStorage.getItem('TODO');
        data && dispatchToTodos(todosActions.persistTodo(JSON.parse(data)))
    };

    useEffect(() => {
        rehydrate();
    },[])

    useEffect(() => {
        localStorage.setItem('TODO',JSON.stringify(todos))
    },[todos]);


    return(
        <TodoContext.Provider value={{ todos, dispatchToTodos }}>
            {children}
        </TodoContext.Provider>
    );
}

export default Provider;