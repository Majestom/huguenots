import Image from "next/image";
import styles from "./TopMenu.module.css";

export function TopMenu() {
  return (
    <menu className={`${styles.menu} ${styles.padding}`}>
      <Image
        src={"/Huguenots_mark.svg"}
        width={37}
        height={37}
        alt={"Huguenots logo"}
      />
      <figure className={styles.avatar}>
        <Image
          src={"/british_flag.png"}
          width={20}
          height={20}
          alt={"British flag 1707-1800"}
        />
        <figcaption>Professional investor</figcaption>
      </figure>
    </menu>
  );
}
