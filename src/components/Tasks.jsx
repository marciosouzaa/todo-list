
import { Trash, Circle, CheckCircle } from 'phosphor-react'
import { useState } from 'react';

import styles from './Tasks.module.css';


export const Tasks = ({ tasks, onDeleteTask, checkClickTask, onDeleteCount }) => {
  const [ taskCheck, setTaskCheck] = useState([])

  const handleDeleteTask = () => {
    onDeleteTask(tasks)
    onDeleteCount(taskCheck)
  }


 function handleClickTask(){
  const taskComplete = !taskCheck

  checkClickTask(taskComplete)
  setTaskCheck(taskComplete)
 }


 

  return (

    <div className={styles.teste}>
      <div className={styles.task}>
      <button onClick={handleClickTask} className={styles.checkContainer}>
        {taskCheck ? <Circle /> : <CheckCircle color='var(--green-strong)' />}
      </button>      
      {taskCheck ? <p className={styles.taskNoChecked}>{tasks}</p> : <p className={styles.taskChecked}>
        {tasks}
      </p>}  
      

      <button onClick={handleDeleteTask}  className={styles.deleteButton}>
        <Trash size={20} className={styles.trash}/>
      </button>
    </div>
    </div>
  )
}
