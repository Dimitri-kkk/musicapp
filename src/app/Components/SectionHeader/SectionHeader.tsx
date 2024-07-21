import Link from "next/link";
import styles from "./SectionHeader.module.scss";

type Props = {
  title: string;
};

export const SectionHeader = (props: Props) => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.sectionHeader}>{props.title}</h1>
      <Link href="#" className={styles.seeAll}>
        See All
      </Link>
    </div>
  );
};
