import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

const CalculateGrades = ({ gradesArray }) => {
    const [avg, setAvg] = useState(0);

    const calcAvg = () => {
        let pointsTotal = 0;
        let gradesTotal = 0;
        for (let i = 0; i < gradesArray.length; i++) {
            pointsTotal = pointsTotal + parseInt(gradesArray[i].points);
            let gradeXpoints = gradesArray[i].grade * gradesArray[i].points;
            gradesTotal += gradeXpoints;
        }
        setAvg(Math.round(gradesTotal / pointsTotal));
    };
    return (
        <Box mb={10} textAlign='center'>
            <Button colorScheme={'whatsapp'} onClick={calcAvg}>
                חשב ממוצע
            </Button>
            {avg > 0 && <Text mt={2}>ממוצע: {avg}</Text>}
        </Box>
    );
};

export default CalculateGrades;
