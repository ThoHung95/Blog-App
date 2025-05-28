import Pagination from '../pagination/Pagination';
import styles from './CardList.module.css';

function CardList() {
  return (
    <div className={styles.container}>
      CardList
      <Pagination />
    </div>
  );
}

export default CardList;
