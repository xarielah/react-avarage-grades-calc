import { Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import AddItem from './components/inputgrade';
import ShowGrades from './components/showgrades';
import CalculateGrades from './components/calcgrades';

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
        <Box>
            <AddItem refresh={refresh} />

            {gradesArray.length >= 2 && <CalculateGrades gradesArray={gradesArray} />}

            <Box my={10} border={{ base: 'none', sm: '1px solid #ccc' }} borderRadius='lg' p={{ base: 0, md: 5 }}>
                {gradesArray?.length > 0 && gradesArray ? (
                    <ShowGrades refresh={refresh} gradesArray={gradesArray} />
                ) : (
                    <Heading size='md' p={5} align='center'>
                        לא הוזנו קורסים,
                        <br />
                        נדרש להזין לפחות שני קורסים
                    </Heading>
                )}
            </Box>
        </Box>
    );
}

export default App;
