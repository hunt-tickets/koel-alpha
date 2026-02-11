/**
 * Formats a price with Colombian formatting (punto for thousands, coma for decimals)
 * @param price - Price in COP
 * @param includeCurrency - Whether to include $ symbol
 * @returns Formatted price string
 */
export function formatPrice(price: number, includeCurrency: boolean = true): string {
  const formatted = new Intl.NumberFormat('es-CO', {
    style: includeCurrency ? 'currency' : 'decimal',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return formatted;
}
