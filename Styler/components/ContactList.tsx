import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'shesek',
            status: 'Bitcoin Developer',
            imageUrl: 'https://avatars.githubusercontent.com/u/877904?v=4'
        },
        {
            uid: 2,
            name: 'wintercooled',
            status: 'Esplora',
            imageUrl: 'https://avatars.githubusercontent.com/u/25693053?v=4'
        },
        {
            uid: 3,
            name: 'snyke',
            status: 'Greenlight',
            imageUrl: 'https://avatars.githubusercontent.com/u/120117?v=4'
        },
        {
            uid: 4,
            name: 'benthecarmen',
            status: 'Mutiny Wallet',
            imageUrl: 'https://avatars.githubusercontent.com/u/15256660?v=4'
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image source={{uri: imageUrl}} style={styles.userImage}/>
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 8
      },
      container: {
        paddingHorizontal: 16
      },
      userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 2,
        borderRadius: 6
      },
      userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        borderColor: 'orange',
        borderWidth: 2
      },
      userName: {
        fontSize: 16,
        fontWeight: 'bold'
      },
      userStatus: {
        fontSize: 12
      }
})