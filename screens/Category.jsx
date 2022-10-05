import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView, Alert, Vibration, ToastAndroid } from 'react-native'
import React, {useContext} from 'react'
import GlobalStyles from '../GlobalStyles'
import avatar from '../assets/avatar3.jpg'
import { Entypo } from '@expo/vector-icons';
import Note from '../components/Note'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalContext } from '../context';

const Category = () => {
    const { user } = useContext(GlobalContext)
    console.log(user);

    const navigation = useNavigation()
    const logoutHandler = () => {
        Alert.alert('Logout', 'Are you Sure you want to logout?', [{text: 'Cancel',},{text: 'Logout', onPress: () => {ToastAndroid.show("Logged out!", ToastAndroid.SHORT); Vibration.vibrate(2000)} }])
    }
  return (
    <>
        <SafeAreaView className="bg-white h-28  flex flex-row justify-between px-4 items-center" style={GlobalStyles.droidSafeArea}>
            <View className="flex flex-row items-center space-x-3">
                <TouchableOpacity className="bg-gray-400 h-10 w-10 items-center justify-center rounded-full">
                    <Image 
                        source={avatar}
                        className=" w-8 h-8 rounded-full"
                    />
                    
                </TouchableOpacity>
                <Text className="text-lg font-bold">{user && user.username}</Text>
            </View>
            <TouchableOpacity>
                <Entypo name="magnifying-glass" size={30} color="rgb(156, 163, 175)" />
            </TouchableOpacity>
        </SafeAreaView>
        <ScrollView className="bg-gray-200" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10}}>
            <View className="px-4  mt-5">
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </View>
        </ScrollView>
        <TouchableOpacity style={{elevation: 3}} className="bg-blue-400  absolute  h-12 w-12 bottom-28 right-5 rounded-full items-center justify-center" onPress={() => navigation.navigate('Note')}>
            <Entypo name="plus" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{elevation: 3}} className="bg-orange-400  absolute  h-14 w-14 bottom-10 right-5 rounded-full items-center justify-center" onPress={logoutHandler}>
            <MaterialCommunityIcons name="logout" size={24} color="white" />
        </TouchableOpacity>
    </>
  )
}

export default Category