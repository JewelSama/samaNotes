import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import GlobalStyles from '../GlobalStyles'
import { AntDesign } from '@expo/vector-icons';
import avatar from '../assets/avatar3.jpg'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Search from '../components/Search';
import noResult from '../assets/noResult.png'
import { useState } from 'react';
import { GlobalContext } from '../context';

const SearchScreen = () => {
  const navigation = useNavigation()
  const [search, setSearch] = useState('')

  const {notes} = useContext(GlobalContext)

  let searched 

  // const itemss = () => {
    if(search.length > 0){

       searched =  notes.filter(note => note.category.toLowerCase().includes(search.toLowerCase()) || note.note.toLowerCase().includes(search.toLowerCase()))
      // return searched
    } else {
       searched = []
      // return searched
    }
  // }
  //  searched.push(itemss)
  // console.log(searched.length)


  return (
    <>
      <SafeAreaView className="flex flex-row  items-center  px-4 justify-between" style={GlobalStyles.droidSafeArea}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <AntDesign name="arrowleft" size={28} color="rgb(75, 85, 99)" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">Search</Text>
        <TouchableOpacity className="bg-gray-400 h-10 w-10 items-center justify-center rounded-full">
          <Image 
            source={avatar}
            className=" w-8 h-8 rounded-full"
          />              
        </TouchableOpacity>
      </SafeAreaView>
      <View className="flex flex-row  justify-between px-5 mt-4">
        <View className="flex flex-row items-center justify-center bg-white h-11 w-64 px-5 mb-3 rounded-lg">
          <TextInput 
            // style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
            className="w-full h-full font-semibold text-gray-600 text-lg"
            placeholder="Search notes"
            value={search}
            onChangeText={setSearch}
            autoFocus={true}
            // caretHidden={loading}
            selectionColor="rgb(234, 88, 12)"
          />
        {search && (
          <TouchableOpacity className="bg-gray-200 h-5 w-5 items-center justify-center rounded-md" onPress={() => setSearch("")}>  
            <FontAwesome name="times" size={16} color="rgb(107, 114, 128)" />
          </TouchableOpacity>
        )}
        </View>
        <TouchableOpacity className="bg-white  h-11 w-11 items-center justify-center rounded-md">
        <Feather name="filter" size={20} color="rgb(234, 88, 12)" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="px-4 mt-4">
        
        {searched.length > 0 ? (
          searched.map(item => (
            <Search category={item.category} data={item?.note} id={item?.id} key={item?.id} />
          ))
        ) : (
          <Image 
            source={noResult}
            className={`w-80 self-center mt-32 h-80`}
          />
        )}
        </View>
      </ScrollView>
    </>
  )
}

export default SearchScreen