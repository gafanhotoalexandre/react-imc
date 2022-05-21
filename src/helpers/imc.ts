export type Level = {
  title: string;
  color: string;
  icon: 'up' | 'down';
  imc: number[];
  ownIMC?: number;
}

export const imcLevels: Level[] = [
  { title: 'Magreza', color: '#963aab', icon: 'down', imc: [0, 18.5] },// #96a3ab
  { title: 'Normal', color: '#0ead69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#e2b039', icon: 'down', imc: [25, 30] },
  { title: 'Obesidade', color: '#c3423f', icon: 'down', imc: [30.1, 99] }
];

export function calculateIMC(height: number, weight: number) {
  const imc = Math.round((weight / (height ** 2)) * 10) / 10;

  for (let i in imcLevels) {
    if (imc >= imcLevels[i].imc[0] && imc <= imcLevels[i].imc[1]) {
      const imcLevelCopy: Level = { ...imcLevels[i] };

      imcLevelCopy.ownIMC = Number(imc.toFixed(2));
      return imcLevelCopy;
    }
  }

  return null;
}
