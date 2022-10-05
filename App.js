import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import GlobalProvider from './context';

export default function App() {
  

  return (
    <NavigationContainer>
      <GlobalProvider>
        <StackNavigator />
      </GlobalProvider>
    </NavigationContainer>
  );
}
