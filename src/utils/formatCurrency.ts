const formatCurrency = (value: number): string =>
  `Rp${value.toLocaleString('id-ID')}`;

export default formatCurrency;
