import styles from "./Title.module.css";

export default function TitleComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.title}>{children}</div>;
}
