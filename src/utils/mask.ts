export const valueToCurrency = (value: number) => {
  return 'R$' + value.toFixed(3).replace('.', ',');
};
