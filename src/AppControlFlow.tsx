import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './AppNavigator';
import Toast from './components/Toast';
import { toastRef } from './util/action';
import { Text } from 'react-native';
import Signup from './components/Signup';
import { ScrollView } from 'react-native-gesture-handler';

const AppControlFlow: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <ScrollView> */}
        {/* <AppNavigator /> */}
        <Signup />
        {/* </ScrollView> */}
      </NavigationContainer>
      <Toast {...{ ref: toastRef }} />
    </SafeAreaProvider>
  );
};

export default AppControlFlow;
