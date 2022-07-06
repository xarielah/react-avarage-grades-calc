import { Box, Container, Image, Heading, Divider, Text, Link } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import logo from '../../images/yvc.png';

const MainLayout = ({ children }) => {
    return (
        <Box as='main'>
            <Box align='center' mt={3}>
                <Image src={logo} bg='gray.400' maxW='200px' p={3} borderRadius='md' alt='yvc logo' />
            </Box>

            <Heading align='center' mt={3} size='2xl' color='green.800'>
                מחשבון ממוצעים
            </Heading>

            <Container maxW='container.md'>{children}</Container>

            <Divider my={4} />

            <Text align={'center'} fontStyle='italic' fontWeight={'medium'} color='gray.300'>
                נבנה על ידי{' '}
                <Link textDecoration={'none'} target='_blank' color='green.300' href='https://github.com/xarielah'>
                    xarielah <BsGithub style={{ color: '#68D391', width: '15px', display: 'inline' }} />
                </Link>
            </Text>
            <Text align={'center'} fontWeight={'bold'}>
                <Link
                    textDecoration={'none'}
                    target='_blank'
                    color='gray.400'
                    fontSize='.8rem'
                    href='https://github.com/xarielah/react-avarage-grades-calc'
                >
                    קוד מקור <ExternalLinkIcon />
                </Link>
            </Text>
        </Box>
    );
};

export default MainLayout;
