import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

// Form validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be a minimum size of 4')
  .max(16, 'Should be a maximum size of 16')
  .required('Length is required')
})

export default function App() {

  const [password, setPassword] = useState('')
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let characterList = ''

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const digits = '0123456789'
    const special = '!@#$%^&*()_+-'

    if (upperCase) {
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += upperCaseChars.toLowerCase()
    }
    if (numbers) {
      characterList += digits
    }
    if (symbols) {
      characterList += special
    }

    setPassword(createPassword(characterList, passwordLength))
    setIsPasswordGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  const resetPasswordState = () => {
    setPassword('')
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
    setIsPasswordGenerated(false)
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})