import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {FaCheck} from 'react-icons/fa';
import { ReactComponent as CloseIcon } from '../../../../../../assets/icons/delete-icon.svg';
import styles from './TodoModal.module.css';

function TodoModal({id, onModalClose, onTitleUpdate, findTitle}){
  const { handleSubmit, getFieldProps, errors } = useFormik({
    initialValues:{
      title: findTitle(id)
	},
    validationSchema: yup.object({
		title: yup.string().required('Você precisa preencher com uma tarefa.')
    }),
	validateOnChange:false,
	validateOnBlur: false,
    onSubmit: (values, formikBag) => {
      onTitleUpdate(id, values.title);
	  formikBag.setFieldValue('title', '', false);
	  onModalClose();
    }
  });

  return(
	  <>
		<div className={styles.backdrop} onClick={onModalClose} />
		<div className={styles.modal}>
			<form onSubmit={handleSubmit}>
			<h1 className={styles.titleModal}>Modificar tarefa</h1>
				<button
					className={styles.closeButton}
					onClick={onModalClose}
				>
					<CloseIcon />
				</button>
				<div>
					<input className={styles.input}
						type='text'
						onKeyDown={(e) => { e.key === 'Enter' && handleSubmit()}}
						placeholder='Novo título'
						autoComplete='off'
						{...getFieldProps('title')}
					/>
					<button
						className={styles.submit}
						type='submit'
					>
						<FaCheck />
					</button>
				</div>				
				<small style={errors.title && {visibility:'visible'}} className={styles.error}>{errors.title}</small>
			</form>
			
		</div>
	</>
  );
}
      
export default TodoModal;
