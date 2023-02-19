import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native'
import Fonts from '../utils/fonts'
import colors from '../utils/theme'
import Heading from './heading'

const { width, height } = Dimensions.get('screen')

const CustomInput = ({
  ph,
  title,
  isEditable = true,
  style,
  handleValue,
  children
}) => {
  const [value, setValue] = useState('')

  return (
    <View>
      <Heading alignSelf="flex-start" color={colors[900]} size={24} fontFamily={Fonts.bold} mb={10}>
        {title}
      </Heading>
      <TextInput
        placeholder={ph}
        style={[styles.input, { height: 75 }]}
        autoCapitalize="sentences"
        placeholderTextColor={colors[600]}
        value={value}
        onChangeText={val => setValue(val.trim())}
        onBlur={() => handleValue(value)}
      />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors[900],
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    fontFamily: Fonts.semiBold,
    fontSize: 18
  },
})

export default CustomInput
