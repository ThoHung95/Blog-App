import styles from "./CategoryList.module.css";

function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <div className={styles.category}>Style</div>
        <div className={styles.category}>Fashion</div>
        <div className={styles.category}>Food</div>
        <div className={styles.category}>Travel</div>
        <div className={styles.category}>Culure</div>
        <div className={styles.category}>Coding</div>
      </div>
    </div>
  );
}

export default CategoryList;
