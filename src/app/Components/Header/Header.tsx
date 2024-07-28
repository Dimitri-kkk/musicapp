"use client";

import styles from "./Header.module.scss";
import Image from "next/image";

export const Header = () => {
  const handleProfileClick = () => {
    return alert("Profile Clicked");
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Logo}>LOGO</h1>
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
          placeholder="Search.."
          name="search"
        />
      </form>
      <div
        onClick={handleProfileClick}
        className={styles.ProfilePictureContainer}
      >
        <Image
          width={32}
          height={32}
          src="/Profile Picture.svg"
          alt="Profile Picture"
          className={styles.ProfilePicture}
        />
      </div>
    </div>
  );
};
