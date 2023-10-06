import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Tab from './Tab'
import { Button } from '@rneui/themed'

const MainLayout = ({navigation}) => {
  return (
    <>
     <Header />
     <Tab navigation={navigation} />
     
    </>
  )
}

export default MainLayout