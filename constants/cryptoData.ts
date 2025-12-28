export interface CryptoItem {
  id: string;
  pair: string;
  price: number;
  change: number;
  isUp?: boolean;
}

export const CRYPTO_DATA: CryptoItem[] = [
  { id: 'BTC', pair: 'BTC/USDT', price: 43500, change: 1.25 },
  { id: 'ETH', pair: 'ETH/USDT', price: 2350, change: -0.85 },
  { id: 'SOL', pair: 'SOL/USDT', price: 98, change: 2.4 },
  { id: 'BNB', pair: 'BNB/USDT', price: 315, change: 0.45 },
  { id: 'XRP', pair: 'XRP/USDT', price: 0.62, change: -1.2 },
  { id: 'ADA', pair: 'ADA/USDT', price: 0.55, change: 0.9 },
  { id: 'DOGE', pair: 'DOGE/USDT', price: 0.081, change: -0.4 },
  { id: 'AVAX', pair: 'AVAX/USDT', price: 37, change: 1.7 }
];
