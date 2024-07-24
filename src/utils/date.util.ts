export function getCurrentDateFormatted() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const monthNames = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ];
  const month = monthNames[date.getMonth()];

  return `${day}/${month}`;
}
