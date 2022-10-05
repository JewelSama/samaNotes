import { ScrollView, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React, {useState, useContext} from 'react'
import Logo from '../assets/avatar3.jpg';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles';
import { GlobalContext } from '../context';
import { loginAPI } from '../endpoints';


const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const {setLoggedIn, loggedIn,  setToken, setUser } = useContext(GlobalContext)


    const loginHandler = () => {
        if(email.trim() < 1 && password.trim() < 1 ){
            return alert('Email and password are required')
        } else if(email.trim() < 5 || !email.includes('@')){
            return alert('Email is not valid')
        } else if(password.trim() < 1){
            return alert('Password is required')
        }
        const formData = {
            email: email.trim(),
            password: password.trim()
        }
        setLoading(true)

        fetch(loginAPI, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                throw new Error('Invalid credentials')
            }
        })
        .then(resp => {
            console.log(resp?.user?.username);
            // console.log(resp?.user?.username);
            setLoading(false);
            setLoggedIn(true)
            console.log(loggedIn);
            console.log(resp)
            // if(resp.status){
                setLoggedIn(true);
                setToken(resp?.token)
                setUser(resp?.user)
                console.log('asm');
                navigation.navigate('Category')
            // }
        }).catch(err => {
            setLoading(false);
            Alert.alert('Error', err.message)
            // console.log(err.message);
        })
    } 


  return (
    <View className="flex-1 justify-center px-8" style={GlobalStyles.droidSafeArea}>
            
    <View className="items-center mt-10">
        <Image source={Logo} style={{ width: 100, height: 140, resizeMode: "center" }} />
    </View>

    <Text className="text-2xl my-5 font-semibold">Welcome back 🗒</Text>

    <View>
        <TextInput
            style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
            className="border-zinc-300 px-3 mb-3"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoFocus={true}
            onSubmitEditing={loginHandler}
        />

        <TextInput
            style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
            className="border-zinc-300 px-3 mb-5"
            placeholder="Password"
            value={password}
            textContentType={'password'}
            onChangeText={setPassword}
            onSubmitEditing={loginHandler}
        />

        <TouchableOpacity className={`${loading ? 'bg-blue-300' : 'bg-blue-400'} rounded justify-center items-center mt-4 p-2 mb-10`} onPress={loginHandler} disabled={loading ? true : false}>
            <Text className="text-center text-xl font-bold self-center text-white mt-1">Login{loading ? '...' : ""}</Text>
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