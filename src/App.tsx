import { ListTasks } from './components/ListTasks/ListTasks';
import { Sidebar } from './components/Sidebar/Sidebar';

import './global.css';

export function App() {
  return (
    <div>
      <Sidebar />
      <ListTasks />
    </div>
  )
}
