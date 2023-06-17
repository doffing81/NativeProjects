/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'; 

import diceOne from '../assets/One.png'
import diceTwo from '../assets/Two.png'
import diceThree from '../assets/Three.png'
import diceFour from '../assets/Four.png'
import diceFive from '../assets/Five.png'
import diceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne)

  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(diceOne)
        break;
      case 2:
        setDiceImage(diceTwo)
        break;
      case 3:
        setDiceImage(diceThree)
        break;
      case 4:
        setDiceImage(diceFour)
        break;
      case 5:
        setDiceImage(diceFive)
        break;
      case 6:
        setDiceImage(diceSix)
        break;
      default:
        setDiceImage(diceOne)
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff2f2'
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: '#e5e0ff',
    borderRadius: 8,
    fontSize: 16,
    color: '#8ea7e9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
