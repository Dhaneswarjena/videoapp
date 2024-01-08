import { Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assests/1.jpg'
import img2 from '../Assests/2.jpg'
import img3 from '../Assests/3.jpg'
import img4 from '../Assests/4.jpg'
import img5 from '../Assests/5.png'
const styles={
    pos:'absolute',
    top:'50%',
    left:'50%',
    transform:"translate(-50%,-50%)",
    textTransform:'uppercase',
    p:'4',
    size:'4xl'
}
const Home = () => {
  return (
    <>
        <Box>
         <MyCarousel />
         <Container minW={'container.xl'} minH={'100vh'} p="16">
             <Heading textTransform={'uppercase'} py="2" borderBottom={'2px solid'} w={'fit-content'} m='auto'>
                Service
             </Heading>
             <Stack h="full" p={'4'} alignItems={'center'} direction={['column','row']}>
               <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40','400']}/>
          
             <Text letterSpacing={'widest'} p={['4','16']} lineHeight={'190%'} textAlign={'center'}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius atque laboriosam suscipit at labore? Sint culpa quam nemo, iste dolorum illum dolores molestias sunt soluta aperiam? Esse aperiam expedita ipsam.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius atque laboriosam suscipit at labore? Sint culpa quam nemo, iste dolorum illum dolores molestias sunt soluta aperiam? Esse aperiam expedita ipsam.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius atque laboriosam suscipit at labore? Sint culpa quam nemo, iste dolorum illum dolores molestias sunt soluta aperiam? Esse aperiam expedita ipsam.
             </Text>
             </Stack>
         </Container>
        </Box>
    </>

  )
}
const MyCarousel=()=>{
return(
    <Carousel infiniteLoop showArrows={false} showStatus={false} autoPlay showThumbs={false} interval={1000}>
         <Box width={'100'} height={'100vh'}>
            <Image src={img1} alt=""/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...styles}>Watch the Future</Heading>
         </Box>
         <Box width={'100'} height={'100vh'}>
            <Image src={img2} alt=""/>
            <Heading bgColor={"whiteAlpha.900"} color={'black'} {...styles}>Future is Gaming</Heading>
         </Box>
         <Box width={'100'} height={'100vh'}>
            <Image src={img3} alt=""/>
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...styles}>Gaming is console</Heading>
         </Box>
         <Box width={'100'} height={'100vh'}>
            <Image src={img4} alt=""/>
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...styles}>Night life is Cool</Heading>
         </Box>
        
    </Carousel>
)
}
export default Home