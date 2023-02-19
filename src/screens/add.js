import React, { useState } from 'react'
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Alert,
  StyleSheet
} from 'react-native'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import Feather from 'react-native-vector-icons/Feather'

import { CustomInput, Heading, Layout } from '../components'
import InlineIndicator from '../components/inline-indicator'
import { addCat, fetchRandomImage } from '../hooks'
import Fonts from '../utils/fonts'
import colors from '../utils/theme'

const { width, height } = Dimensions.get('screen')

const IMAGE_WIDTH = width * 0.8
const IMAGE_HEIGHT = IMAGE_WIDTH / (16 / 9)

const AddCat = ({ navigation }) => {

  const queryClient = useQueryClient()

  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  const { data, isLoading: loadingImage } = useQuery('random', fetchRandomImage)
  const { mutateAsync, isLoading } = useMutation(addCat, {
    onSuccess: res => {
      Alert.alert("Success, another kitten added!")
      queryClient.invalidateQueries("cats")
    }
  })

  return (
    <Layout>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={18} color={colors[900]} />
          <Heading size={18} color={colors[900]} mx={10}>Go Back</Heading>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          {loadingImage ? (
            <InlineIndicator />
          ) : (
            <Image
              source={{ uri: data.file }}
              style={{ width: '100%', height: '100%', borderRadius: 15 }}
            />
          )}
        </View>
        <CustomInput
          title="Name"
          ph={'Enter Cat Name'}
          handleValue={val => setName(val)}
        />
        <CustomInput
          title="Breed"
          ph={'Enter Cat Breed'}
          handleValue={val => setBreed(val)}
        />
        <CustomInput
          title="Description"
          ph={'Enter Description'}
          handleValue={val => setDescription(val)}
        />
        <TouchableOpacity
          disabled={!name || !breed || !description}
          style={{
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: !name || !breed || !description ? colors[100] : colors[900],
            borderRadius: 15,
            marginVertical: 20,
            elevation: 5
          }}
          onPress={() => mutateAsync({name, breed, description})}
        >
          <Heading color={colors[50]} fontFamily={Fonts.bold}>
            Add
          </Heading>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderRadius: 15,
    backgroundColor: '#ffffff30',
    alignSelf: 'center',
    marginBottom: 20
  },
  backBtn: {
    backgroundColor: '#ffffff90',
    width: '30%',
    height: 50,
    marginBottom: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AddCat
