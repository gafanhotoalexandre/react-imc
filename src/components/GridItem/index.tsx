import { Level } from '../../helpers/imc';

import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

interface GridItemProps {
  item: Level
}

export function GridItem({ item }: GridItemProps) {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        { item.icon === 'up' && <img src={upImage} alt="Positivo" width={35} /> }
        { item.icon === 'down' && <img src={downImage} alt="Negativo" width={35} /> }
      </div>

      <div className={styles.gridTitle}>
        { item.title }
      </div>

      <div className={styles.gridInfo}>
        IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
      </div>
    </div>
  )
}
