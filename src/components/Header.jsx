import logoToDo from '../assets/logo-list.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logoToDo} className={styles.Img}/>
    </div>
  )
}
