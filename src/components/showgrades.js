import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const ShowGrades = ({ gradesArray, refresh }) => {
    const deleteListing = id => {
        const newDataSet = gradesArray.filter(item => item.id !== id);
        localStorage.setItem('data', JSON.stringify(newDataSet));
        refresh();
    };

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>חישוב: ממוצע * נק' זכות, לחלק במספר נקודות הזכות.</TableCaption>
                <Thead>
                    <Tr>
                        <Th>שם קורס</Th>
                        <Th isNumeric>נק' זכות</Th>
                        <Th isNumeric>ציון</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {gradesArray.map((item, index) => (
                        <Tr key={index}>
                            <Td>{item.name}</Td>
                            <Td isNumeric>{item.points}</Td>
                            <Td isNumeric>{item.grade}</Td>
                            <Td borderBottom={'none'}>
                                <DeleteIcon onClick={() => deleteListing(item.id)} cursor={'pointer'} _hover={{ color: 'red' }} />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default ShowGrades;
