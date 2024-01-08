import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsCloudUpload } from "react-icons/bs";
const Upload = () => {
  return (
    <>
    <Container maxW={'containet.xl'} h={'100vh'} p={'16'}>
    <VStack color={'purple.500'} justifyContent={'center'} h={'full'}>
    <BsCloudUpload size={'10vmax'}/>
    <form>
    <HStack>
    <Input type={'file'} required css={{
        "&::file-selector-button":{
          border:'none',
          width:'calc(100% + 36px)',
          height:'calc(100%)',
          marginLeft:'-18px',
          color:'purple',
          backgroundColor:'white',
          cursor:'pointer'
        },
    }}/>
    <Button colorScheme='purple' type={'submit'}>Upload</Button>
    </HStack>
    </form>
    </VStack>
    
    
    </Container>
    </>
  )
}

export default Upload