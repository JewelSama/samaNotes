import { View, Text, TouchableOpacity, Image, Alert, Vibration, ActivityIndicator } from 'react-native'
import React, {useContext, useState} from 'react'
import folder from '../assets/notes.png'
// import folder from '../assets/folder.png'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../context';
import { deleteNoteAPI } from '../endpoints';

const Note = ({category, data, id, date}) => {
    const navigation = useNavigation()
    const [isPressed, setIsPressed] = useState(false)
    const [loading, setLoading] = useState(false)

    const {token, setNotes} = useContext(GlobalContext)


    const deleteHandler = (id) => {
        // console.log(id);
        Alert.alert('Delete', 'Are you Sure?', [{text: 'Cancel',},{text: 'Delete', onPress: () => {
            setLoading(true)
            fetch(deleteNoteAPI+id, {
                method: 'DELETE',
                headers: new Headers({
                    'Authorization': `Bearer ${token}`
                }),
            })
            .then(res => res.json())
            .then(resp => {
                setLoading(false)
                setNotes(resp)
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
            })
        }}])    
    }

  return (
    <>
    <TouchableOpacity className="rounded-lg flex-row justify-between items-center bg-white  py-1 px-3 h-20 mb-3" onPress={()=> navigation.navigate('Edit', {categoryT:category, data:data, id:id, date:date})} onLongPress={() => setIsPressed(!isPressed)}>
                    <View className="flex flex-row space-x-3">
                        <Image 
                            source={folder}
                            className="h-14 w-14"
                        />
                        <View className="flex flex-col">
                            <Text className="font-bold text-lg">{category}</Text>
                            <Text className="font-semibold text-gray-400 text-md">{data.slice(0, 30)}...</Text>
                        </View>
                    </View>
                    <TouchableOpacity className={isPressed ? "absolute right-2 top-3" : ""} onPress={() => setIsPressed(!isPressed)}>
                    <Entypo name="dots-three-vertical" size={22} color="rgb(209, 213, 219)" />
                    </TouchableOpacity>
                    {isPressed && (
                        <TouchableOpacity className="absolute bg-gray-200 py-2 px-5 right-5 bottom-1 rounded-sm" onPress={()=> deleteHandler(id)}>
                            <Text className="text-gray-600 font-bold">{loading ? <ActivityIndicator /> : 'Delete'}</Text>
                        </TouchableOpacity>
                    )}
                </TouchableOpacity>
                    </>
  )
}

export default Note