import Cards from "./Cards";
import styles from "./Grids.module.css";
export default function CardsGrid() {
  return (
    <>
      <div className={styles.parent}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
}
