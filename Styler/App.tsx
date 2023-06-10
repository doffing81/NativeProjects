import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import HScrollCards from './components/HScrollCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <HScrollCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App