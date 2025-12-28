import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import CryptoRow from '@/components/market/CryptoRow';
import SortHeader from '@/components/market/SortHeader';
import { simulatePriceUpdate } from '@/components/utils/priceSimulator';
import { CRYPTO_DATA, CryptoItem } from '@/constants/cryptoData';

type SortType = 'price' | 'change';

export default function CryptoMarketWatch() {
  const [data, setData] = useState<CryptoItem[]>(CRYPTO_DATA);
  const [sortType, setSortType] = useState<SortType>('price');

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(simulatePriceUpdate));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const sortedData = useMemo(() => {
    const list = [...data];
    return sortType === 'price'
      ? list.sort((a, b) => b.price - a.price)
      : list.sort((a, b) => b.change - a.change);
  }, [data, sortType]);

  return (
    <LinearGradient
      colors={['#0d2c41ff', '#444b56ff', '#cfaeaeff']}
      style={styles.container}
    >
      {/* App Title */}
      <Text style={styles.title}>CRYPTO TRADING APP</Text>

      {/* Sort Header */}
      <SortHeader sortType={sortType} onChange={setSortType} />

      {/* Crypto List */}
      <FlatList
        data={sortedData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CryptoRow item={item} />}
        contentContainerStyle={styles.list}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f6f2f2ff',
    marginBottom: 10
  },
  list: {
    paddingBottom: 20
  }
});
