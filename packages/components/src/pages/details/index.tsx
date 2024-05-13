import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Pressable, Text, FlatList } from 'react-native';
export function HomeScreen({}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#CCC',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Details', { id: '123123' })}
      >
        <Text>Go to Details</Text>
      </Pressable>
      <Pressable
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#CCC',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>fa</Text>
      </Pressable>
      <Pressable
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#CCC',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>en</Text>
      </Pressable>
      <Text>i18n : </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 24,
  },
});
