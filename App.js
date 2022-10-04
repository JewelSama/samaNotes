import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/Register';
import GlobalProvider from './context';
import Login from './screens/Login';
import Category from './screens/Category';
import NoteScreen from './screens/NoteScreen';


export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <GlobalProvider>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Note" component={NoteScreen} />
        </Stack.Navigator>
      </GlobalProvider>
    </NavigationContainer>
  );
}
