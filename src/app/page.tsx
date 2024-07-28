import Image from "next/image";
import styles from "./page.module.css";
import { SectionTitle } from "./Components/TrendsHit/TrendsHit";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionTitle
        title="Trend Hits"
        background="linear-gradient(270deg, #e2934b 7.1%, #d3620f 94.73%)"
        year={2021}
        src="/Artist.png"
        link="https=//google.com"
      />
    </main>
  );
}
