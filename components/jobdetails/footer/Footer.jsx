import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import { icons } from '../../../constants'
import styles from './footer.style'

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image 
          source={icons.heartOutline}
          style={styles.likeBtnImage}
          resizeMode='contain'
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
        >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer