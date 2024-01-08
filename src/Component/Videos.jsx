import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Dbjson from '../Component/Dbjson'
const Videos = () => {
  const [videosrc,setvideosrc]=useState(Dbjson[0].src)
  return (
    <>
      <Stack h={'100vh'} direction={['column','row']}>
      <VStack w={'full'}>
      <iframe width="1024" height="480" src={videosrc.src} title={videosrc.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
     <VStack p={8} alignItems={'flex-start'} overflowY={'auto'} w={'full'}>
        <Heading>{videosrc.name}</Heading>
        <Text>{videosrc.title}</Text>
      </VStack>
      </VStack>
    
       <VStack w={['full','xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
       {
        Dbjson.map((item,index)=>
        (
          <Button variant={'ghost'} colorScheme='purple' key={index} 
          onClick={(e)=>setvideosrc(item)}>
          {item.name}
         </Button>
       
        )
        )  
       }
         
       </VStack>
      </Stack>
    </>
  )
}

export default Videos