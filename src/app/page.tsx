import styles from "./page.module.css";
import Canvas from "./components/canvas";

export default function Home() {
  return (
    <div className={styles.page}>
      <Canvas />
    </div>
  );
}
