import Link from "next/link";
import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">BotoFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <main className={styles.container}>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://botostart.ir"
          target="_blank"
          rel="noopener noreferrer"
        >
          Botostart
        </a>
        Next.js course | BotoFood Project &copy;
      </footer>
    </>
  );
};
export default Layout;
