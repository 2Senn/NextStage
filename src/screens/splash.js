import React, { useEffect } from 'react'
import { View, Image, Text, Dimensions, StatusBar, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable'

const { width, height } = Dimensions.get('screen')
const IMAGE_WIDTH = width * 0.8
const IMAGE_HEIGHT = IMAGE_WIDTH / (16 / 9)

const Splash = ({ navigation }) => {
  const AnimatedView = Animatable.createAnimatableComponent(View)

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home") 
    }, 2000)
  }, [])

  return (
    <View
      style={{
        backgroundColor: '#000',
        height,
        width,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <StatusBar hidden />
      <AnimatedView
        animation="fadeIn"
        duration={600}
        delay={200}
        style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT, bottom: 60 }}
      >
        <Image
          source={require('../assets/images/cat-load.png')}
          style={{ width: '100%', height: '100%', marginBottom: 20 }}
          resizeMode="cover"
        />
        <ActivityIndicator size="large" color="#dbf2ef"/>
      </AnimatedView>
    </View>
  )
}

export default Splash
