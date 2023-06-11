import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image source={require('../assets/math.jpg')} style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Mathematics</Text>
            <Text style={styles.cardLabel}>Invented or Discovered?</Text>
            <Text style={styles.cardDescription}>Mathematics is invented due to the very nature of 0 and 1, 
            and thereby all quantification, that is, at no point in time does 0 exist (there is nothing), 
            but rather, something may not exist in relation to something else, whereby 0 is subject to, 
            or an abstraction of, something else, a relation that must be chosen; subjective. One is also subjective. 
            Any one thing is not only comprised of many, but is a part of many, whereby any one thing is merely chosen to be 
            that single thing taken into consideration.</Text>
            <Text style={styles.cardFooter}>All is chosen, all is invented.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: '95%',
        height: 400,
        marginVertical: '2.5%',
        marginHorizontal: '2.5%',
        borderRadius: 6,
        backgroundColor: '#eee'
    },
    elevatedCard: {
        elevation: 4
    },
    cardImage: {
        height: '40%',
        width: '100%',
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4
    },
    cardDescription: {
        fontSize: 12,
        marginBottom: 12
    },
    cardFooter: {
        fontSize: 12,
        fontWeight: '500'
    },
})