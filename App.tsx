import React, { FC } from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import MainStack from './screens/MainStack'
import { NavigationContainer } from '@react-navigation/native';

const App: FC = () => {
  let [fontsLoaded] = useFonts({
    'dogbyte': require('./assets/fonts/dogbyte.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer
        fallback={
          <Text>{'Loading...'}</Text>
        }
      >
        <MainStack />
      </NavigationContainer>
    );
  }
};

export default App;