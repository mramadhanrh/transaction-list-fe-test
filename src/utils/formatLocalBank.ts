export const formatLocalBank = (value: string) =>
  value.length > 4
    ? `${value.charAt(0).toUpperCase()}${value.slice(1)}`
    : value.toUpperCase();
