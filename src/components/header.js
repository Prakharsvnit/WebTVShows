import styles from "../css/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.tv}>TV Maze</p>
      <form className={styles.form}>
        <input type="search" placeholder="Search" />
        <button type="submit" className={styles.searchBtn}>
          Go
        </button>
      </form>
    </header>
  );
};

export default Header;
