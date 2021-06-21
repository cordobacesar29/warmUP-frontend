import {Flex, Box} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {

    return(
        <Flex direction='row' align='center' p='1rem' m='1rem' justify='space-between'>
            <NavLink to="/home">
                <Box borderRadius="md" bg="black" mx='1rem'color="white" px={4} h={8}>
                    Home
                </Box>
            </NavLink>
            <NavLink to="/createform">
                <Box borderRadius="md" bg="black" mx='1rem' color="white" px={4} h={8}>
                    createForm
                </Box>
            </NavLink>
            <NavLink to="/editform">
                <Box borderRadius="md" bg="black" mx='1rem' color="white" px={4} h={8}>
                    editForm
                </Box>
            </NavLink>
        </Flex>
    );
};