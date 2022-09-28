import { Tasks } from './Tasks';
import { EmptyToDo } from './EmptyToDo';
import { useState } from 'react'
import { PlusCircle} from 'phosphor-react'

import styles from './Form.module.css';



export const Form = () => {
  
  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState('')
  const [taskCount, setTaskCount] = useState(0)
  

  
  const handleSubmitANewTask = (e) => {
    e.preventDefault();
    setTask([...task, newTask])
    setNewTask('')
  }

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value)
  }

  const deleteTask = (taskToDelete) => {
    const taskWithOutDeleteOne = task.filter(task => {
      return task !== taskToDelete
    })
     setTask(taskWithOutDeleteOne)
  }

  const deleteCount = (id)=>{
    
    setTaskCount((taskCheck)=>{
      if(!id ){      
        return --taskCheck 
      }else{
        return taskCheck
      }
    })

  }

  
  function taskClickCheck(id){
    setTaskCount((taskCheck)=>{
      if(!id ){      
        return ++taskCheck 
      }else{
        return --taskCheck
      }
    })
  }

  
  const TasksAmount = task.length

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmitANewTask}>
        <input   
          type="text"
          placeholder="Adicione uma nova tarefa"
          className={styles.input}
          onChange={handleNewTaskChange}
          value={newTask}
        />
  
        <button 
          className={styles.button}>Criar<PlusCircle size={15}
        />
        </button>
      </form>

      <div>
        <div className={styles.header}>
          <p className={styles.content}>Tarefas criadas <span>{TasksAmount}</span></p>
          <p>Concluídas <span>{taskCount} de {TasksAmount}</span></p>
        </div>
      </div>
      
      <div>
        {task.map(tasks => {
          return (
            <Tasks
              key={tasks}
              tasks={tasks}
              onDeleteTask={deleteTask}
              checkClickTask={taskClickCheck}
              onDeleteCount={deleteCount}
            />
          )
        })}

        {task.length <= 0 && (
          <section>
            <EmptyToDo />
          </section>
        )}
      </div>
    </div>
  )
}
