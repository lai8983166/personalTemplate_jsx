import React, { useState } from "react";
import styles from "../style/PaginatedPage_raw.module.scss";

const PaginationPageRaw = () => {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  const totalPages = Math.ceil(data.length / pageSize);
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleClick = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className={styles["pagination-container"]}>
      <ul className={styles["item-list"]}>
        {paginatedData.map((item, idx) => (
          <li key={idx} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.pagination}>
        <button
          className={styles["page-btn"]}
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`${styles["page-btn"]} ${
              currentPage === i + 1 ? styles.active : ""
            }`}
            onClick={() => handleClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className={styles["page-btn"]}
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationPageRaw;
