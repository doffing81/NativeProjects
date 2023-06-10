import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HScrollCards() {
  return (
    <View>
      <Text style={styles.headingText}>HScrollCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text style={{fontSize: 64}}>🂡</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text style={{fontSize: 64}}>🂱</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text style={{fontSize: 64}}>🃁</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text style={{fontSize: 64}}>🃑</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text style={{fontSize: 64}}>🂮</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text style={{fontSize: 64}}>🂾</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text style={{fontSize: 64}}>🃎</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
      },
      container: {
        padding: 8
      },
      card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
      },
      elevatedCard: {
        backgroundColor: "#cad5e2",
        elevation: 4
      }
})