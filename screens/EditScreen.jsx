import { View, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, Alert, Vibration, ActivityIndicator, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import GlobalStyles from '../GlobalStyles'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { editNoteAPI } from '../endpoints';
import { useContext } from 'react';
import { GlobalContext } from '../context';
import dateFormat, { masks } from "dateformat";


const EditScreen = ({navigation, route}) => {
  // const navigation = useNavigation()
  const {categoryT, data, id, date} = route.params
  const [category, setCategory] = useState(categoryT)
  const [note, setNote] = useState(data)
  const [loading, setLoading] = useState(false)
  
  const {token, setNotes, notes} = useContext(GlobalContext)
  console.log(date);

  
  // console.log(dateFormat);


  const saveNoteHandler = () => {
    if(note.length < 1){
      return alert('Note cannot be empty')
    }
    if(!category){
      return alert('Title cannot be empty')
    }
    const formData = {
      category: category,
      note: note,
    }
    setLoading(true)
    // console.log(typeof note);
    fetch(editNoteAPI+id, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(resp => {
      setLoading(false)
      setNotes(resp)
      // console.log(notes);
      navigation.navigate('Category', {notes:notes})
      Vibration.vibrate(1000)
      ToastAndroid.show("Note updated !", ToastAndroid.SHORT);
    })
    .catch(err => {
      setLoading(false)
      Alert.alert('Error', err.message)
      Vibration.vibrate(1000)
      console.log(err.message);
    })
  }
//   console.log(id)

  return (
    <>
      <SafeAreaView className="flex flex-row  justify-between mt-3 px-4" style={GlobalStyles.droidSafeArea}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="rgb(107, 114, 128)" />
          </TouchableOpacity>
            {note === data ? 
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={20} color="rgb(107, 114, 128)" /> 
          </TouchableOpacity>
          : (
              <TouchableOpacity onPress={saveNoteHandler}>
                <Feather name="check" size={26} color="rgb(107, 114, 128)" /> 
              </TouchableOpacity>
            )
            }
      </SafeAreaView>
      {loading && <ActivityIndicator size="large" color="rgb(234, 88, 12)" />}
      <Text className="text-center text-sm mt-2 font-semibold text-gray-400">{dateFormat(date, "mmm dS, yyyy 'at' h:MM")}</Text>
      <TextInput 
        className="text-xl px-6 mt-4 font-bold"
        placeholder='Title'
        value={category}
        onChangeText={setCategory}
        caretHidden={loading}
        editable={!loading}
      />
      <ScrollView className="mt-4">
        <View className="px-5">
          <TextInput
           className='text-lg ' 
            multiline={true}
            placeholder="Note something edit down"
            autoFocus={true}
            selectionColor="black"
            value={note}
            onChangeText={setNote}
            caretHidden={loading}
            editable={!loading}
          />
        </View> 
      </ScrollView>
    </>
  )
}

export default EditScreen