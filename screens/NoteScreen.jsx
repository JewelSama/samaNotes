import { View, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import GlobalStyles from '../GlobalStyles'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NoteScreen = () => {
  const navigation = useNavigation()
  const [category, setCategory] = useState('')
  const [note, setNote] = useState('')

  return (
    <>
      <SafeAreaView className="flex flex-row  justify-between mt-3 px-4" style={GlobalStyles.droidSafeArea}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="rgb(107, 114, 128)" />
          </TouchableOpacity>
          <TouchableOpacity>
            {!note ? 
            <Entypo name="dots-three-vertical" size={20} color="rgb(107, 114, 128)" /> : (
            <Feather name="check" size={26} color="rgb(107, 114, 128)" /> )
            }
          </TouchableOpacity>
      </SafeAreaView>
      <Text className="text-center text-sm mt-2 font-semibold text-gray-400">May 27, 2021 at 2:57</Text>
      <TextInput 
        className="text-xl px-6 mt-4 font-bold"
        placeholder='Title'
        value={category}
        onChangeText={setCategory}
      />
      <ScrollView className="mt-4">
        <View className="px-5">
          <TextInput
           className='text-lg ' 
            multiline={true}
            placeholder="Note something down"
            autoFocus={true}
            selectionColor="black"
            value={note}
            onChangeText={setNote}
          />
        </View> 
      </ScrollView>
    </>
  )
}

export default NoteScreen