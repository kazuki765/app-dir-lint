import styles from "./layout.module.css";
export default function Layout({
  children,
  drawer,
}: {
  children: React.ReactNode;
  drawer: React.ReactNode;
}) {
  return (
    <div className={styles.todosLayout}>
      {children}
      {drawer}
    </div>
  );
}
