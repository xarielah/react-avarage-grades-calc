import { Input, Button, HStack, Text, Box } from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';

const GradeInput = ({ refresh }) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ defaultValues: { grade: '', points: '', name: '' } });

    const onSubmit = data => {
        const previousData = localStorage.getItem('data');

        if (previousData) {
            const existingData = JSON.parse(previousData);
            const formData = {
                id: existingData.length,
                ...data
            };
            const parsedData = [...existingData, formData];

            localStorage.setItem('data', JSON.stringify(parsedData));
            refresh();
        } else {
            const formData = {
                id: 0,
                ...data
            };
            localStorage.setItem('data', JSON.stringify([formData]));
            refresh();
        }
        reset();
    };

    const rules = { patten: /^[0-9]*$/, required: true };

    return (
        <Box my={10}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <HStack px={{ base: 2, md: 0 }}>
                    <Controller
                        name='name'
                        control={control}
                        rules={{
                            pattern: /^[0-9\u0590-\u05FF- 'A-Za-z]*$/,
                            required: true,
                            minLength: 3
                        }}
                        render={({ field }) => <Input isInvalid={errors.name} placeholder='הכנס שם קורס...' {...field} />}
                    />
                    <Controller
                        name='points'
                        control={control}
                        rules={{ ...rules, max: 10 }}
                        render={({ field }) => (
                            <Input placeholder={'נ"ז'} isInvalid={errors.points} type='number' maxW='20%' {...field} />
                        )}
                    />
                    <Controller
                        name='grade'
                        control={control}
                        rules={{ ...rules, max: 100, min: 0 }}
                        render={({ field }) => (
                            <Input placeholder={'ציון סופי'} isInvalid={errors.grade} type='number' maxW={'20%'} {...field} />
                        )}
                    />
                    <Button type='submit' colorScheme={'whatsapp'}>
                        הוסף
                    </Button>
                </HStack>
                <Text as='sub' fontWeight={'bold'} color='gray.400' fontStyle='italic'>
                    * הוסף לפחות 2 קורסים.
                </Text>
            </form>
        </Box>
    );
};

export default GradeInput;
