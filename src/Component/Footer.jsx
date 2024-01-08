import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdSend } from "react-icons/md";
const Footer = () => {
  return (
    <>
    <Box bgColor={'blackAlpha.900'} color={'white'} minH={'40'} p="16">
        <Stack direction={['column','row']}>
          <VStack w={'full'} px={'4'} justifyContent={'stretch'} alignItems={'left'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                Lecture Videos
            </Heading>
            <HStack py={'2'} borderBottom={'2px solid white'}>
              <Input border={'none'} outline={'none'} focusBorderColor={'none'} borderRadius={'none'} placeholder='Enter message'/>
              <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0px 20px 20px 0px'}>
                <MdSend size={'20'}/>
              </Button>
            </HStack>
          </VStack>
          <VStack w={'full'} borderLeft={'2px solid white'} borderRight={'2px solid white'}>
            <Heading size={'md'} textAlign={['center','left']}>
                VIDEO HUB
            </Heading>
            <Text>&copy; All right Reserve</Text>
          </VStack>
          <VStack w={'full'} px={'4'} justifyContent={'left'}>
            <Heading size={'md'}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme='white'>
                <a href="https://youtube.com">YouTube</a>
            </Button>
            <Button variant={'link'} colorScheme='white'>
            <a href="https://instagram.com">Instagram</a>
            </Button>
            <Button variant={'link'} colorScheme='white'>
            <a href="https://linkedin.com">LinkedIn</a>
            </Button>
                
          </VStack>
        </Stack>
    </Box>
    </>
  )
}

export default Footer