import { useNavigation } from '@react-navigation/native';
import { View, Button, StyleSheet, Pressable, Text, Animated } from 'react-native';

export function DetailsScreen({}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#CCC',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}
      >
        <Text>Go Back</Text>
      </Pressable>
      <Animated.Image
        source={{ uri: 'https://picsum.photos/id/39/200' }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
