import { StyleSheet, Text } from 'react-native';
import React from 'react';
import type { PropsWithChildren } from 'react';

type MarkerProps = PropsWithChildren<{
    name: string;
}>

const Marker = ({name} : MarkerProps) => {
    switch (name) {
        case 'Circle':
            return <Text style={styles.circle}>O</Text>;
        case 'Cross':
            return <Text style={styles.cross}>X</Text>;
        default:
            return <Text style={styles.mark}>?</Text>;
    }
}

const styles = StyleSheet.create({
    circle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red'
    },
    cross: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'green'
    },
    mark: {
        fontSize: 40,
        color: 'gray'
    }
})

export default Marker;