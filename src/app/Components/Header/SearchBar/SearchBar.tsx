import styles from "./SearchBar.module.scss";
import Image from "next/image";

export const SearchBar = () => {
  return (
    <form className={styles.SearchContainer} action="/search" method="GET">
      <button type="submit" className={styles.SearchButton}>
        <Image
          width={24}
          height={24}
          src="/search.svg"
          alt="Search Icon"
          className={styles.SearchIcon}
        />
      </button>
      <input
        className={styles.Search}
        type="text"
        placeholder="Search..."
        name="search"
      />
    </form>
  );
};
