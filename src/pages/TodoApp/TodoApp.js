import React from 'react';
import Header from '../../components/Header';
import TodoCreator from './container/TodoCreator/TodoCreator';
import TodoList from './container/TodoList/TodoList';
import TodoFilter from './container/TodoFilter/TodoFilter';

function TodoApp(){
	return(
		<>
			<Header />
			<TodoCreator />
			<TodoFilter />
			<TodoList />
		</>
	);
}

export default TodoApp;