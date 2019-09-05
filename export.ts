/**
 * @author Han Lin Yap
 * Feel free to donate btc: 1NibBDZPvJCm568CZMnJUBJoPyUhW7aSag
 */
declare var require: any;

interface Data {
  timestamp: string;
  symbol: string;
  open: number;
  high: number;
  low: number;
  close: number;
  trades: number;
  volume: number;
  vwap: number;
  lastSize: number;
  turnover: number;
  homeNotional: number;
  foreignNotional: number;
}

const formattedDayDate = date =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export function price(startDate: Date, endDate: Date) {
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();

  let data: Data[] = [];
  for (let days = 0; startTime + days * 86400000 < endTime; days++) {
    const date = new Date(startTime + days * 86400000);
    data = data.concat(require(`./data/${formattedDayDate(date)}.json`));
  }
  return data;
}

export default {
  price,
}
