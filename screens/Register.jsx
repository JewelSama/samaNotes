import { ScrollView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../assets/avatar3.jpg';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles';

const Register = () => {
    const navigation = useNavigation()

    const RegisterHandler = () => {
        navigation.navigate('Category')
    } 

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 justify-center px-8 " style={GlobalStyles.droidSafeArea}>
                
                <View className="items-center mt-10">
                    <Image source={Logo} style={{ width: 100, height: 140, resizeMode: "center" }} />
                </View>

                <Text className="text-2xl my-5 font-bold">Create an account</Text>

                <View className="mb-4">
                    <TextInput
                        style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
                        className="border-zinc-300 px-3 mb-3 rounded-lg"
                        placeholder="Enter Username"
                        // value={name}
                        // onChangeText={setName}
                        autoFocus={true}
                    />

                    <TextInput
                        style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
                        className="border-zinc-300 px-3 mb-5 rounded-lg"
                        placeholder="Enter Email"
                        // value={email}
                        // onChangeText={setEmail}
                    />
                    <TextInput
                        style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
                        className="border-zinc-300  px-3 mb-5 rounded-lg"
                        placeholder="Enter Password"
                        // value={password}
                        // onChangeText={setPassword}
                    />
                    <TextInput
                        style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
                        className="border-zinc-300 px-3 mb-5 rounded-lg"
                        placeholder="Confirm Password"
                        // value={conf_password}
                        // onChangeText={setPasswordConfirm}
                    />

                    <TouchableOpacity className="bg-blue-400 rounded   p-2 mb-10" onPress={RegisterHandler}>
                        <Text className="text-center text-xl font-bold  text-white mt-1">Register</Text>
                    </TouchableOpacity>
                    

                    <View className="flex flex-row justify-center items-end">
                        <Text className="text-lg text-slate-400">Already have an account? </Text>
                        <TouchableOpacity className="" onPress={()=> navigation.navigate('Login')}>
                            <Text className="text-lg font-bold text-green-600 text-bold">Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Do not remove */}
                <View className="flex-1 justify-end abs"></View>
                {/* Do not remove */}

            </View>
    </ScrollView>
  )
}

export default Register
