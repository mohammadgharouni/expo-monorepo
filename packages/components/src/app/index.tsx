import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../pages/details';
import { DetailsScreen } from '../pages/profile';

import { RootStackParamList, linking } from 'core';
// import { useInitialApp } from "./core/hooks/useInitialApp";
// import { withProviders } from "./components";
// import { HomeScreen } from "./components/pages/details";
// import { DetailsScreen } from "./components/pages/profile";
// import { useTranslation } from "react-i18next";
// import * as SplashScreen from "expo-splash-screen";
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const navigationRef = createNavigationContainerRef<RootStackParamList>();

  // const { canLoadApp } = useInitialApp();
  // const { i18n } = useTranslation();
  // const shouldBeRTL = i18n.language === 'fa';

  // if (!canLoadApp) {
  //   return <ActivityIndicator />;
  // }
  return (
    <View
      style={{ flex: 1 }}
      //  dir={shouldBeRTL ? 'rtl' : 'ltr'}
    >
      <NavigationContainer
        ref={navigationRef}
        linking={linking}
        // onReady={async () => await SplashScreen.hideAsync()}
        fallback={<Text>Loading...</Text>}
      >
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
