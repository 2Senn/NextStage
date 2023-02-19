import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Fonts from '../utils/fonts'

const Heading = ({ title, m, my, mx, mt, mb, color = "#fff", size = 20, fontFamily = Fonts.regular, children }) => {
  return (
    <Text
      style={{
        margin: m,
        marginVertical: my,
        marginHorizontal: mx,
        marginTop: mt,
        marginBottom: mb,
        color: color,
        fontSize: size,
        fontFamily: fontFamily
      }}
    >
      {children}
    </Text>
  )
}

export default Heading
