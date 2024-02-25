const CURRENCY_FORMATTER = new Intl.NumberFormat("en-ES", {
  currency: "EUR",
  style: "currency",
  maximumSignificantDigits: 3,
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
