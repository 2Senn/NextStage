import React from 'react'
import { View, Text, SafeAreaView, ActivityIndicator, Image, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { CatList, Header, Heading, Layout } from '../components'
import ToolBar from '../components/toolbar'
import { fetchCats } from '../hooks'
import Fonts from '../utils/fonts' 
import colors from '../utils/theme'

const { width, height } = Dimensions.get('screen')

const Home = ({ navigation }) => {


  return (
    <Layout>
      <ToolBar />
      <CatList />
    </Layout>
  )
}


export default Home
