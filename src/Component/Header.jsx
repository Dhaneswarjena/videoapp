import React from 'react'
import { Drawer,DrawerContent,DrawerHeader,DrawerBody,DrawerCloseButton,Button,DrawerOverlay, useDisclosure, VStack, HStack } from '@chakra-ui/react'
import {BiMenuAltLeft} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Header = () => {
    const {isOpen,onOpen,onClose}=useDisclosure()
  return (
    <>
        <Button colorScheme={'purple'} zIndex={'overlay'} pos={'fixed'} left={'4'} top={'4'} borderRadius={'full'} h={'10'} w={'1'} p={'0'} onClick={onOpen}>
              <BiMenuAltLeft size={'20'}/>
        </Button>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
           <DrawerOverlay/>
           <DrawerContent>
            <DrawerHeader>VIDEO HUB</DrawerHeader>
            <DrawerCloseButton onClose={onClose}/>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
                        <Link to="/">Home</Link>
                    </Button>
                    <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
                        <Link to="/videos">Videos</Link>
                    </Button>
                    <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
                        <Link to="/videos?category=free">Free Videos</Link>
                    </Button>
                    <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
                        <Link to="/upload">Upload</Link>
                    </Button>
                </VStack>
                <HStack pos={'absolute'} bottom={'10'} justifyContent={'space-evenly'} w={'full'} left={'0'}>
                <Button colorScheme='purple' onClick={onClose}>
                        <Link to="/login">Log In</Link>
                    </Button>
                    <Button colorScheme='purple' variant={'outline'} onClick={onClose}>
                        <Link to="/SignUp">Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
           </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header