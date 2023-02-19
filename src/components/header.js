import React from 'react'
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'

import Heading from './heading'
import Fonts from '../utils/fonts'
import colors from '../utils/theme'

const { width, height } = Dimensions.get('screen')

const Header = () => {
  
  const AnimatedView = Animatable.createAnimatableComponent(View)
  
  return (
    <AnimatedView animation={"fadeIn"} duration={500} style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
        <Image
          source={require('../assets/images/cat-load.png')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <Heading color={colors[900]} size={24} fontFamily={Fonts.bold}>
          Jacks Cats
        </Heading>
      </View>
    </AnimatedView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    paddingHorizontal: 15,
    flexDirection: 'row'
  }
})
export default Header
