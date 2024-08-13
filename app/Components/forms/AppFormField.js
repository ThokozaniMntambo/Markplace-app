import { View, Text } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import ErrorMessage from '../ErrorMessage'
import {useFormikContext} from 'formik' // formik use react context to pass object down

export default function AppFormField({name , width, ...otherProps}) {
   const  {setFieldTouched ,  handlechange ,error , touched} = useFormikContext 
  return (
   <>
   <AppTextInput
    onChangeText = {handlechange(name)}
    onBlur = {()=> setFieldTouched(name)}
    width = {width}
    {...otherProps}
  />
<ErrorMessage error = {error[name]} visible={touched.email}/>
   
   </>
  )
}