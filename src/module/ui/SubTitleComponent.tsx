import styles from "./SubTitle.module.css";

export default function SubTitleComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.subTitleContainer}>{children}</div>;
}
