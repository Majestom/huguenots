import { useState } from "react";
import styles from "./DropdownFancy.module.css";

export type Option = {
  label: string;
  subOptions?: Option[];
};

export type Group = {
  label: string;
  options: Option[];
};

export type DropdownFancyProps = {
  groups: Group[];
  selectedOptions: string[];
  setSelectedOptions: (options: string[]) => void;
  filterName: string;
};

export function DropdownFancy({
  groups,
  selectedOptions,
  setSelectedOptions,
  filterName,
}: DropdownFancyProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.dropdownAndButton}>
        <button
          className={styles.filterButton}
          onClick={() => setOpen(!open)}
        >
          {filterName}
          <span
            className={
              open ? styles.arrowUp : styles.arrowDown
            }
          />
        </button>
        {open && (
          <div className={styles.dropdown}>
            {groups.map((group) => (
              <div key={group.label}>
                <h3 className={styles.inputHolder}>
                  {group.label}
                </h3>
                {group.options.map((option) => (
                  <div
                    key={option.label}
                    className={styles.inputHolder}
                  >
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      checked={selectedOptions.includes(
                        option.label
                      )}
                      onChange={() => {
                        if (
                          selectedOptions.includes(
                            option.label
                          )
                        ) {
                          setSelectedOptions(
                            selectedOptions.filter(
                              (selectedOption) =>
                                selectedOption !==
                                  option.label &&
                                (!option.subOptions ||
                                  !option.subOptions
                                    .map(
                                      (subOption) =>
                                        subOption.label
                                    )
                                    .includes(
                                      selectedOption
                                    ))
                            )
                          );
                        } else {
                          setSelectedOptions([
                            ...selectedOptions,
                            option.label,
                            ...(option.subOptions
                              ? option.subOptions.map(
                                  (subOption) =>
                                    subOption.label
                                )
                              : []),
                          ]);
                        }
                      }}
                    />
                    {option.label}
                    {option.subOptions && (
                      <div style={{ paddingLeft: "20px" }}>
                        {option.subOptions.map(
                          (subOption) => (
                            <div
                              key={subOption.label}
                              className={styles.inputHolder}
                            >
                              <input
                                className={styles.checkbox}
                                type="checkbox"
                                checked={selectedOptions.includes(
                                  subOption.label
                                )}
                                onChange={() => {
                                  if (
                                    selectedOptions.includes(
                                      subOption.label
                                    )
                                  ) {
                                    setSelectedOptions(
                                      selectedOptions.filter(
                                        (selectedOption) =>
                                          selectedOption !==
                                          subOption.label
                                      )
                                    );
                                  } else {
                                    setSelectedOptions([
                                      ...selectedOptions,
                                      subOption.label,
                                      option.label,
                                    ]);
                                  }
                                }}
                              />
                              {subOption.label}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
