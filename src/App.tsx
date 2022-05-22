import { useState } from 'react';

import { imcLevels, calculateIMC, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';

import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';

export function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [imcToShow, setIMCToShow] = useState<Level | null>(null);

  function handleCalculateButton() {
    if (!(heightField && weightField)) alert('Preencha todos os campos');

    // buscando dados do IMC
    setIMCToShow(calculateIMC(heightField, weightField));
  }

  function handleBackButton() {
    setIMCToShow(null);
    setHeightField(0);
    setWeightField(0);
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
            disabled={imcToShow ? true : false}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={(e) => setWeightField(Number(e.target.value))}
            disabled={imcToShow ? true : false}
          />

          <button
            type="button"
            onClick={handleCalculateButton}
            disabled={imcToShow ? true : false}
          >
            Calcular
          </button>
        </section>

        <section className={styles.rightSide}>
          { !imcToShow &&
            <div className={styles.grid}>
              { imcLevels.map((item, index) => (
                <GridItem
                  key={index}
                  item={item}
                />
              )) }
            </div>
          }
          { imcToShow &&
            <div className={styles.rightIMC}>
              <div
                className={styles.rightArrow}
                onClick={handleBackButton}
              >
                <img
                  src={leftArrowImage}
                  alt="Seta de retorno"
                  width={25}
                />
              </div>

              <GridItem
                item={imcToShow}
              />
            </div>
          }
        </section>
      </main>
    </div>
  );
}
