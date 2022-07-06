import { Box, Text } from '@chakra-ui/react';

const ResetAll = ({ refresh }) => {
    const resetCourses = () => {
        localStorage.removeItem('data');
        localStorage.setItem('data', JSON.stringify([]));
        refresh();
    };

    return (
        <Box align='center' mb={2}>
            <Text
                w='max-content'
                onClick={resetCourses}
                color='red'
                textDecoration={'underline'}
                cursor='pointer'
                fontSize='.8rem'
            >
                אפס הכל
            </Text>
        </Box>
    );
};

export default ResetAll;
