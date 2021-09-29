import React,{useRef,useState} from 'react';
import { Formik,Form,Field } from 'formik';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    FormHelperText,
    Textarea,
    Button,
    Center,
    Box,
    Heading
  } from "@chakra-ui/react"

export function ContactUs(){
    const validateName = (value) => {
        let error
        if (!value) {
          error = "Name is required"
        } else if (value.toLowerCase() !== "naruto") {
          error = "Jeez! You're not a fan 😱"
        }
        return error
      }
    const handleSubmit = (values, actions)=>{
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
    }
    
      return (
          <Box display="flex" bg="#fff" p={10} flexDir="column" alignItems="center" justify="center" justifyContent="center" >
              <Box>
                  <Heading m={4}>Contactanos</Heading>
              </Box>
              <Box>
                    <Formik
                    initialValues={{ name: "", asunto:"" }}
                    onSubmit={handleSubmit}
                    >
                    {(props) => (
                        <Form>
                        <Field name="name" validate={validateName}>
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input {...field} id="name" placeholder="name" />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>
                        <Field name="asunto" >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor="asunto">Asunto</FormLabel>
                                    <Input {...field} id="asunto" placeholder="asunto" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                                )}
                        </Field>
                        <FormLabel htmlFor="mensaje">Mensaje</FormLabel>
                        <Textarea placeholder="Escribe tu mensaje..." id="mensaje" h={50}/>
                        <Center><Button
                            m={4}
                            width="20vw"
                            bg="tomato"
                            color="#fff"
                            _hover={{ color: '#000' }}
                            isLoading={props.isSubmitting}
                            type="submit"
                        >
                            Enviar
                        </Button></Center>
                        </Form>
                    )}
                    </Formik>
                </Box>
        </Box>
      )
}