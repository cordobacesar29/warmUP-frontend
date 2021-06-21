import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Flex, Button, Text, Container, Heading } from "@chakra-ui/react";
import {usePosts} from '../hooks/apiHook';



export const Detail = () => {
    const { id } = useParams();
    let history = useHistory();
    const { posts } = usePosts();
    const postExits = id ? posts.find(p => p.id === Number(id)) : null;
    if (!postExits) {
        return <h5 className='error'>Post not found</h5>;
    }
    return (
        <Container>
            <Flex direction='column' justify='space-between' align='center' w='50vh' h='60vh' p='2rem' border='2px solid #c2c2c2' borderRadius='8px' m='2rem'>
                <Flex m='1rem' direction='column' justify='center'>
                    <Heading m='1rem'>Title</Heading>
                    <Text m='1rem'>{postExits.title}</Text>
                    <Heading m='1rem'>Content</Heading>
                    <Text m='1rem'>{postExits.body}</Text>
                </Flex>
            <Button onClick={()=>history.push('/home')}>Close</Button>
            </Flex>
        </Container>
    )
}