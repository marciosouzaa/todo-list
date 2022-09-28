
import { Trash, Circle, CheckCircle } from 'phosphor-react'
import { useState } from 'react';

import styles from './Tasks.module.css';


export const Tasks = ({ tasks, onDeleteTask, checkClickTask }) => {
  const [ taskCheck, setTaskCheck] = useState(true)

  const handleDeleteTask = () => {
    onDeleteTask(tasks)
  }


 function handleClickTask(){
  const taskComplete = !taskCheck

  checkClickTask(taskCheck)
  setTaskCheck(taskComplete)
 }


 

  return (

    <div className={styles.teste}>
      <div className={styles.task}>
      <button onClick={handleClickTask} className={styles.checkContainer}>
        {taskCheck ? <Circle /> : <CheckCircle color='var(--green-strong)' />}
        
      </button>
      <p>
        {tasks}
      </p>

      <button onClick={handleDeleteTask}  className={styles.deleteButton}>
        <Trash size={20} className={styles.trash}/>
      </button>
    </div>
    </div>
  )
}
