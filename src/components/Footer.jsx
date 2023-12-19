import { Box, Button, HStack, Heading, Input, Stack, VStack, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
    return (
        <Box bg={'blackAlpha.900'} minW={'40'} p={'16'} color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
                        Subscribe to Get Update
                    </Heading>
                    <HStack borderBottom={'2px solid white'}>
                        <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                        <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0px 20px 20px 0px'}>
                            <AiOutlineSend></AiOutlineSend>
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={'full'} borderLeft={['none', '1px solid #fff']} borderRight={['none', '1px solid #fff']}>
                    <Heading size={'md'}>
                        Zee Video
                    </Heading>
                    <Text>
                        All Rights Reserved
                    </Text>
                </VStack>
                <VStack w={'full'} >
                    <Heading size={'md'}>
                        Social Media
                    </Heading>
                    <Button target={'blank'} variant={Link} colorScheme={'white'}>
                        <a href='https://chakra-ui.com/'>Youtube </a>
                    </Button>
                    <Button target={'blank'} variant={Link} colorScheme={'white'}>
                        <a href='https://chakra-ui.com/'>Facebook </a>
                    </Button>
                    <Button target={'blank'} variant={Link} colorScheme={'white'}>
                        <a href='https://chakra-ui.com/'>Instagram </a>
                    </Button>

                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer;