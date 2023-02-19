import React from 'react'
import { SafeAreaView, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Header } from '../components'
import colors from '../utils/theme'

const { width, height } = Dimensions.get('screen')

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors[50] }}>
      <LinearGradient
        colors={[colors[500], colors[400], colors[300], colors[50]]}
        style={{
          position: 'absolute',
          top: 0,
          height: height * 0.3,
          width: '100%'
        }}
      />
      <Header />
      {children}
    </SafeAreaView>
  )
}

export default Layout
