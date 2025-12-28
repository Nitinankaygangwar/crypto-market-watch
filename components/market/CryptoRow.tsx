import { CryptoItem } from '@/constants/cryptoData';
import React, { memo, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  item: CryptoItem;
}

function CryptoRow({ item }: Props) {
  const prevPrice = useRef(item.price);
  const priceChanged = prevPrice.current !== item.price;

  useEffect(() => {
    prevPrice.current = item.price;
  }, [item.price]);

  return (
    <View style={styles.row}>
      <Text style={styles.pair}>{item.pair}</Text>

      <Text
        style={[
          styles.price,
          priceChanged && { color: item.isUp ? '#00c853' : '#ff5252' }
        ]}
      >
        {item.price}
      </Text>

      <Text
        style={[
          styles.change,
          { color: item.change >= 0 ? '#00c853' : '#ff5252' }
        ]}
      >
        {item.change}%
      </Text>
    </View>
  );
}

export default memo(CryptoRow);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#222'
  },
  pair: {
    color: '#fff',
    fontWeight: '600'
  },
  price: {
    width: 110,
    textAlign: 'right',
    color: '#fff'
  },
  change: {
    width: 80,
    textAlign: 'right'
  }
});
