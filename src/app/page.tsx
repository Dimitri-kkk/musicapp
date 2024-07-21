import styles from "./page.module.css";
import ChartCard from "./Components/chartCard/chartCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <ChartCard src="/test.jpg" id={`https://fakestoreapi.com/products/1`}/>
    </main>
  );
}
