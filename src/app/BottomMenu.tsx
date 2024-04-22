import Image from "next/image";
import styles from "./BottomMenu.module.css";

const policyList = [
  "Terms of Use",
  "Legal Terms",
  "Privacy Policy",
  "Cookie Policy",
];

export function BottomMenu() {
  return (
    <menu className={`${styles.menu} ${styles.padding}`}>
      <Image
        src={"/Huguenots_mark.svg"}
        width={37}
        height={37}
        alt={"Huguenots logo"}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      <div className={styles.policyList}>
        {policyList.map((policy) => (
          <a key={policy} href="#">
            {policy}
          </a>
        ))}
      </div>
    </menu>
  );
}
