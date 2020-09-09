import React, { useContext, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { FaPlus } from 'react-icons/fa';
import TodosContext from '../../../../state/todos/Context';
import * as todosActions from '../../../../state/todos/actions';
import * as yup from 'yup';
import styles from './TodoCreator.module.css';

function TodoCreator(){
	const { dispatchToTodos } = useContext(TodosContext);
	
	const { getFieldProps, errors, handleSubmit } = useFormik({
		initialValues:{
			title: ''
		},
		validationSchema: yup.object({
			title: yup.string().required('Necessário preencher uma tarefa.')
		}),
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: (values, formikBag) => {
			dispatchToTodos(todosActions.addTodo(values.title));
			formikBag.setFieldValue('title', '', false);
		}
	});

	const inputTitle = useRef(null);

	useEffect(() => {
		inputTitle.current.focus();
	},[])

	return(
		<form
			className={styles.container}
			onSubmit={handleSubmit}
		>	
			<div>
				<input
					className={styles.input}
					type='text' 
					placeholder='Nova tarefa'
					autoComplete='off'
					ref={inputTitle}
					{ ... getFieldProps('title')} 
				/>
				<button 
					className={styles.submit}
					type='submit'
				>
					<FaPlus />
				</button>
			</div>
			<small style={errors.title && {visibility:'visible'}} className={styles.error}>{errors.title}</small>

		</form>
	)
}

export default TodoCreator;