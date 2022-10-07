import { View, Text, TouchableOpacity, Image, Alert, Vibration, ActivityIndicator } from 'react-native'
import React, {useContext, useState} from 'react'
import folder from '../assets/notes.png'
// import folder from '../assets/folder.png'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../context';
import { deleteNoteAPI } from '../endpoints';

const Search = ({category, data}) => {
    const navigation = useNavigation()


  return (
        <>
            <TouchableOpacity className="rounded-lg flex-row justify-between items-center bg-white  py-1 px-3 h-20 mb-3" onPress={()=> navigation.navigate('Edit', {categoryT:category, data:data, id:id})}>
                <View className="flex flex-row space-x-3">
                    <Image 
                        source={folder}
                        className="h-14 w-14"
                    />
                    <View className="flex flex-col">
                        <Text className="font-bold text-lg">{category}</Text>
                        <Text className="font-semibold text-gray-400 text-md">{data}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
  )
}

export default Search