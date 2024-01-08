import { Heading, Input, Container, VStack, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Container w={'container.xl'} minH={'100vh'} p={'16'}>
    <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
         <Heading>Welcome Back</Heading>
         <Input type={'email'} required placeholder='Email' focusBorderColor={'purple.500'}/>
         <Input type={'password'} required placeholder='Password' focusBorderColor={'purple.500'}/>
         <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to="/forgotpassword">Forgot Password</Link>
         </Button>
         <Button colorScheme={'purple'}>
            <Link to="/login" type={'submit'}>Log in</Link>
         </Button>
         <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme='purple'>
            <Link to="/signup" type={'submit'}>Sign Up</Link>
         </Button>
         </Text>
       </VStack>
    </form>
       
    </Container>
    </>
  )
}

export default Login