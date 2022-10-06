import React, {useContext} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/Register';
import  { GlobalContext } from './context';
import Login from './screens/Login';
import Category from './screens/Category';
import NoteScreen from './screens/NoteScreen';
import EditScreen from './screens/EditScreen';
import SearchScreen from './screens/SearchScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
  const { user } = useContext(GlobalContext)
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {user.length === 0 ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <>
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Note" component={NoteScreen} />
            <Stack.Screen name="Edit" component={EditScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </>
        )
        }
      </Stack.Navigator>
  )
}

export default StackNavigator