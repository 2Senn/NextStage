import React from 'react'
import {
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import { useQuery } from 'react-query'
import { fetchCats } from '../hooks'
import Fonts from '../utils/fonts'
import colors from '../utils/theme'
import Heading from './heading'

const CatList = () => {
  const { data, isLoading, isError } = useQuery('cats', fetchCats)

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="small" color={colors[900]} />
      </View>
    )
  }
  if (!data || isError) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40
        }}
      >
        <Image
          source={require('../assets/images/cat-secondary.png')}
          style={{ height: 200, width: 200, borderRadius: 40 }}
          resizeMode="cover"
        />
        <Heading color={colors[900]} size={24} fontFamily={Fonts.bold} mt={20}>
          No cats added
        </Heading>
      </View>
    )
  }

  console.log(data)

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Heading color="#000">{item.name}</Heading>
            </View>
          )
        }}
      />
    </View>
  )
}

export default CatList
