import React from 'react'
import {  Input, FormControl, FormLabel, Button, FormErrorMessage,
    Box } from '@chakra-ui/react'
 import { useFormik }   from 'formik'

 import { ChakraInput } from './ChakraInput'
 const initialValues = {
     name: 'Raghu',
     email: '',
    channel: ''
 }

 const onSubmit = values => {
    console.log('Form data', values)
 }

 const validate = values => {
    let errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if 
    ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }
    if (!values.channel) {
        errors.channel = 'Required'
    }
    return errors
}

function YoutubeForm() {

    const formik = useFormik({ 
        initialValues,
        onSubmit,
        validate
    })

    //console.log('Form values', formik.values)
    return (
        <div>
           <form  onSubmit={formik.handleSubmit}> 
               <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" backgroundColor="red.200">
                    <FormControl margin={1} padding={1} isInvalid={formik.errors.name} isRequired={true}> 
                        <FormLabel>Name</FormLabel>
                        <Input id="name" type="text" placeholder="TV" backgroundColor="red.100"
                         onChange={formik.handleChange}
                        value={formik.values.name}/>
                        <FormErrorMessage>{formik.errors.name}</FormErrorMessage> 
                    </FormControl>
                    <FormControl margin={1} padding={1}>
                        <FormLabel>Email</FormLabel>
                        <Input id="email" type="email" name="email" placeholder="your email " backgroundColor="red.100"
                        onChange={formik.handleChange}
                        value={formik.values.email}/>
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </FormControl>
                    <FormControl margin={1} padding={1}>
                        <FormLabel>Channel</FormLabel>
                        <Input id="channel" type="text" name="channel" placeholder="Channel" backgroundColor="red.100"
                        onChange={formik.handleChange}
                        value={formik.values.channel}/>
                        {formik.errors.channel ? <div>{formik.errors.channel}</div> : null}
                    </FormControl>
                    <ChakraInput />
                    <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                    Sign In
                    </Button>
                </Box> 
           </form> 
        </div>
    )
}

export default YoutubeForm
