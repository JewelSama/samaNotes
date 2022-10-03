import { ScrollView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../assets/avatar3.jpg';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles';

const Login = () => {
    const navigation = useNavigation()
  return (
    <View className="flex-1 justify-center px-8" style={GlobalStyles.droidSafeArea}>
            
    <View className="items-center mt-10">
        <Image source={Logo} style={{ width: 100, height: 140, resizeMode: "center" }} />
    </View>

    <Text className="text-2xl my-5">Hi, Welcome 👋</Text>

    <View>
        <TextInput
            style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
            className="border-zinc-300 px-3 mb-3"
            placeholder="Email"
            // value={username}
            // onChangeText={setUsername}
            autoFocus={true}
            // onSubmitEditing={handleLogIn}
        />

        <TextInput
            style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
            className="border-zinc-300 px-3 mb-5"
            placeholder="Password"
            // value={password}
            textContentType={'password'}
            // onChangeText={setPassword}
            // onSubmitEditing={handleLogIn}
        />

        <TouchableOpacity className="bg-blue-400 rounded justify-center items-center p-2 mb-10">
            <Text className="text-center text-xl font-bold self-center text-white mt-1">Login</Text>
        </TouchableOpacity>
        

        <View className="flex flex-row justify-center items-end">
            <Text className="text-lg text-slate-400">Don't have an account? </Text>
            <TouchableOpacity className="" onPress={()=> navigation.navigate('Register')}>
                <Text className="text-lg font-bold text-green-600 text-bold">Sign Up</Text>
            </TouchableOpacity>
        </View>
    </View>
    
    {/* Do not remove */}
    <View className="flex-1 justify-end bs"></View>
    {/* Do not remove */}

</View>

  )
}

export default Login