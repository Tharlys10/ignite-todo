import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

type TaskType = {
  id: string;
  title: string;
  concluded: boolean;
  created_at: Date;
  updated_at: Date;
}

type TaskProps = {
  task: TaskType;
  onDeleteTask: (id: string) => void;
  onConcludeTask: (id: string) => void;
}

export function Task({ task, onDeleteTask, onConcludeTask }: TaskProps) {

  function handleDeleteTask() {
    const { id } = task;

    onDeleteTask(id);
  }

  function handleConcludeTask() {
    const { id } = task;

    onConcludeTask(id);
  }

  return (
    <div className={styles.container}>
      <div>
        <input 
          type="checkbox" 
          checked={task.concluded} 
          onChange={handleConcludeTask}
        />
        {
          task.concluded 
          ? 
          <del>
            {
              task.title
            }
          </del>
          :
          <span>
            {
              task.title
            }
          </span>
        }
      </div>
      
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </div>
  )
}