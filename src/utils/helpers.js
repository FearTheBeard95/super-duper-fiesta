export function dateToString(value) {
  const date = new Date(value);

  return (
    date.getDate() +
    '-' +
    date.toLocaleString('default', { month: 'long' }) +
    '-' +
    date.getFullYear()
  );
}
