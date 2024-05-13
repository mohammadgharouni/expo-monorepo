import { useNavigation } from '@react-navigation/native';
import { i18nInstance } from 'core/src/i18n';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, Pressable, Text } from 'react-native';
export function HomeScreen({}) {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const changeLang = async (lang: 'fa' | 'en') => {
    i18nInstance.changeLanguage(lang);
  };
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
        onPress={() => changeLang('fa')}
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
        onPress={() => changeLang('en')}
      >
        <Text>en</Text>
      </Pressable>
      <Text>i18n : {t('test')}</Text>
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
