import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/banner-1.jpg';
import img2 from '../assets/banner-2.jpg';
import img3 from '../assets/banner-3.jpg';


const HeadingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl'
}
const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.x1'} minH={'100vh'} p={'16'} >
                <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
                <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column', 'row']}>
                    <Img src={img1} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                    </Text>
                </Stack>
            </Container>
        </Box >
    )
}



const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w='full' height='100vh'>
            <Img src={img1} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bg={'blackAlpha.900'} color={'white'} {...HeadingOptions}>Watch the Fucture</Heading>
        </Box>
        <Box w='full' height='100vh'>
            <Img src={img2} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bg={'whiteAlpha.900'} color={'black'} {...HeadingOptions}>Future Game Forcasting</Heading>
        </Box>
        <Box w='full' height='100vh'>
            <Img src={img3} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bg={'blackAlpha.900'} color={'white'} {...HeadingOptions}>Night Life is Cool</Heading>
        </Box>
    </Carousel>
);

export default Home;