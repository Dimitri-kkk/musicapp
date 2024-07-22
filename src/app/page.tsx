import Image from "next/image";
import styles from "./page.module.css";
import { SectionTitle } from "./Components/TrendsHit/TrendsHit";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionTitle title="Trending Artists" background="#ff69b4" year={2021} />
    </main>
  );
}
