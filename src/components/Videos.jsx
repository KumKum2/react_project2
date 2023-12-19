import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import video1 from '../assets/videos/videoplayback1.mp4';
import video2 from '../assets/videos/videoplayback2.mp4';
import video3 from '../assets/videos/videoplayback3.mp4';
import video4 from '../assets/videos/videoplayback4.mp4';
import video5 from '../assets/videos/videoplayback5.mp4';

const Videos = () => {
    const videoarr = [video1, video2, video3, video4, video5];

    const [videoSrc, setVideoSrc] = useState(videoarr[0]);


    return (
        <Stack direction={['column', 'row']} height={'100vh'}>
            <VStack width={'full'}>
                <video controls autoPlay controlsList='nodownload' src={videoSrc} style={{ width: '100%' }}>

                </video>
                <VStack alignItems={'flex-start'} p={'8'} w={'full'}>
                    <Heading>
                        Sample Video 1
                    </Heading>
                    <Text overflow={'auto'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                </VStack>
            </VStack>
            <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflow={'auto'} >

                {videoarr.map((item, index) => (<Button variant={'ghost'} colorScheme='puple' onClick={() => setVideoSrc(item)}>
                    Lecture {index + 1}
                </Button>))}

            </VStack>
        </Stack>
    )
}

export default Videos