import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

import Fonts from '../utils/fonts'
import colors from '../utils/theme'
import Heading from './heading'

const ToolBar = () => {
  const navigation = useNavigation()
  const [value, setValue] = useState('')

  const AnimatedView = Animatable.createAnimatableComponent(View)

  return (
    <AnimatedView
      animation={'fadeInLeft'}
      duration={400}
      delay={400}
      style={styles.container}
    >
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          placeholder="Search cat name"
          value={value}
          onChangeText={val => setValue(val)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('AddCat')}
          style={styles.btn}
        >
          <Feather name="plus" color={colors[50]} size={18} />
          <Heading
            color={colors[50]}
            mx={10}
            size={18}
            fontFamily={Fonts.medium}
          >
            Add a cat
          </Heading>
        </TouchableOpacity>
      </View>
    </AnimatedView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    marginVertical: 20,
    paddingHorizontal: 20
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: '50%',
    backgroundColor: '#ffffff90',
    borderWidth: 1,
    borderColor: '#00000020',
    fontFamily: Fonts.bold,
    borderRadius: 15,
    height: 55,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  btn: {
    backgroundColor: colors[900],
    borderRadius: 15,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginStart: 10,
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.8,
    shadowRadius: 15
  }
})

export default ToolBar
