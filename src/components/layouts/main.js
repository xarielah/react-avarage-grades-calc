import { Box, Container } from '@chakra-ui/react';

const MainLayout = ({ children }) => {
    return (
        <Box as='main'>
            <Container maxW='container.md'>{children}</Container>
        </Box>
    );
};

export default MainLayout;
