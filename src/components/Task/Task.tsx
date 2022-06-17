import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

type TaskProps = {
  concluded: boolean;
}

export function Task({ concluded = false }: TaskProps) {

  return (
    <div className={styles.container}>
      <input 
        type="checkbox" 
        checked={concluded} 
        onChange={() => console.log('change')}
      />
      {
        concluded 
        ? 
        <del>
          Integer urna interdum massa libero 
          auctor neque turpis turpis semper. 
          Duis vel sed fames integer.
        </del>
        :
        <span>
          Integer urna interdum massa libero 
          auctor neque turpis turpis semper. 
          Duis vel sed fames integer.
        </span>
      }
      
      <button>
        <Trash size={24} />
      </button>
    </div>
  )
}