import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import BouncyCheckbox from 'react-native-bouncy-checkbox'

// Form validation
import * as Yup from 'yup'
import { Formik } from 'formik'

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
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>
            Password Generator
          </Text>
          <Formik 
          initialValues={{ passwordLength: '' }}
          validationSchema={PasswordSchema}
          onSubmit={ values => {
            console.log(values);
            generatePasswordString(Number(values.passwordLength))
          }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset
            }) => (
              <>
              <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Password Length:</Text>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text style={styles.errorText}>
                      {errors.passwordLength}
                    </Text>
                  )}
                </View>
                <TextInput 
                  style={styles.inputStyle} 
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  placeholder='4 - 16'
                  keyboardType='numeric'
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>
                  Include Lowercase
                </Text>
                <BouncyCheckbox 
                disableBuiltInState 
                isChecked={lowerCase}
                onPress={() => setLowerCase(!lowerCase)}
                fillColor='green'
                />
              </View>
              <View style={styles.inputWrapper}>
              <Text style={styles.heading}>
                  Include Uppercase
                </Text>
                <BouncyCheckbox 
                disableBuiltInState 
                isChecked={upperCase}
                onPress={() => setUpperCase(!upperCase)}
                fillColor='green'
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>
                  Include Numbers
                </Text>
                <BouncyCheckbox 
                disableBuiltInState 
                isChecked={numbers}
                onPress={() => setNumbers(!numbers)}
                fillColor='green'
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>
                  Include Symbols
                </Text>
                <BouncyCheckbox 
                disableBuiltInState 
                isChecked={symbols}
                onPress={() => setSymbols(!symbols)}
                fillColor='green'
                />
              </View>

              <View style={styles.formActions}>
                <TouchableOpacity
                disabled={!isValid}
                style={styles.primaryBtn}
                onPress={handleSubmit}
                >
                  <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.secondaryBtn}
                onPress={ () => {
                  handleReset();
                  resetPasswordState()
                }}
                >
                  <Text style={styles.secondaryBtnTxt}>Reset</Text>
                </TouchableOpacity>
              </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text selectable style={styles.generatedPassword}>{password}</Text>
            <Text style={styles.prompt}>Long Press to Copy</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '25%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
    textAlign: 'center'
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
    justifyContent: "center",
    alignItems: "center",
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 0,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryBtnTxt: {
    fontWeight: '700',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 8,
    color:'#000'
  },
  prompt: {
    textAlign: 'center',
    color: '#758283',
    marginBottom: 8,
    marginTop: 8
  },
})