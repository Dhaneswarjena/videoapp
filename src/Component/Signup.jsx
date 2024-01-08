import { Heading, Input, Container, VStack, Button, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
        <Container w={'container.xl'} minH={'100vh'} p={'16'}>
    <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
         <Heading alignSelf={'center'}>VIDEO HUB</Heading>
         <Avatar alignSelf={'center'} boxSize={'32'} />
         <Input type={'text'} required placeholder='Name' focusBorderColor={'purple.500'}/>
         <Input type={'email'} required placeholder='Email' focusBorderColor={'purple.500'}/>
         <Input type={'password'} required placeholder='Password' focusBorderColor={'purple.500'}/>
        
         <Button colorScheme={'purple'}>
            <Link to="/signup" type={'submit'}>Sign Up</Link>
         </Button>
         <Text textAlign={'right'}>
            Already Sign Up?{' '}
            <Button variant={'link'} colorScheme='purple'>
            <Link to="/login" type={'submit'}>Log In</Link>
         </Button>
         </Text>
       </VStack>
    </form>
       
    </Container>
    </>
  )
}

export default Signup