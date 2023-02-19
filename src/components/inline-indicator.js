import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import colors from '../utils/theme'

const InlineIndicator = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size="small" color={'#000'} />
    </View>
  )
}

export default InlineIndicator
