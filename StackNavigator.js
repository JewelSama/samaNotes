import React, {useContext} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/Register';
import  { GlobalContext } from './context';
import Login from './screens/Login';
import Category from './screens/Category';
import NoteScreen from './screens/NoteScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
  const { user } = useContext(GlobalContext)
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {user.length === 0 ? (
          <>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Note" component={NoteScreen} />
          </>
        )
        }
      </Stack.Navigator>
  )
}

export default StackNavigator