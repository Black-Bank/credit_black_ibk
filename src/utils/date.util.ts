export function getDataFormatted(date: string) {
  const day = date.split('/')[0];
  const month = date.split('/')[1];
  const year = date.split('/')[2];

  const months = [
    { monthNumber: '01', monthName: 'Janeiro' },
    { monthNumber: '02', monthName: 'Fevereiro' },
    { monthNumber: '03', monthName: 'Março' },
    { monthNumber: '04', monthName: 'Abril' },
    { monthNumber: '05', monthName: 'Maio' },
    { monthNumber: '06', monthName: 'Junho' },
    { monthNumber: '07', monthName: 'Julho' },
    { monthNumber: '08', monthName: 'Agosto' },
    { monthNumber: '09', monthName: 'Setembro' },
    { monthNumber: '10', monthName: 'Outubro' },
    { monthNumber: '11', monthName: 'Novembro' },
    { monthNumber: '12', monthName: 'Dezembro' },
  ];

  let monthComplete;

  months.map((item) => {
    if (item.monthNumber === month) {
      monthComplete = item.monthName;
    }
  });

  return `${day} de ${monthComplete} de ${year}`;
}

export function getPaymentDate(ISODate: string) {
  const date = new Date(ISODate);

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
