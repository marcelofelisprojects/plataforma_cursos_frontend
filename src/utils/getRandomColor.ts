/* eslint-disable no-bitwise */
export function GetRandomColor() {
  let color;
  let luminance;
  do {
    // Gera uma cor aleatória em hexadecimal
    color = `#${((Math.random() * 0xffffff) << 0)
      .toString(16)
      .padStart(6, '0')}`;
    // Calcula a luminância relativa da cor
    const r = parseInt(color.slice(1, 3), 16) / 255;
    const g = parseInt(color.slice(3, 5), 16) / 255;
    const b = parseInt(color.slice(5, 7), 16) / 255;
    luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b; // Fórmula de luminância
  } while (luminance < 0.5); // Repete até obter uma cor com luminância suficiente
  return color;
}
