import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type SortType = 'price' | 'change';

interface Props {
  sortType: SortType;
  onChange: (type: SortType) => void;
}

export default function SortHeader({ sortType, onChange }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onChange('price')}>
        <Text style={[styles.text, sortType === 'price' && styles.active]}>
          Price ↓
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onChange('change')}>
        <Text style={[styles.text, sortType === 'change' && styles.active]}>
          24h % ↓
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222'
  },
  text: {
    color: '#aaa'
  },
  active: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
