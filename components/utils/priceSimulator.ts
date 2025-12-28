import { CryptoItem } from '@/constants/cryptoData';

export const simulatePriceUpdate = (coin: CryptoItem): CryptoItem => {
  const delta = (Math.random() * 2 - 1) * 0.7; // -0.7% to +0.7%

  const newPrice = +(coin.price * (1 + delta / 100)).toFixed(4);
  const newChange = +(coin.change + delta).toFixed(2);

  return {
    ...coin,
    price: newPrice,
    change: newChange,
    isUp: newPrice > coin.price
  };
};
