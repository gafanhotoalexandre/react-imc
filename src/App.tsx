import styles from './App.module.css';
import poweredImage from './assets/powered.png'

export function App() {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Imagem Logo" width={150} />
        </div>
      </header>

      <main className={styles.container}>
        <section className={styles.leftSide}>
          Lado Esquerdo
        </section>

        <section className={styles.rightSide}>
          Lado Direito
        </section>
      </main>
    </div>
  );
}