import { View, Text } from 'react-native';
import React from 'react';
import type { PropsWithChildren } from 'react';

type MarkerProps = PropsWithChildren<{
    name: string;
}>

const Marker = ({name} : MarkerProps) => {
    switch (name) {
        case 'circle':
            return <Text>O</Text>;
        case 'cross':
            return <Text>X</Text>;
        default:
            return <Text>?</Text>;
    }
}

export default Marker;