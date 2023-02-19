import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const fetchCats = async () => {
  let res = await AsyncStorage.getItem('cats')
  let data = await JSON.parse(res)
  return data
}

export const addCat = async values => {
  let old = await AsyncStorage.getItem('cats') 
  let oldArr = await JSON.parse(old) 
  let newData = oldArr ? oldArr.push(values) : [values]
  let stringified = JSON.stringify(newData)
  await AsyncStorage.setItem('cats', stringified)
    .then(res => console.log(res))
    .catch(e => console.log(e))

  return true
}

export const fetchRandomImage = async () => {
  let res = await fetch("https://aws.random.cat/meow")
  let json = await res.json()
  console.log(json)
  return json
}
