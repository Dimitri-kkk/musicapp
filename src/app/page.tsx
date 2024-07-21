import Image from "next/image";
import styles from "./page.module.css";
import { SectionHeader } from "./Components/SectionHeader/SectionHeader";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <SectionHeader title="Hello" />
      </div>
    </main>
  );
}
