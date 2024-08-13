
import React from 'react'
import { Formik } from 'formik'

export default function AppForm({initialValues , onSubmit , validationSchema , children}) {
  return (
    <Formik
    initialValues={{ initialValues}}
    onSubmit={onSubmit}
    validationSchema={validationSchema}          /* he Formik component initializes the form state and provides form handling methods.
                                                  The ren der prop function receives these methods and state, which are used to configure the form elements.
                                                When the user fills in the form and presses the login button, the form state is updated and the values are logged to the console. */
  >
    {() =>(  
    <>
    {children}
    
    </>
    )}
    </Formik>
 
  )
}