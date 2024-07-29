"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import { SearchBar } from "./SearchBar/SearchBar";

export const Header = () => {
  const handleProfileClick = () => {
    return alert("Profile Clicked");
  };

  return (
    <div className={styles.Container}>
      <div className={styles.LogoContainer}>
        <h1 className={styles.Logo}>LOGO</h1>
        <SearchBar />
      </div>
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
