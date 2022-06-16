import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
      <div className={styles.container}>
        <img src="./src/assets/logo.svg" alt="Logo" />
      </div>
    )
}
