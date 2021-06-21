import {Flex, Text} from '@chakra-ui/react';
import { Nav } from './Nav';

export const Header = ( {entity} ) => {
    return (
        <Flex direction='row' align='center' p='1rem' justify='space-between' w='100%' h='5rem' bg='#c2c2c2'>
            <Flex>
                <Text>WarmUP JS</Text>
            </Flex>
            <Nav entity={entity}/>
        </Flex>
    );
};