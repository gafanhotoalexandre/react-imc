import { useState } from 'react';

import styles from './App.module.css';
import poweredImage from './assets/powered.png';

export function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  function handleCalculateButton() {
    if (!(heightField && weightField)) alert('Preencha todos os campos');
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Imagem Logo" width={150} />
        </div>
      </header>

      <main className={styles.container}>
        <section className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea. Parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={(e) => setHeightField(Number(e.target.value))}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={(e) => setWeightField(Number(e.target.value))}
          />

          <button
            type="button"
            onClick={handleCalculateButton}
          >
            Calcular
          </button>
        </section>

        <section className={styles.rightSide}>
          Lado Direito
        </section>
      </main>
    </div>
  );
}