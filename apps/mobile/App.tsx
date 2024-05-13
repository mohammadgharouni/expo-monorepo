import { Paragraph } from 'components';
import { StyleSheet, View } from 'react-native';
import AppContainer from 'components/src/app';
export default function App() {
  return (
    <View style={styles.container}>
      <Paragraph style={{ fontSize: 64 }}>hiiii 3</Paragraph>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
