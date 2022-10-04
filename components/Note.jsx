import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import folder from '../assets/folder.png'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Note = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity className="rounded-lg flex-row justify-between items-center bg-white  py-1 px-3 h-20 mb-3" onPress={()=> navigation.navigate('Note')}>
                    <View className="flex flex-row space-x-3">
                        <Image 
                            source={folder}
                            className="h-14 w-14"
                        />
                        <View className="flex flex-col">
                            <Text className="font-bold text-lg">Work</Text>
                            <Text className="font-semibold text-gray-400 text-md">3 notes</Text>
                        </View>
                    </View>
                    <TouchableOpacity >
                    <Entypo name="dots-three-vertical" size={18} color="rgb(209, 213, 219)" />
                    </TouchableOpacity>
                </TouchableOpacity>
  )
}

export default Note