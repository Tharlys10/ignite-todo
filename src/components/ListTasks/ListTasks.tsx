import { ClipboardText, PlusCircle } from 'phosphor-react';
import styles from './ListTasks.module.css';

export function ListTasks() {
  return (
    <div className={styles.container}>
      <div className={styles.boxNewTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={15} />
        </button>
      </div>

      <div className={styles.boxListTasks}>
        <header>
          <strong className={styles.totalTasksCreated}>Tarefas criadas <span>0</span></strong>
          <strong className={styles.totalTasksConcluded}>Concluídas <span>0 de 0</span></strong>
        </header>

        <div className={styles.listNotFound}>
          <ClipboardText size={60} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
}