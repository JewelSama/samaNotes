import { ScrollView, Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import Logo from '../assets/avatar3.png';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles';
import { registerAPI } from '../endpoints';
import { useContext } from 'react';
import { GlobalContext } from '../context';

const Register = () => {
    const navigation = useNavigation()
    const  [username, setUsername] = useState("")
    const  [email, setEmail] = useState("")
    const  [password, setPassword] = useState("")
    const  [passwordConfirm, setPasswordConfirm] = useState("")
    const [loading, setLoading] = useState(false)

    const {setUser, setToken} = useContext(GlobalContext)
    

    const RegisterHandler = () => {
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(username.trim() < 1 || email.trim() < 1 || password.trim() < 1 || passwordConfirm.trim() < 1){
            alert('Fill in all fields')
        } else if(password !== passwordConfirm){
            alert('Passwords do not match!')
        }else if(password.length < 6){
            alert('Password must be 6 characters long!')
        }else if(!email.match(mailFormat)){
            alert('Email is not valid')
        }


        const formData = {
            username: username.trim(),
            email: email.trim(),
            password: password.trim(),
            password_confirmation: passwordConfirm.trim(),
        }
        setLoading(true)

        fetch(registerAPI, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(resp => {
            setLoading(false)
            setToken(resp?.token)
            setUser(resp?.user)
            // console.log('gooddd')
            navigation.navigate('Category')
        })
        .catch(err => {
            setLoading(false)
            Alert.alert('Error', err.message)
        })

    } 

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 justify-center px-8 " style={GlobalStyles.droidSafeArea}>
                
                <View className="items-center mt-6">
                <Image source={Logo} className="w-48 h-48" />
                </View>

                <Text className="text-2xl my-5 font-bold">Create an account</Text>

                <View className="mb-4">
                    <TextInput
                        style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
                        className="border-zinc-300 px-3 mb-3 rounded-lg"
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        autoFocus={true}
                        caretHidden={loading}
                        selectionColor="rgb(234, 88, 12)"
                        editable={!loading}
                    />

                    <TextInput
                        style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
                        className="border-zinc-300 px-3 mb-5 rounded-lg"
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        caretHidden={loading}
                        selectionColor="rgb(234, 88, 12)"
                        editable={!loading}
                    />
                    <TextInput
                        style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
                        className="border-zinc-300  px-3 mb-5 rounded-lg"
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        caretHidden={loading}
                        selectionColor="rgb(234, 88, 12)"
                        editable={!loading}
                    />
                    <TextInput
                        style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
                        className="border-zinc-300 px-3 mb-5 rounded-lg"
                        placeholder="Confirm Password"
                        value={passwordConfirm}
                        onChangeText={setPasswordConfirm}
                        caretHidden={loading}
                        selectionColor="rgb(234, 88, 12)"
                        editable={!loading}
                    />

                    <TouchableOpacity className={`${loading ? 'bg-orange-300' : 'bg-orange-400'} rounded   p-2 mb-10`} onPress={RegisterHandler} disabled={loading ? true : false}>
                        <Text className="text-center text-xl font-bold  text-white mt-1">Register{loading && <ActivityIndicator size="large" color="#fff" />}</Text>
                    </TouchableOpacity>
                    

                    <View className="flex flex-row justify-center items-end">
                        <Text className="text-lg text-slate-400">Already have an account? </Text>
                        <TouchableOpacity className="" onPress={()=> navigation.navigate('Login')}>
                            <Text className="text-lg font-bold text-blue-400 text-bold">Login</Text>
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
