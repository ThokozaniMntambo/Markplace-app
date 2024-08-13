import { StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../Components/Screen'
import {AppForm , AppFormField , SubmitButton} from '../Components/forms'

import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
email : Yup.string().email('Invalid email address').required('Email is required'),
Password : Yup.string.min(6 , 'Password must be at least 6 characters').require('Password is Required')

});



export default function LoginScreen() {
  return (
    <Screen style = {styles.Container}>
    <Image style ={styles.logo} source ={require('../assets/logo.png')} />
  <AppForm
  initialValues={{ email : '', password : ' ' }}
  onSubmit={values => console.log(values)}
  validationSchema={validationSchema}          /* he Formik component initializes the form state and provides form handling methods.
                                                The ren der prop function receives these methods and state, which are used to configure the form elements.
                                              When the user fills in the form and presses the login button, the form state is updated and the values are logged to the console. */
  >
      <AppFormField
    icon= "email"
    placeholder ="Email"
    autoCapitalize = "none"
    name = 'email'
    autoCorrect ={false}
    textContentType = "emailAddress"  
 />
<AppFormField
  icon= "lock"
  placeholder ="password"
  secureTextEntry
  name= 'password'
  autoCapitalize = "none"
  autoCorrect ={false}
  textContentType = "password"  
/>
<SubmitButton title= "Login"/>

  </AppForm>
    </Screen>
  )
}
const styles = StyleSheet.create({
    logo : {
        width : 80,
        height : 80,
        alignSelf : "center",
        marginTop : 50,
        marginButton : 20,
    },
    Container : {
        padding : 10,
    },
})