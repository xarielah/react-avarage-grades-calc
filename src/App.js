import { Box, Heading, Image, Link, Text, Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import AddItem from './components/inputgrade';
import ShowGrades from './components/showgrades';
import CalculateGrades from './components/calcgrades';
import logo from './images/yvc.png';

function App() {
    const [gradesArray, setGradesArray] = useState([]);
    const [isGradeAdded, setIsGradeAdded] = useState(false);

    const refresh = () => setIsGradeAdded(prev => !prev);

    useEffect(() => {
        const gradesData = localStorage.getItem('data');
        if (gradesData) {
            setGradesArray(JSON.parse(gradesData));
        } else {
            localStorage.setItem('data', JSON.stringify([]));
        }
    }, [isGradeAdded]);

    return (
        <Box h='100vh'>
            <Box align='center' mt={3}>
                <Image src={logo} bg='gray.400' maxW='200px' p={3} borderRadius='md' alt='yvc logo' />
            </Box>

            <Heading align='center' mt={3} size='2xl' color='green.800'>
                מחשבון ממוצעים
            </Heading>

            <AddItem refresh={refresh} />

            {gradesArray.length >= 2 && <CalculateGrades gradesArray={gradesArray} />}

            {gradesArray?.length > 0 && gradesArray ? (
                <ShowGrades refresh={refresh} gradesArray={gradesArray} />
            ) : (
                <Heading size='lg' align='center'>
                    הזן קורסים כדי לראות את הטבלה
                </Heading>
            )}

            <Divider my={4} />

            <Text align={'center'} fontStyle='italic' fontWeight={'medium'} color='gray.300'>
                נבנה על ידי{' '}
                <Link textDecoration={'none'} target='_blank' color='green.300' href='https://github.com/xarielah'>
                    xarielah
                </Link>
            </Text>
        </Box>
    );
}

export default App;
