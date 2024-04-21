import { useState } from "react";
import styles from "./Dropdown.module.css";

export function Dropdown({
  options,
  selectedOptions,
  setSelectedOptions,
  filterName,
}: {
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: (options: string[]) => void;
  filterName: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.dropdownAndButton}>
        <button
          className={styles.filterButton}
          onClick={() => setOpen(!open)}
        >
          {filterName}
        </button>
        {open && (
          <div className={styles.dropdown}>
            {options.map((option) => (
              <div
                key={option}
                className={styles.inputHolder}
              >
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedOptions([
                        ...selectedOptions,
                        option,
                      ]);
                    } else {
                      setSelectedOptions(
                        selectedOptions.filter(
                          (selectedOption) =>
                            selectedOption !== option
                        )
                      );
                    }
                  }}
                />
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
