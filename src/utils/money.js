export function formatMoney(cents) {
  if (cents === undefined || cents === null) return '$0.00';
  return `$${(cents / 100).toFixed(2)}`;
}
