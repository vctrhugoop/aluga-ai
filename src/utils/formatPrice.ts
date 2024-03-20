export function formatPrice(value: string) {
  const numericValue = parseFloat(value); // Convertendo para número, pois esperamos receber uma string formatada como número
  return numericValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
}
