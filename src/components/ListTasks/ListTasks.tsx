import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid'; 
import { ClipboardText, PlusCircle } from 'phosphor-react';

import { Task } from '../Task/Task';
import styles from './ListTasks.module.css';

type TaskType = {
  id: string;
  title: string;
  concluded: boolean;
  created_at: Date;
  updated_at: Date;
}

type CountTaskType = {
  total: number;
  completed: number;
}

export function ListTasks() {
  const [ tasks, setTasks ] = useState<TaskType[]>([]);
  const [ countTask, setCountTask ] = useState<CountTaskType>({ total: 0, completed: 0 });
  const [ newTaskTitle, setNewTaskTitle ] = useState<string>('');

  useEffect(() => {
    const total = tasks.length;
    let completed = 0;

    completed = tasks.reduce((acc, task) => {
      return task.concluded ? acc + 1 : acc;
    }, completed);

    setCountTask({ total, completed });
  }, [ tasks ]);

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();

    if (!newTaskTitle) {
      return;
    }

    const id = uuid();

    const newTask: TaskType = {
      id,
      title: newTaskTitle,
      concluded: false,
      created_at: new Date(),
      updated_at: new Date(),
    }
    
    setTasks([...tasks, newTask]);

    setNewTaskTitle('');
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTaskTitle(event.target.value);
  }

  function handleNewTaskInvalid(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Por favor, digite um titulo válido.');
  }

  function deleteTask(id: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => task.id !== id);

    setTasks(tasksWithoutDeleteOne);
  }

  function concludeTask(id: string) {
    const taskIndex = tasks.findIndex(task => task.id === id);

    tasks[taskIndex].concluded = !tasks[taskIndex].concluded;
    
    setTasks([...tasks]);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleCreateNewTask} className={styles.formNewTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          value={newTaskTitle}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={15} />
        </button>
      </form>

      <div className={styles.boxListTasks}>
        <header>
          <strong className={styles.totalTasksCreated}>Tarefas criadas <span>{ countTask.total }</span></strong>
          <strong className={styles.totalTasksConcluded}>Concluídas <span>{countTask.completed} de { countTask.total }</span></strong>
        </header>

        {
          !tasks.length 
          ?
          <div className={styles.listNotFound}>
            <ClipboardText size={60} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          :
          tasks.map(task => (<Task key={task.id} task={task} onDeleteTask={deleteTask} onConcludeTask={concludeTask}/>))
        }
      </div>
    </div>
  )
}