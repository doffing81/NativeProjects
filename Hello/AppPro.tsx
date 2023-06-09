import React from 'react'

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'light'
    return(
        <SafeAreaView style={styles.container}>
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>
                Hello
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        lightText: {
            color: '#FFFFFF'
        },
        darkText: {
            color: '#000000'
        }
    }
)

export default AppPro;