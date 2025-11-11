export default function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los parámetros deben ser numéricos');
  }
  return a + b;
}
