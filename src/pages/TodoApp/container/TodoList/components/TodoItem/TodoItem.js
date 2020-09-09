import React, { useState, useCallback, useEffect } from 'react';
import { ReactComponent as UpdateTitleIcon } from '../../../../../../assets/icons/update-icon.svg';
import { ReactComponent as DeleteTodoIcon } from '../../../../../../assets/icons/delete-icon.svg';
import styles from './TodoItem.module.css';

function TodoItem({id, title, completed, onModalOpen, onDelete, onStatusUpdate }){
    const [isChecked, setIsChecked] = useState(completed);
    const handleChange = useCallback((e) => {
        setIsChecked(e.target.checked);
    },[]);

    useEffect(() =>{
        onStatusUpdate(id, isChecked);
    },[onStatusUpdate, id, isChecked]);

    const handleModalOpen = useCallback(() => {
        onModalOpen(id);
    },[onModalOpen, id]);

    const handleDelete = useCallback(() => {
        onDelete(id);
    },[onDelete, id]);
    
    return(
        <li className={styles.item}>
            <span className={completed ? styles.completed : null}>{title}</span>
            <div className={styles.controlButtons}>
                <input type='checkbox' checked={isChecked} onChange={handleChange} />
                <button onClick={handleModalOpen}><UpdateTitleIcon /></button>
                <button onClick={handleDelete}><DeleteTodoIcon /></button>
            </div>
        </li>
    );
}

export default TodoItem;