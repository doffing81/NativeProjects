import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(url: string) {
        Linking.openURL(url)
    }
  return (
    <View>
      <Text style={styles.cardTitle}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Blockstream.com</Text>
        </View>
        <Image source={require('../assets/blockstream.png')} style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text numberOfLines={3}>
                Blockstream is a blockchain technology company led by co-founder Adam Back, 
                headquartered in Victoria, Canada, with offices and staff worldwide. 
                The company develops a range of products and services for the storage and transfer of Bitcoin and other digital assets. 
                The company has raised $210M to date from investors, including venture capital firms Horizons Ventures, 
                Mosaic Ventures, and AXA Strategic Ventures.
            </Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => openWebsite('https://blockstream.com')}>
                <Text>More Info</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://blockstream.info')}>
                <Text>Block Explorer</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: '95%',
        height: 300,
        marginVertical: '2.5%',
        marginHorizontal: '2.5%',
        borderRadius: 6,
        backgroundColor: '#eee'
    },
    elevatedCard: {},
    header: {},
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginVertical: 5
    },
    cardImage: {
        height: '40%',
        width: '100%',
        marginBottom: 8,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    footer: {}
})