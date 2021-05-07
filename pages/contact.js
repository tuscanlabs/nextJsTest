import React from 'react';
import emailjs from 'emailjs-com';  
import { Flex, Input, Form, FormControl, FormLabel, Text, InputGroup, Button,
Stack } from '@chakra-ui/react'


export default function ContactUs() {

  function sendEmail(e) {
      console.log("Hello" + e.target);
    e.preventDefault();

    emailjs.sendForm('service_qv5rf4j', 'template_yb4s5du', e.target, 'user_zwXFACRqpbUlyuAmu03Mj')
      .then((result) => {
          console.log(result.text);
          e.target.reset;
      }, (error) => {
          console.log(error.text);
      });
      
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
        <form id="frm1" action='submit' onSubmit={sendEmail} >
            <Flex height="50vh" backgroundColor="Orange.100" direction="column">
             <FormControl>
              <FormLabel>Material</FormLabel>
              <Input id="material" type="text" placeholder="TV" />
            </FormControl>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input id="date" type="date"  />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input id="to_name" type="text" placeholder="Name"/>
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Input id="message" type="text" placeholder="Message" />
            </FormControl>
            <Button 
            mt={4}
            colorScheme="teal" 
            type="submit">
                Contact Us
            </Button>
            </Flex>
        </form>
    </Flex>
  );
}